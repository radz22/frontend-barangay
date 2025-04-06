import { useEffect, useRef } from "react";
import { cencusSchema, cencusType } from "../../type/user/cencus-zod";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateAge } from "../../utils/calculateAge";
import CencusHook from "../../hooks/staff/cencus-hook";
import authHook from "../../hooks/authHook";
import { useState } from "react";
import * as faceapi from "face-api.js";

export const CencusContentForm = () => {
  const { handleCreateCencus, createCencusMutation } = CencusHook();
  const { handleLogout } = authHook();

  // Refs and state
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [show, setShow] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [angleMessage, setAngleMessage] = useState("");

  // Form setup
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm<cencusType>({
    resolver: zodResolver(cencusSchema),
    defaultValues: {
      householdMembers: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "householdMembers",
  });

  // Watched values
  const selectedDate = watch("birthday");
  const disAbilityStatus = watch("disabilitystatus");
  const residentLived = watch("residentlived");
  const dateofcencus = watch("dateofcencus");
  const areaofcencusstreet = watch("areaofcencusstreet");
  const householdMembers = watch("householdMembers");

  // Effects
  useEffect(() => {
    if (selectedDate) {
      const age = calculateAge(selectedDate);
      setValue("age", age, { shouldValidate: true });
    }
  }, [selectedDate, setValue]);

  useEffect(() => {
    if (householdMembers) {
      householdMembers.forEach((member, index) => {
        if (member.birthday) {
          const age = calculateAge(member.birthday);
          setValue(`householdMembers.${index}.age`, age, {
            shouldValidate: true,
          });
        }
      });
    }
  }, [JSON.stringify(householdMembers), setValue]);

  useEffect(() => {
    loadModels();
  }, []);

  // Helper functions
  const handleCheck = () => {
    if (dateofcencus && areaofcencusstreet) {
      setShow(true);
    }
  };

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    ]);
  };

  useEffect(() => {
    loadModels();
  }, []);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      setStreaming(true);
      setAngleMessage("Open Camera");
    }
    setTimeout(() => detectFaceLoop(), 1000);
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
    }
    setStreaming(false);
    setAngleMessage("Close Camera");
    canvasRef.current?.getContext("2d")?.clearRect(0, 0, 640, 480);
  };

  const detectFaceLoop = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;

    const result = await faceapi
      .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    const canvas = canvasRef.current;
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);
    canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);

    if (result) {
      const resizedResult = faceapi.resizeResults(result, displaySize);
      faceapi.draw.drawDetections(canvas, resizedResult);
      faceapi.draw.drawFaceLandmarks(canvas, resizedResult);

      const leftEye = resizedResult.landmarks.getLeftEye();
      const rightEye = resizedResult.landmarks.getRightEye();
      const eyeDistance = Math.abs(leftEye[0].x - rightEye[3].x);

      if (eyeDistance >= 40) {
        setAngleMessage("✅ Angle OK");
      } else {
        setAngleMessage("❌ Face the camera directly.");
      }
    } else {
      setAngleMessage("❌ No face detected.");
    }

    if (streaming) setTimeout(() => detectFaceLoop(), 300);
  };

  const onSubmit: SubmitHandler<cencusType> = async () => {
    if (!videoRef.current) return;

    try {
      const detection = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!detection) {
        return;
      }

      const leftEye = detection.landmarks.getLeftEye();
      const rightEye = detection.landmarks.getRightEye();
      const eyeDistance = Math.abs(leftEye[0].x - rightEye[3].x);

      if (eyeDistance < 40) {
        alert("Face the camera directly.");
        return;
      }

      const descriptor = Array.from(detection.descriptor as Float32Array);
      setValue("descriptor", descriptor, { shouldValidate: true });

      // Submit the form data
      setValue("descriptor", descriptor, { shouldValidate: true });
      const updatedData = getValues();
      await handleCreateCencus(updatedData);
      console.log(updatedData);
      stopCamera();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="w-full relative">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <div className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Cencus
            </label>
            <input
              {...register("dateofcencus")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              type="date"
            />
            {errors.dateofcencus && (
              <p className="text-red-500 text-sm">
                {errors.dateofcencus.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Area of Cencus Street
            </label>
            <input
              {...register("areaofcencusstreet")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.areaofcencusstreet && (
              <p className="text-red-500 text-sm">
                {errors.areaofcencusstreet.message}
              </p>
            )}
          </div>

          <div className="mt-5 mb-5">
            <button
              onClick={handleCheck}
              className="px-3 py-3 bg-[#7F265B] rounded-lg flex items-center justify-center  cursor-pointe text-white font-semibold"
            >
              Conduct Cencus
            </button>
          </div>
        </div>
        {show && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h1 className="text-2xl font-bold mb-6">Census Form</h1>

            <div className="w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  {...register("firstname")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Middle Name
                </label>
                <input
                  {...register("middlename")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.middlename && (
                  <p className="text-red-500 text-sm">
                    {errors.middlename.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  {...register("lastname")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Birth Day
                </label>
                <input
                  type="date"
                  {...register("birthday")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.birthday && (
                  <p className="text-red-500 text-sm">
                    {errors.birthday.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="number"
                  {...register("age", { valueAsNumber: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  readOnly
                />
                {errors.age && (
                  <p className="text-red-500 text-sm">{errors.age.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  {...register("gender")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && <p>{errors.gender.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Civil Status
                </label>
                <select
                  {...register("civilstatus")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widowed">Widowed</option>
                  <option value="seperated">seperated</option>
                </select>
                {errors.civilstatus && <p>{errors.civilstatus.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current School Enrollment?
                </label>
                <select
                  {...register("currentschoolenrollment")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.currentschoolenrollment && (
                  <p>{errors.currentschoolenrollment.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Educational Attainment
                </label>
                <select
                  {...register("educationalattainment")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="no formal education">
                    No Formal Education
                  </option>
                  <option value="elementary undergraduate">
                    Elementary Undergraduate
                  </option>
                  <option value="elementary graduate">
                    Elementary Graduate
                  </option>
                  <option value="high school undergraduate">
                    High School Undergraduate
                  </option>
                  <option value="high school graduate">
                    High School Graduate
                  </option>
                  <option value="senior high school undergraduate">
                    Senior High School Undergraduate
                  </option>
                  <option value="senior high school graduate - STEM">
                    Senior High School Graduate - STEM
                  </option>
                  <option value="senior high school graduate - HUMSS">
                    Senior High School Graduate - HUMSS
                  </option>
                  <option value="senior high school graduate - TVL">
                    Senior High School Graduate - TVL
                  </option>
                  <option value="college undergraduate">
                    College Undergraduate
                  </option>
                  <option value="college graduate">
                    College Graduate (Specify Degree)
                  </option>
                  <option value="master's degree">
                    Master's Degree (e.g., MA, MS)
                  </option>
                  <option value="doctorate degree">
                    Doctorate Degree (e.g., PhD, EdD)
                  </option>
                  <option value="TESDA-certified courses">
                    TESDA-Certified Courses (e.g., Welding, IT Support)
                  </option>
                </select>
                {errors.educationalattainment && (
                  <p>{errors.educationalattainment.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employment Status
                </label>
                <select
                  {...register("employmentstatus" as const)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="employed">Employed</option>
                  <option value="selfemployed">Self Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="student">Student</option>
                  <option value="retired">Retired</option>
                </select>
                {errors.employmentstatus && (
                  <p>{errors.employmentstatus.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Occupation
                </label>
                <input
                  {...register("occupation")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.occupation && (
                  <p className="text-red-500 text-sm">
                    {errors.occupation.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  House Number
                </label>
                <input
                  type="number"
                  {...register("housenumber", { valueAsNumber: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.housenumber && (
                  <p className="text-red-500 text-sm">
                    {errors.housenumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Street Name
                </label>
                <input
                  {...register("streetname")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.streetname && (
                  <p className="text-red-500 text-sm">
                    {errors.streetname.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Barangay
                </label>
                <input
                  {...register("barangay")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.barangay && (
                  <p className="text-red-500 text-sm">
                    {errors.barangay.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  {...register("city")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Province
                </label>
                <input
                  {...register("province")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.province && (
                  <p className="text-red-500 text-sm">
                    {errors.province.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  House Type
                </label>
                <select
                  {...register("housetype" as const)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="owner">Owner</option>
                  <option value="renter">Renter</option>
                  <option value="sharer">Sharer</option>
                  <option value="informal">Informal</option>
                  <option value="settler">Settler</option>
                </select>
                {errors.housetype && <p>{errors.housetype.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Healthy Status
                </label>
                <select
                  {...register("healthstatus" as const)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
                {errors.healthstatus && <p>{errors.healthstatus.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Disability Status
                </label>
                <select
                  {...register("disabilitystatus" as const)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                {errors.disabilitystatus && (
                  <p>{errors.disabilitystatus.message}</p>
                )}
              </div>
              <div>
                {disAbilityStatus === "yes" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Disability Type
                    </label>
                    <input
                      {...register("disabilitytype")}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Existing Health Condition
                </label>
                <input
                  {...register("existinghealthcondition")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.existinghealthcondition && (
                  <p className="text-red-500 text-sm">
                    {errors.existinghealthcondition.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Fully Immunized
                </label>
                <select
                  {...register("fullyimmunized" as const)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                {errors.fullyimmunized && (
                  <p>{errors.fullyimmunized.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Covid-19 Vaccination
                </label>
                <select
                  {...register("covid19vaccination" as const)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                {errors.covid19vaccination && (
                  <p>{errors.covid19vaccination.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Housing Type
                </label>
                <select
                  {...register("housingtype" as const)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="concrete">Concrete</option>
                  <option value="semi concreate">Semi Concreate</option>
                  <option value="wooden">Wooden</option>
                </select>
                {errors.housingtype && <p>{errors.housingtype.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Year of Constructed
                </label>
                <input
                  {...register("yearofconstructed")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Has the resident lived in other places in the past 5 years?
                </label>
                <select
                  {...register("residentlived" as const)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                {errors.residentlived && <p>{errors.residentlived.message}</p>}
              </div>
              <div>
                {residentLived === "yes" && (
                  <div className="w-full">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Barangay
                      </label>
                      <input
                        {...register("barangayresidence")}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.barangayresidence && (
                        <p className="text-red-500 text-sm">
                          {errors.barangayresidence.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        {...register("cityresidence")}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.cityresidence && (
                        <p className="text-red-500 text-sm">
                          {errors.cityresidence.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Municipality
                      </label>
                      <input
                        {...register("municipalityresidence")}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.municipalityresidence && (
                        <p className="text-red-500 text-sm">
                          {errors.municipalityresidence.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Province
                      </label>
                      <input
                        {...register("provinceresidence")}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.provinceresidence && (
                        <p className="text-red-500 text-sm">
                          {errors.provinceresidence.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Reason for Moving
                      </label>
                      <input
                        {...register("reasonformoving")}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.reasonformoving && (
                        <p className="text-red-500 text-sm">
                          {errors.reasonformoving.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <h2 className="text-xl font-semibold mb-4 mt-5">
                {" "}
                Contact and Emergency Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="number"
                  {...register("mobilenumber", { valueAsNumber: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.mobilenumber && (
                  <p className="text-red-500 text-sm">
                    {errors.mobilenumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Emergency Contact Name
                </label>
                <input
                  {...register("emergencycontactname")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.emergencycontactname && (
                  <p className="text-red-500 text-sm">
                    {errors.emergencycontactname.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Emergency Contact Number
                </label>
                <input
                  type="number"
                  {...register("emergencycontactnumber", {
                    valueAsNumber: true,
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.emergencycontactname && (
                  <p className="text-red-500 text-sm">
                    {errors.emergencycontactname.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Relationship Contact Number
                </label>
                <input
                  type="number"
                  {...register("relationshiptoemergencycontact", {
                    valueAsNumber: true,
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.relationshiptoemergencycontact && (
                  <p className="text-red-500 text-sm">
                    {errors.relationshiptoemergencycontact.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of household members
                </label>
                <input
                  type="number"
                  {...register("numberofhousemembers", { valueAsNumber: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.numberofhousemembers && (
                  <p className="text-red-500 text-sm">
                    {errors.numberofhousemembers.message}
                  </p>
                )}
              </div>
            </div>
            {/* Household Members */}
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-4">Household Members</h2>
              {fields.map((field, index) => {
                const disabilitystatus = watch(
                  `householdMembers.${index}.disabilitystatus`
                );

                return (
                  <div key={field.id} className="mb-6 p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">
                      Household Member {index + 1}
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Relationship
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.relationship` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                        <option value="grandparent">Grandparent</option>
                      </select>
                      {errors.householdMembers?.[index]?.relationship && (
                        <p className="text-red-500 text-sm">
                          {
                            errors.householdMembers[index]?.relationship
                              ?.message
                          }
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        {...register(
                          `householdMembers.${index}.firstname` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.householdMembers?.[index]?.firstname && (
                        <p className="text-red-500 text-sm">
                          {errors.householdMembers[index]?.firstname?.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Middle Name
                      </label>
                      <input
                        {...register(
                          `householdMembers.${index}.middlename` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.householdMembers?.[index]?.middlename && (
                        <p className="text-red-500 text-sm">
                          {errors.householdMembers[index]?.middlename?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        {...register(
                          `householdMembers.${index}.lastname` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.householdMembers?.[index]?.lastname && (
                        <p className="text-red-500 text-sm">
                          {errors.householdMembers[index]?.lastname?.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Birthday
                      </label>
                      <input
                        type="date"
                        {...register(
                          `householdMembers.${index}.birthday` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.householdMembers?.[index]?.birthday && (
                        <p className="text-red-500 text-sm">
                          {errors.householdMembers[index]?.birthday?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Age
                      </label>
                      <input
                        type="number"
                        {...register(`householdMembers.${index}.age` as const, {
                          valueAsNumber: true,
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        readOnly
                      />
                      {errors.householdMembers?.[index]?.age && (
                        <p className="text-red-500 text-sm">
                          {errors.householdMembers[index]?.age?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Gender
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.gender` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                      {errors.householdMembers?.[index]?.gender && (
                        <p className="text-red-500 text-sm">
                          {errors.householdMembers[index]?.gender?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Civil Status
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.civilstatus` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="widowed">Widowed</option>
                        <option value="seperated">Seperated</option>
                      </select>
                      {errors.householdMembers?.[index]?.civilstatus && (
                        <p className="text-red-500 text-sm">
                          {errors.householdMembers[index]?.civilstatus?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Current School Enrollment
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.currentschoolenrollment` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      {errors.householdMembers?.[index]
                        ?.currentschoolenrollment && (
                        <p className="text-red-500 text-sm">
                          {
                            errors.householdMembers[index]
                              ?.currentschoolenrollment?.message
                          }
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Educational Attainment
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.educationalattainment` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="no formal education">
                          No Formal Education
                        </option>
                        <option value="elementary undergraduate">
                          Elementary Undergraduate
                        </option>
                        <option value="elementary graduate">
                          Elementary Graduate
                        </option>
                        <option value="high school undergraduate">
                          High School Undergraduate
                        </option>
                        <option value="high school graduate">
                          High School Graduate
                        </option>
                        <option value="senior high school undergraduate">
                          Senior High School Undergraduate
                        </option>
                        <option value="senior high school graduate - STEM">
                          Senior High School Graduate - STEM
                        </option>
                        <option value="senior high school graduate - HUMSS">
                          Senior High School Graduate - HUMSS
                        </option>
                        <option value="senior high school graduate - TVL">
                          Senior High School Graduate - TVL
                        </option>
                        <option value="college undergraduate">
                          College Undergraduate
                        </option>
                        <option value="college graduate">
                          College Graduate (Specify Degree)
                        </option>
                        <option value="master's degree">
                          Master's Degree (e.g., MA, MS)
                        </option>
                        <option value="doctorate degree">
                          Doctorate Degree (e.g., PhD, EdD)
                        </option>
                        <option value="TESDA-certified courses">
                          TESDA-Certified Courses (e.g., Welding, IT Support)
                        </option>
                      </select>
                      {errors.householdMembers?.[index]
                        ?.educationalattainment && (
                        <p className="text-red-500 text-sm">
                          {
                            errors.householdMembers[index]
                              ?.educationalattainment?.message
                          }
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Employment Status
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.employmentstatus` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="employed">Employed</option>
                        <option value="selfemployed">Self Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="student">Student</option>
                        <option value="retired">Retired</option>
                      </select>
                      {errors.householdMembers?.[index]?.employmentstatus && (
                        <p className="text-red-500 text-sm">
                          {
                            errors.householdMembers[index]?.employmentstatus
                              ?.message
                          }
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Occupation
                      </label>
                      <input
                        {...register(
                          `householdMembers.${index}.occupation` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.householdMembers?.[index]?.occupation && (
                        <p className="text-red-500 text-sm">
                          {errors.householdMembers[index]?.occupation?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Health Status
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.healthstatus` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                      </select>
                      {errors.householdMembers?.[index]?.healthstatus && (
                        <p className="text-red-500 text-sm">
                          {
                            errors.householdMembers[index]?.healthstatus
                              ?.message
                          }
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Disability Status
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.disabilitystatus` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      {errors.householdMembers?.[index]?.disabilitystatus && (
                        <p className="text-red-500 text-sm">
                          {
                            errors.householdMembers[index]?.disabilitystatus
                              ?.message
                          }
                        </p>
                      )}
                    </div>
                    {disabilitystatus == "yes" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Disability type
                        </label>
                        <input
                          {...register(
                            `householdMembers.${index}.disabilitytype` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.householdMembers?.[index]?.disabilitytype && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.disabilitytype
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Existing Health Condition
                      </label>
                      <input
                        {...register(
                          `householdMembers.${index}.existinghealthcondition` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.householdMembers?.[index]
                        ?.existinghealthcondition && (
                        <p className="text-red-500 text-sm">
                          {
                            errors.householdMembers[index]
                              ?.existinghealthcondition?.message
                          }
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Fully Immunized
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.fullyimmunized` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      {errors.householdMembers?.[index]?.fullyimmunized && (
                        <p className="text-red-500 text-sm">
                          {
                            errors.householdMembers[index]?.fullyimmunized
                              ?.message
                          }
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Covid 19 Vaccination
                      </label>
                      <select
                        {...register(
                          `householdMembers.${index}.covid19vaccination` as const
                        )}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      {errors.householdMembers?.[index]?.covid19vaccination && (
                        <p className="text-red-500 text-sm">
                          {
                            errors.householdMembers[index]?.covid19vaccination
                              ?.message
                          }
                        </p>
                      )}
                    </div>
                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                    >
                      Remove Member
                    </button>
                  </div>
                );
              })}

              <button
                type="button"
                onClick={() =>
                  append({
                    relationship: "spouse",
                    firstname: "",
                    middlename: "",
                    lastname: "",
                    birthday: "",
                    age: 0,
                    gender: "female",
                    civilstatus: "single",
                    currentschoolenrollment: "yes",
                    educationalattainment: "high school graduate",
                    employmentstatus: "employed",
                    occupation: "",
                    healthstatus: "good",
                    disabilitystatus: "yes",
                    existinghealthcondition: "",
                    fullyimmunized: "yes",
                    covid19vaccination: "yes",
                  })
                }
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Add Household Member
              </button>
            </div>
            <h2 className="text-2xl font-bold text-center">
              Register New Face
            </h2>

            <div className="flex justify-center gap-4">
              {!streaming ? (
                <button
                  onClick={startCamera}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Open Camera
                </button>
              ) : (
                <button
                  onClick={stopCamera}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Close Camera
                </button>
              )}
            </div>

            <div className="relative w-full max-w-xl mx-auto aspect-video border rounded overflow-hidden">
              <video
                ref={videoRef}
                width="640"
                height="480"
                autoPlay
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <canvas
                ref={canvasRef}
                width="640"
                height="480"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>

            <p className="text-center font-medium text-gray-700">
              {angleMessage}
            </p>
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              disabled={createCencusMutation.isPending}
            >
              {createCencusMutation.isPending ? "Loading" : "Submit"}
            </button>
          </form>
        )}
      </div>
      <div className="absolute top-0 right-5" onClick={handleLogout}>
        <button className="px-3 py-3 bg-[#7F265B] rounded-lg flex items-center justify-center  cursor-pointe text-white font-semibold">
          Log out
        </button>
      </div>
    </div>
  );
};
