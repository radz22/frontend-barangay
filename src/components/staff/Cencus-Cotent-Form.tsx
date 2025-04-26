import React, { useEffect, useRef } from "react";
import { cencusSchema, cencusType } from "../../type/user/cencus-zod";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateAge } from "../../utils/calculateAge";
import CencusHook from "../../hooks/staff/cencus-hook";
import authHook from "../../hooks/authHook";
import { useState } from "react";
import * as faceapi from "face-api.js";
import * as Dialog from "@radix-ui/react-dialog";
import ViewOptionLink from "./view-option-link";
import logo from "../../assets/barangay-logo.png";
interface CencusProps {
  setType: (type: "resident" | "cencus") => void;
  cookieEmail: string | undefined;
}

export const CencusContentForm: React.FC<CencusProps> = ({
  setType,
  cookieEmail,
}) => {
  const { handleCreateCencus, createCencusMutation } = CencusHook();
  const { handleLogout } = authHook();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [show, setShow] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [angleMessage, setAngleMessage] = useState("");
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
      governmentid: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "householdMembers",
  });

  const selectedDate = watch("birthday");
  const disAbilityStatus = watch("disabilitystatus");
  const residentLived = watch("residentlived");
  const dateofcencus = watch("dateofcencus");
  const areaofcencusstreet = watch("areaofcencusstreet");
  const yearconducting = watch("yearconducting");
  const governmentid = watch("governmentid");

  const householdMembers = watch("householdMembers");
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

  const handleCheck = () => {
    if (dateofcencus && areaofcencusstreet && yearconducting) {
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
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
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
      videoRef.current.srcObject = null; // clear the video feed
    }

    setStreaming(false);
    setAngleMessage("Close Camera");

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Fill canvas with black or white screen
        ctx.fillStyle = "#000"; // change to "#fff" for white
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
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
      setValue("staffaccountcreate", cookieEmail, { shouldValidate: true });
      const updatedData = getValues();
      console.log(updatedData);
      await handleCreateCencus(updatedData);
      stopCamera();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="w-full relative">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <div className=" mb-5 flex items-center justify-center">
          <img src={logo} className="w-[150px] h-[100px]" />
        </div>
        <div className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Census
            </label>
            <input
              {...register("dateofcencus")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              readOnly
            />
            {errors.dateofcencus && (
              <p className="text-red-500 text-sm">
                {errors.dateofcencus.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Year Of Cencus Conducting
            </label>
            <select
              {...register("yearconducting")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
            {errors.yearconducting && <p>{errors.yearconducting.message}</p>}
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
            <h1 className="text-2xl font-bold mb-6 mt-5">Census Form</h1>

            <div className="w-full">
              <div>
                <h1 className="text-xl font-semibold">Household Information</h1>
              </div>
              {/* house address info */}
              <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">
                  Household Address
                </h1>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Street Name
                  </label>
                  <input
                    {...register("streetname")}
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
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
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
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
                    City
                  </label>
                  <input
                    {...register("city")}
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="(QUEZON CITY, CALOOCAN CITY)"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">
                      {errors.city.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Province
                  </label>
                  <input
                    {...register("province")}
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.province && (
                    <p className="text-red-500 text-sm">
                      {errors.province.message}
                    </p>
                  )}
                </div>
              </div>
              {/* house  info */}
              <div className="mt-10">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Ownership Status
                  </label>
                  <select
                    {...register("housetype" as const)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="owner">OWNER</option>
                    <option value="renter">RENTER</option>
                    <option value="sharer">SHARER</option>
                    <option value="informal">INFORMAL</option>
                    <option value="settler">SETTLER</option>
                  </select>
                  {errors.housetype && <p>{errors.housetype.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Housing Type
                  </label>
                  <select
                    {...register("housingtype" as const)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="SINGLE HOUSE">SINGLE HOUSE</option>
                    <option value="APARTMENT">APARTMENT</option>
                    <option value="GOVERMENT HOUSING">GOVERMENT HOUSING</option>
                    <option value="INFORMAL SHELTER">INFORMAL SHELTER</option>
                  </select>
                  {errors.housingtype && <p>{errors.housingtype.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Year of Staying
                  </label>
                  <input
                    {...register("yearofconstructed")}
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* household head info */}
              <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">
                  Head Household Information
                </h1>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    {...register("firstname")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
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
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
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
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
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
                    Place of Birth
                  </label>
                  <input
                    {...register("placeofbirth")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
                  />
                  {errors.placeofbirth && (
                    <p className="text-red-500 text-sm">
                      {errors.placeofbirth.message}
                    </p>
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
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
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
                    <option value="single">SINGLE</option>
                    <option value="married">MARRIED</option>
                    <option value="widowed">WIDOWED</option>
                    <option value="seperated">SEPERATED</option>
                  </select>
                  {errors.civilstatus && <p>{errors.civilstatus.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Citizenship
                  </label>
                  <select
                    {...register("citizenship")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="FILIPINO">FILIPINO</option>
                    <option value="DUAL CITIZEN">DUAL CITIZEN</option>
                    <option value="NATURALIZED FILIPINO">
                      NATURALIZED FILIPINO
                    </option>
                    <option value="FOREIGNER">FOREIGNER</option>
                  </select>
                  {errors.citizenship && <p>{errors.citizenship.message}</p>}
                </div>
              </div>

              {/* contact info */}
              <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">
                  Contact Information
                </h1>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    {...register("mobilenumber", { valueAsNumber: true })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="ex. 09123456789"
                  />
                  {errors.mobilenumber && (
                    <p className="text-red-500 text-sm">
                      {errors.mobilenumber.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    {...register("emailadress")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="ex. example@gmail.com"
                  />
                  {errors.emailadress && (
                    <p className="text-red-500 text-sm">
                      {errors.emailadress.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Emergency Contact Name
                  </label>
                  <input
                    {...register("emergencycontactname")}
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
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
                  {errors.emergencycontactnumber && (
                    <p className="text-red-500 text-sm">
                      {errors.emergencycontactnumber.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Relationship Emergency Contact Name
                  </label>
                  <input
                    {...register("relationshiptoemergencycontact")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="ex. (Father)"
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
                    {...register("numberofhousemembers", {
                      valueAsNumber: true,
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.numberofhousemembers && (
                    <p className="text-red-500 text-sm">
                      {errors.numberofhousemembers.message}
                    </p>
                  )}
                </div>
              </div>
              {/* government id */}
              <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">
                  Government Identifications
                </h1>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Government Id
                  </label>
                  <select
                    {...register("governmentid")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Option</option>
                    <option value="SSS">SSS</option>
                    <option value="TIN">TIN</option>
                    <option value="PAGIBIG">PAGIBIG</option>
                    <option value="PHILHEALTH">PHILHEALTH</option>
                    <option value="NATIONAL ID">NATIONAL ID</option>
                    <option value="BARANGAY ID">BARANGAY ID</option>
                  </select>
                  {errors.governmentid && <p>{errors.governmentid.message}</p>}
                </div>
                {governmentid !== "" && (
                  <div>
                    <input
                      type="number"
                      {...register("governmentidnumber", {
                        valueAsNumber: true,
                      })}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.governmentidnumber && (
                      <p className="text-red-500 text-sm">
                        {errors.governmentidnumber.message}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* education background */}
              <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">
                  Education Background
                </h1>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Current School Enrollment?
                  </label>
                  <select
                    {...register("currentschoolenrollment")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="yes">YES</option>
                    <option value="no">NO</option>
                  </select>
                  {errors.currentschoolenrollment && (
                    <p>{errors.currentschoolenrollment.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    School Type
                  </label>
                  <select
                    {...register("schooltype" as const)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="PUBLIC">PUBLIC</option>
                    <option value="PRIVATE">PRIVATE</option>
                  </select>
                  {errors.schooltype && <p>{errors.schooltype.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    HIGHEST GRADE/YEAR COMPLETED
                  </label>
                  <select
                    {...register("educationalattainment" as const)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="NO GRADE COMPLETED">
                      NO GRADE COMPLETED
                    </option>
                    <option value="PRESCHOOL">PRESCHOOL</option>
                    <option value="KINDERGARTEN">KINDERGARTEN</option>

                    {/* K TO 12 CURRICULUM */}
                    <optgroup label="K TO 12 CURRICULUM">
                      <option value="GRADE 1 (K TO 12)">
                        GRADE 1 (K TO 12)
                      </option>
                      <option value="GRADE 2 (K TO 12)">
                        GRADE 2 (K TO 12)
                      </option>
                      <option value="GRADE 3 (K TO 12)">
                        GRADE 3 (K TO 12)
                      </option>
                      <option value="GRADE 4 (K TO 12)">
                        GRADE 4 (K TO 12)
                      </option>
                      <option value="GRADE 5 (K TO 12)">
                        GRADE 5 (K TO 12)
                      </option>
                      <option value="GRADE 6 (K TO 12)">
                        GRADE 6 (K TO 12)
                      </option>
                      <option value="GRADE 7 (K TO 12)">
                        GRADE 7 (K TO 12)
                      </option>
                      <option value="GRADE 8 (K TO 12)">
                        GRADE 8 (K TO 12)
                      </option>
                      <option value="GRADE 9 (K TO 12)">
                        GRADE 9 (K TO 12)
                      </option>
                      <option value="GRADE 10 (K TO 12)">
                        GRADE 10 (K TO 12)
                      </option>
                      <option value="GRADE 11 (K TO 12)">
                        GRADE 11 (K TO 12)
                      </option>
                      <option value="GRADE 12 (K TO 12)">
                        GRADE 12 (K TO 12)
                      </option>
                    </optgroup>

                    {/* OLD CURRICULUM */}
                    <optgroup label="OLD CURRICULUM">
                      <option value="GRADE 1 (OLD CURRICULUM)">
                        GRADE 1 (OLD CURRICULUM)
                      </option>
                      <option value="GRADE 2 (OLD CURRICULUM)">
                        GRADE 2 (OLD CURRICULUM)
                      </option>
                      <option value="GRADE 3 (OLD CURRICULUM)">
                        GRADE 3 (OLD CURRICULUM)
                      </option>
                      <option value="GRADE 4 (OLD CURRICULUM)">
                        GRADE 4 (OLD CURRICULUM)
                      </option>
                      <option value="GRADE 5 (OLD CURRICULUM)">
                        GRADE 5 (OLD CURRICULUM)
                      </option>
                      <option value="GRADE 6 (OLD CURRICULUM)">
                        GRADE 6 (OLD CURRICULUM)
                      </option>
                      <option value="GRADE 6 GRADUATE (OLD CURRICULUM)">
                        GRADE 6 GRADUATE (OLD CURRICULUM)
                      </option>
                      <option value="GRADE 7 GRADUATE (OLD CURRICULUM)">
                        GRADE 7 GRADUATE (OLD CURRICULUM)
                      </option>
                      <option value="1ST YEAR HIGH SCHOOL (OLD CURRICULUM)">
                        1ST YEAR HIGH SCHOOL (OLD CURRICULUM)
                      </option>
                      <option value="2ND YEAR HIGH SCHOOL (OLD CURRICULUM)">
                        2ND YEAR HIGH SCHOOL (OLD CURRICULUM)
                      </option>
                      <option value="3RD YEAR HIGH SCHOOL (OLD CURRICULUM)">
                        3RD YEAR HIGH SCHOOL (OLD CURRICULUM)
                      </option>
                      <option value="4TH YEAR HIGH SCHOOL (OLD CURRICULUM)">
                        4TH YEAR HIGH SCHOOL (OLD CURRICULUM)
                      </option>
                      <option value="HIGH SCHOOL GRADUATE (OLD CURRICULUM)">
                        HIGH SCHOOL GRADUATE (OLD CURRICULUM)
                      </option>
                    </optgroup>

                    {/* HIGHER EDUCATION */}
                    <optgroup label="HIGHER EDUCATION">
                      <option value="1ST YEAR COLLEGE">1ST YEAR COLLEGE</option>
                      <option value="2ND YEAR COLLEGE">2ND YEAR COLLEGE</option>
                      <option value="3RD YEAR COLLEGE">3RD YEAR COLLEGE</option>
                      <option value="4TH YEAR COLLEGE">4TH YEAR COLLEGE</option>
                      <option value="COLLEGE GRADUATE">COLLEGE GRADUATE</option>
                      <option value="POSTGRADUATE STUDIES">
                        POSTGRADUATE STUDIES
                      </option>
                    </optgroup>
                  </select>
                  {errors.educationalattainment && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.educationalattainment.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Employment Details */}
              <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">
                  Employment Details
                </h1>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Employment Status
                  </label>
                  <select
                    {...register("employmentstatus" as const)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="employed">EMPLOYED</option>
                    <option value="selfemployed">SELF EMPLOYED</option>
                    <option value="unemployed">UNEMPLOYED</option>
                    <option value="student">STUDENT</option>
                    <option value="retired">RETIRED</option>
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
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
                  />
                  {errors.occupation && (
                    <p className="text-red-500 text-sm">
                      {errors.occupation.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Health Information */}
              <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">
                  Health Information
                </h1>
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
                        onChange={(e) => {
                          e.target.value = e.target.value.toUpperCase();
                        }}
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
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
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
              </div>

              {/* Migration History */}
              <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">
                  Migration History
                </h1>
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
                  {errors.residentlived && (
                    <p>{errors.residentlived.message}</p>
                  )}
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
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
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
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
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
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
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
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
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
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
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
              </div>
              {/* household members */}
              <div className="mt-20"></div>
            </div>
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-4">Household Members</h2>
              {fields.map((field, index) => {
                const disabilitystatus = watch(
                  `householdMembers.${index}.disabilitystatus`
                );
                const selectGovermentId = watch(
                  `householdMembers.${index}.governmentid`
                );
                const residentlived = watch(
                  `householdMembers.${index}.residentlived`
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
                        <option value="SPOUSE">SPOUSE</option>
                        <option value="SON">SON</option>
                        <option value="DAUGHTER">DAUGHTER</option>
                        <option value="FATHER">FATHER</option>
                        <option value="MOTHER">MOTHER</option>
                        <option value="BROTHER">BROTHER</option>
                        <option value="SISTER">SISTER</option>
                        <option value="GRANDCHILD">GRANDCHILD</option>
                        <option value="GRANDPARENT">GRANDPARENT</option>
                        <option value="UNCLE">UNCLE</option>
                        <option value="AUNT">AUNT</option>
                        <option value="NEPHEW">NEPHEW</option>
                        <option value="NIECE">NIECE</option>
                        <option value="COUSIN">COUSIN</option>
                        <option value="IN-LAW">IN-LAW</option>
                        <option value="HOUSEHELP">HOUSEHELP</option>
                        <option value="BOARDER">BOARDER</option>
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
                    {/* General Information */}
                    <div className="mt-10">
                      <h1 className="text-lg font-semibold mb-4">
                        General Information
                      </h1>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          {...register(
                            `householdMembers.${index}.firstname` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
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
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.householdMembers?.[index]?.middlename && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.middlename
                                ?.message
                            }
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
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
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
                          {...register(
                            `householdMembers.${index}.age` as const,
                            {
                              valueAsNumber: true,
                            }
                          )}
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
                          Place of Birth
                        </label>
                        <input
                          {...register(
                            `householdMembers.${index}.placeofbirth` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
                        />
                        {errors.householdMembers?.[index]?.placeofbirth && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.placeofbirth
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Citizen Ship
                        </label>
                        <select
                          {...register(
                            `householdMembers.${index}.citizenship` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="FILIPINO">FILIPINO</option>
                          <option value="DUAL CITIZEN">DUAL CITIZEN</option>
                          <option value="NATURALIZED FILIPINO">
                            NATURALIZED FILIPINO
                          </option>
                          <option value="FOREIGNER">FOREIGNER</option>
                        </select>
                        {errors.householdMembers?.[index]?.citizenship && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.citizenship
                                ?.message
                            }
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
                          <option value="female">FEMALE</option>
                          <option value="male">MALE</option>
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
                          <option value="single">SINGLE</option>
                          <option value="married">MARRIED</option>
                          <option value="widowed">WIDOWED</option>
                          <option value="seperated">SEPERATED</option>
                        </select>
                        {errors.householdMembers?.[index]?.civilstatus && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.civilstatus
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                    </div>
                    {/*   Contact Information */}

                    <div className="mt-10">
                      <h1 className="text-lg font-semibold mb-4">
                        Contact Information
                      </h1>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          {...register(
                            `householdMembers.${index}.mobilenumber` as const,
                            {
                              valueAsNumber: true,
                            }
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.householdMembers?.[index]?.mobilenumber && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.mobilenumber
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Emergency Contact Name
                        </label>
                        <input
                          {...register(
                            `householdMembers.${index}.emergencycontactname` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
                        />
                        {errors.householdMembers?.[index]
                          ?.emergencycontactname && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]
                                ?.emergencycontactname?.message
                            }
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Emergency Contact Number
                        </label>
                        <input
                          type="number"
                          {...register(
                            `householdMembers.${index}.emergencycontactnumber` as const,
                            {
                              valueAsNumber: true,
                            }
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.householdMembers?.[index]
                          ?.emergencycontactnumber && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]
                                ?.emergencycontactnumber?.message
                            }
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Relationship Emergency Contact Name
                        </label>
                        <input
                          {...register(
                            `householdMembers.${index}.relationshiptoemergencycontact` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
                          placeholder="ex (FATHER)"
                        />
                        {errors.householdMembers?.[index]
                          ?.relationshiptoemergencycontact && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]
                                ?.relationshiptoemergencycontact?.message
                            }
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          {...register(
                            `householdMembers.${index}.emailaddress` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.householdMembers?.[index]?.emailaddress && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.emailaddress
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                    </div>
                    {/*     Government Identification*/}
                    <div className="mt-10">
                      <h1 className="text-lg font-semibold mb-4">
                        Government Identification
                      </h1>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Government Id
                        </label>
                        <select
                          {...register(
                            `householdMembers.${index}.governmentid` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Select Option</option>
                          <option value="SSS">SSS</option>
                          <option value="TIN">TIN</option>
                          <option value="PAGIBIG">PAGIBIG</option>
                          <option value="PHILHEALTH">PHILHEALTH</option>
                          <option value="NATIONAL ID">NATIONAL ID</option>
                          <option value="BARANGAY ID">BARANGAY ID</option>
                        </select>
                        {errors.householdMembers?.[index]?.governmentid && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.governmentid
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                      {selectGovermentId !== "" && (
                        <div>
                          <input
                            type="number"
                            {...register(
                              `householdMembers.${index}.governmentidnumber` as const,
                              {
                                valueAsNumber: true,
                              }
                            )}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                          {errors.householdMembers?.[index]
                            ?.governmentidnumber && (
                            <p className="text-red-500 text-sm">
                              {
                                errors.householdMembers[index]
                                  ?.governmentidnumber?.message
                              }
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    {/*  Education Information*/}

                    <div className="mt-10">
                      <h1 className="text-lg font-semibold mb-4">
                        Education Background
                      </h1>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Current School Enrollment?
                        </label>
                        <select
                          {...register(
                            `householdMembers.${index}.currentschoolenrollment` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="yes">YES</option>
                          <option value="no">NO</option>
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
                          School Type
                        </label>
                        <select
                          {...register(
                            `householdMembers.${index}.schooltype` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="PUBLIC">PUBLIC</option>
                          <option value="PRIVATE">PRIVATE</option>
                        </select>
                        {errors.householdMembers?.[index]?.schooltype && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.schooltype
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          HIGHEST GRADE/YEAR COMPLETED
                        </label>
                        <select
                          defaultValue={"NO GRADE COMPLETED"}
                          {...register(
                            `householdMembers.${index}.educationalattainment` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="NO GRADE COMPLETED">
                            NO GRADE COMPLETED
                          </option>
                          <option value="PRESCHOOL">PRESCHOOL</option>
                          <option value="KINDERGARTEN">KINDERGARTEN</option>

                          {/* K TO 12 CURRICULUM */}
                          <optgroup label="K TO 12 CURRICULUM">
                            <option value="GRADE 1 (K TO 12)">
                              GRADE 1 (K TO 12)
                            </option>
                            <option value="GRADE 2 (K TO 12)">
                              GRADE 2 (K TO 12)
                            </option>
                            <option value="GRADE 3 (K TO 12)">
                              GRADE 3 (K TO 12)
                            </option>
                            <option value="GRADE 4 (K TO 12)">
                              GRADE 4 (K TO 12)
                            </option>
                            <option value="GRADE 5 (K TO 12)">
                              GRADE 5 (K TO 12)
                            </option>
                            <option value="GRADE 6 (K TO 12)">
                              GRADE 6 (K TO 12)
                            </option>
                            <option value="GRADE 7 (K TO 12)">
                              GRADE 7 (K TO 12)
                            </option>
                            <option value="GRADE 8 (K TO 12)">
                              GRADE 8 (K TO 12)
                            </option>
                            <option value="GRADE 9 (K TO 12)">
                              GRADE 9 (K TO 12)
                            </option>
                            <option value="GRADE 10 (K TO 12)">
                              GRADE 10 (K TO 12)
                            </option>
                            <option value="GRADE 11 (K TO 12)">
                              GRADE 11 (K TO 12)
                            </option>
                            <option value="GRADE 12 (K TO 12)">
                              GRADE 12 (K TO 12)
                            </option>
                          </optgroup>

                          {/* OLD CURRICULUM */}
                          <optgroup label="OLD CURRICULUM">
                            <option value="GRADE 1 (OLD CURRICULUM)">
                              GRADE 1 (OLD CURRICULUM)
                            </option>
                            <option value="GRADE 2 (OLD CURRICULUM)">
                              GRADE 2 (OLD CURRICULUM)
                            </option>
                            <option value="GRADE 3 (OLD CURRICULUM)">
                              GRADE 3 (OLD CURRICULUM)
                            </option>
                            <option value="GRADE 4 (OLD CURRICULUM)">
                              GRADE 4 (OLD CURRICULUM)
                            </option>
                            <option value="GRADE 5 (OLD CURRICULUM)">
                              GRADE 5 (OLD CURRICULUM)
                            </option>
                            <option value="GRADE 6 (OLD CURRICULUM)">
                              GRADE 6 (OLD CURRICULUM)
                            </option>
                            <option value="GRADE 6 GRADUATE (OLD CURRICULUM)">
                              GRADE 6 GRADUATE (OLD CURRICULUM)
                            </option>
                            <option value="GRADE 7 GRADUATE (OLD CURRICULUM)">
                              GRADE 7 GRADUATE (OLD CURRICULUM)
                            </option>
                            <option value="1ST YEAR HIGH SCHOOL (OLD CURRICULUM)">
                              1ST YEAR HIGH SCHOOL (OLD CURRICULUM)
                            </option>
                            <option value="2ND YEAR HIGH SCHOOL (OLD CURRICULUM)">
                              2ND YEAR HIGH SCHOOL (OLD CURRICULUM)
                            </option>
                            <option value="3RD YEAR HIGH SCHOOL (OLD CURRICULUM)">
                              3RD YEAR HIGH SCHOOL (OLD CURRICULUM)
                            </option>
                            <option value="4TH YEAR HIGH SCHOOL (OLD CURRICULUM)">
                              4TH YEAR HIGH SCHOOL (OLD CURRICULUM)
                            </option>
                            <option value="HIGH SCHOOL GRADUATE (OLD CURRICULUM)">
                              HIGH SCHOOL GRADUATE (OLD CURRICULUM)
                            </option>
                          </optgroup>

                          {/* HIGHER EDUCATION */}
                          <optgroup label="HIGHER EDUCATION">
                            <option value="1ST YEAR COLLEGE">
                              1ST YEAR COLLEGE
                            </option>
                            <option value="2ND YEAR COLLEGE">
                              2ND YEAR COLLEGE
                            </option>
                            <option value="3RD YEAR COLLEGE">
                              3RD YEAR COLLEGE
                            </option>
                            <option value="4TH YEAR COLLEGE">
                              4TH YEAR COLLEGE
                            </option>
                            <option value="COLLEGE GRADUATE">
                              COLLEGE GRADUATE
                            </option>
                            <option value="POSTGRADUATE STUDIES">
                              POSTGRADUATE STUDIES
                            </option>
                          </optgroup>
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
                    </div>

                    {/*  Employment Details*/}

                    <div className="mt-10">
                      <h1 className="text-lg font-semibold mb-4">
                        Employment Details
                      </h1>
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
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.householdMembers?.[index]?.occupation && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.occupation
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                    </div>

                    {/*Health Information*/}
                    <div className="mt-10">
                      <h1 className="text-lg font-semibold mb-5">
                        Health Information
                      </h1>
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
                            onChange={(e) => {
                              e.target.value = e.target.value.toUpperCase();
                            }}
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
                          onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
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
                        {errors.householdMembers?.[index]
                          ?.covid19vaccination && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.covid19vaccination
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                    </div>

                    {/*Migration History*/}
                    <div className="mt-10">
                      <h1 className="text-lg font-semibold mb-5">
                        Migration History
                      </h1>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Has the resident lived in other places in the past 5
                          years?
                        </label>
                        <select
                          {...register(
                            `householdMembers.${index}.residentlived` as const
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                        {errors.householdMembers?.[index]?.residentlived && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.residentlived
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                      <div>
                        {residentlived === "yes" && (
                          <div className="w-full">
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Barangay
                              </label>
                              <input
                                {...register(
                                  `householdMembers.${index}.barangayresidence` as const
                                )}
                                onChange={(e) => {
                                  e.target.value = e.target.value.toUpperCase();
                                }}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                              {errors.householdMembers?.[index]
                                ?.barangayresidence && (
                                <p className="text-red-500 text-sm">
                                  {
                                    errors.householdMembers[index]
                                      ?.barangayresidence?.message
                                  }
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                City
                              </label>
                              <input
                                {...register(
                                  `householdMembers.${index}.cityresidence` as const
                                )}
                                onChange={(e) => {
                                  e.target.value = e.target.value.toUpperCase();
                                }}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                              {errors.householdMembers?.[index]
                                ?.cityresidence && (
                                <p className="text-red-500 text-sm">
                                  {
                                    errors.householdMembers[index]
                                      ?.cityresidence?.message
                                  }
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Municipality
                              </label>
                              <input
                                {...register(
                                  `householdMembers.${index}.municipalityresidence` as const
                                )}
                                onChange={(e) => {
                                  e.target.value = e.target.value.toUpperCase();
                                }}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                              {errors.householdMembers?.[index]
                                ?.municipalityresidence && (
                                <p className="text-red-500 text-sm">
                                  {
                                    errors.householdMembers[index]
                                      ?.municipalityresidence?.message
                                  }
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Province
                              </label>
                              <input
                                {...register(
                                  `householdMembers.${index}.provinceresidence` as const
                                )}
                                onChange={(e) => {
                                  e.target.value = e.target.value.toUpperCase();
                                }}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                              {errors.householdMembers?.[index]
                                ?.provinceresidence && (
                                <p className="text-red-500 text-sm">
                                  {
                                    errors.householdMembers[index]
                                      ?.provinceresidence?.message
                                  }
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Reason for Moving
                              </label>
                              <input
                                {...register(
                                  `householdMembers.${index}.reasonformoving` as const
                                )}
                                onChange={(e) => {
                                  e.target.value = e.target.value.toUpperCase();
                                }}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                              {errors.householdMembers?.[index]
                                ?.reasonformoving && (
                                <p className="text-red-500 text-sm">
                                  {
                                    errors.householdMembers[index]
                                      ?.reasonformoving?.message
                                  }
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* next */}
                    <div className="mt-20"></div>

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
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() =>
                  append({
                    relationship: "SPOUSE",

                    // general info
                    firstname: "",
                    middlename: "",
                    lastname: "",
                    birthday: "",
                    age: 0,
                    gender: "female",
                    civilstatus: "single",
                    placeofbirth: "",
                    citizenship: "FILIPINO",

                    // contact info
                    mobilenumber: 0,
                    emergencycontactname: "",
                    emergencycontactnumber: 0,
                    relationshiptoemergencycontact: "",
                    emailaddress: "",

                    // government id
                    governmentid: "",
                    governmentidnumber: 0,

                    // educational information
                    currentschoolenrollment: "no", // or "yes"
                    schooltype: "PUBLIC", // or "PRIVATE"
                    educationalattainment: "NO GRADE COMPLETED", // default

                    // health information
                    employmentstatus: "unemployed", // or "student", etc.
                    occupation: "",
                    healthstatus: "good",
                    disabilitystatus: "no",
                    disabilitytype: "",
                    existinghealthcondition: "",

                    fullyimmunized: "no",
                    covid19vaccination: "no",

                    // migration history
                    residentlived: "no",
                    barangayresidence: "",
                    cityresidence: "",
                    municipalityresidence: "",
                    provinceresidence: "",
                    reasonformoving: "",
                  })
                }
              >
                Add Member
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
                className="absolute top-0 left-0 w-full h-full object-cover bg-black"
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
      <div className="absolute top-0 right-5">
        <div className="w-full flex items-center justify-center ">
          <h1
            className="px-3 py-3 bg-[#7F265B] rounded-lg  cursor-pointer text-white font-semibold"
            onClick={() => setType("resident")}
          >
            Register Resident Face
          </h1>
        </div>

        <Dialog.Root>
          <Dialog.Trigger>
            <button className="px-3 py-3 bg-[#7F265B] rounded-lg  cursor-pointer text-white font-semibold mt-5">
              Visit Resident Portal
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto">
              <ViewOptionLink />
              <div className="absolute top-[-20px] right-[-20px]">
                <Dialog.Close asChild>
                  <div className="w-10 h-10 bg-[#7F265B] rounded-full flex items-center justify-center  cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="M16.95 8.464a1 1 0 0 0-1.414-1.414L12 10.586L8.464 7.05A1 1 0 1 0 7.05 8.464L10.586 12L7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 1 0 1.414-1.414L13.414 12z"
                      ></path>
                    </svg>
                  </div>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <div className="w-full flex items-center justify-center mt-5">
          <button
            className="px-3 py-3 bg-[#7F265B] rounded-lg   cursor-pointer text-white font-semibold"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
