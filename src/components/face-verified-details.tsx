import { Resident } from "./resident-portal-component";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import ResidentHook from "../hooks/resident-hook";
import { residentUpdate } from "../type/user/resident-profilling-zod";
import { calculateAge } from "../utils/calculateAge";
const residentSchema = z.object({
  id: z.string().optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  middlename: z.string().optional(),
  dateofbirth: z.string(),
  age: z.number().min(1, "Age is Required"),
  gender: z.enum(["female", "male", "other"]),
  civilstatus: z.enum(["single", "married", "widowed", "separated"], {
    required_error: "Civil status is required",
  }),
  nationality: z.string().optional(),
  mobilenumber: z.string().optional(),
  streetname: z.string().optional(),
  province: z.string().optional(),

  citizenship: z.string().min(1, "Citizen is required"),
  city: z.string().min(1, "City is required"),
  currentschoolenrollment: z
    .string()
    .min(1, "Current School Enrollment is required"),
  educationalattainment: z
    .string()
    .min(1, "Educational Attainment is required"),
  emailadress: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  emergencycontactname: z.string().min(1, "Emergency Contact Name is required"),
  emergencycontactnumber: z
    .number()
    .min(1, "Emergency Contact Number is required"),
  employmentstatus: z.string().min(1, "Employment Status is required"),
  placeofbirth: z.string().min(1, "Place of Birth is required"),
  relationshiptoemergencycontact: z
    .string()
    .min(1, "Relationship to Emergency Contact is required"),
  schooltype: z.string().min(1, "School Type is required"),

  cloudinaryphoto: z.string().min(1, " required"),
});

export type ResidentFormData = z.infer<typeof residentSchema>;

interface FaceVerifiedDetailsProps {
  residentDetails: Resident | null;
  handleCancel: () => void;
}

const FaceVerifiedDetails: React.FC<FaceVerifiedDetailsProps> = ({
  residentDetails,
  handleCancel,
}) => {
  const [preview, setPreview] = useState<null | string>(null);
  console.log(residentDetails);
  const {
    handleCreateNewResidentUpdate,
    createUpdateResident,
    handleGetReason,
    reasonData,
  } = ResidentHook();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<ResidentFormData>({
    resolver: zodResolver(residentSchema),
  });
  const selectedDate = watch("dateofbirth");

  useEffect(() => {
    if (residentDetails) {
      reset({
        id: residentDetails._id,
        firstName: residentDetails.firstName,
        lastName: residentDetails.lastName,
        middlename: residentDetails.middlename,
        dateofbirth: residentDetails.dateofbirth,
        gender: residentDetails.gender,
        civilstatus: residentDetails.civilstatus,
        streetname: residentDetails.streetname
          ? residentDetails.streetname
          : "",
        province: residentDetails.province ? residentDetails.province : "",
        mobilenumber: residentDetails?.mobilenumber?.toString()
          ? residentDetails?.mobilenumber?.toString()
          : "",
        age: residentDetails.age,
        citizenship: residentDetails.citizenship,
        city: residentDetails.city,
        currentschoolenrollment: residentDetails.currentschoolenrollment,
        emailadress: residentDetails.emailadress,
        emergencycontactname: residentDetails.emergencycontactname,
        emergencycontactnumber: Number(residentDetails.emergencycontactnumber),
        employmentstatus: residentDetails.employmentstatus,
        placeofbirth: residentDetails.placeofbirth,
        relationshiptoemergencycontact:
          residentDetails.relationshiptoemergencycontact,
        schooltype: residentDetails.schooltype,
        educationalattainment: residentDetails.educationalattainment,
      });

      handleGetReason(residentDetails._id);
    }
  }, [residentDetails, reset]);
  useEffect(() => {
    if (selectedDate) {
      const age = calculateAge(selectedDate);
      setValue("age", age, { shouldValidate: true });
    }
  }, [selectedDate, setValue]);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Must be an image file");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setValue("cloudinaryphoto", base64);
        setPreview(base64);
      };
      reader.onerror = () => {
        alert("Failed to read file");
      };
      reader.readAsDataURL(file);
    } else {
      setValue("cloudinaryphoto", "");
      setPreview(null);
    }
  };

  const onSubmit = (data: ResidentFormData) => {
    if (!residentDetails?._id) return;

    const updateData: residentUpdate = {
      updateid: residentDetails._id,
      firstName: data.firstName,
      lastName: data.lastName,
      middlename: data.middlename || undefined,
      dateofbirth: data.dateofbirth,
      age: data.age,
      gender: data.gender,
      civilstatus: data.civilstatus,
      mobilenumber: Number(data.mobilenumber) || undefined,
      streetname: data.streetname,
      province: data.province,
      cloudinaryphoto: data.cloudinaryphoto,

      citizenship: data.citizenship,
      city: data.city,
      currentschoolenrollment: data.currentschoolenrollment,
      educationalattainment: data.educationalattainment,
      emailadress: data.emailadress,
      emergencycontactname: data.emergencycontactname,
      emergencycontactnumber: Number(data.emergencycontactnumber),
      employmentstatus: data.employmentstatus,
      placeofbirth: data.placeofbirth,
      relationshiptoemergencycontact: data.relationshiptoemergencycontact,
      schooltype: data.schooltype,
    };

    handleCreateNewResidentUpdate(updateData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-gray-800">
            Resident Details
          </h3>

          {reasonData?.reason && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
              <p className="text-red-700 font-semibold">Update Declined</p>
              <p className="text-sm text-red-600 mt-1">
                Reason: <span className="font-medium">{reasonData.reason}</span>
              </p>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  id="firstName"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  id="lastName"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="middlename"
                  className="text-sm font-medium text-gray-700"
                >
                  Middle Name
                </label>
                <input
                  {...register("middlename")}
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                  type="text"
                  id="middlename"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="dateofbirth"
                  className="text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  {...register("dateofbirth")}
                  type="date"
                  id="dateofbirth"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.dateofbirth && (
                  <span className="text-red-500 text-sm">
                    {errors.dateofbirth.message}
                  </span>
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
                <label
                  htmlFor="gender"
                  className="text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  {...register("gender")}
                  id="gender"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
                {errors.gender && (
                  <span className="text-red-500 text-sm">
                    {errors.gender.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="civilstatus"
                  className="text-sm font-medium text-gray-700"
                >
                  Civil Status
                </label>
                <select
                  {...register("civilstatus")}
                  id="civilstatus"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widowed">Widowed</option>
                  <option value="separated">Separated</option>
                </select>
                {errors.civilstatus && (
                  <span className="text-red-500 text-sm">
                    {errors.civilstatus.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="streetname"
                  className="text-sm font-medium text-gray-700"
                >
                  Street Name
                </label>
                <input
                  {...register("streetname")}
                  type="text"
                  id="streetname"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="province"
                  className="text-sm font-medium text-gray-700"
                >
                  Province
                </label>
                <input
                  {...register("province")}
                  type="text"
                  id="province"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="mobilenumber"
                  className="text-sm font-medium text-gray-700"
                >
                  mobilenumber
                </label>
                <input
                  {...register("mobilenumber")}
                  type="number"
                  id="mobilenumber"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="Citizen Ship"
                  className="text-sm font-medium text-gray-700"
                >
                  Citizen Ship
                </label>
                <input
                  {...register("citizenship")}
                  type="text"
                  id="Citizen Ship"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  {...register("city")}
                  type="text"
                  id="city"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                />
              </div>

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
                  HIGHEST GRADE/YEAR COMPLETED
                </label>
                <select
                  {...register("educationalattainment")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="NO GRADE COMPLETED">NO GRADE COMPLETED</option>
                  <option value="PRESCHOOL">PRESCHOOL</option>
                  <option value="KINDERGARTEN">KINDERGARTEN</option>

                  {/* K TO 12 CURRICULUM */}
                  <optgroup label="K TO 12 CURRICULUM">
                    <option value="GRADE 1 (K TO 12)">GRADE 1 (K TO 12)</option>
                    <option value="GRADE 2 (K TO 12)">GRADE 2 (K TO 12)</option>
                    <option value="GRADE 3 (K TO 12)">GRADE 3 (K TO 12)</option>
                    <option value="GRADE 4 (K TO 12)">GRADE 4 (K TO 12)</option>
                    <option value="GRADE 5 (K TO 12)">GRADE 5 (K TO 12)</option>
                    <option value="GRADE 6 (K TO 12)">GRADE 6 (K TO 12)</option>
                    <option value="GRADE 7 (K TO 12)">GRADE 7 (K TO 12)</option>
                    <option value="GRADE 8 (K TO 12)">GRADE 8 (K TO 12)</option>
                    <option value="GRADE 9 (K TO 12)">GRADE 9 (K TO 12)</option>
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
              <div>
                <label
                  htmlFor="emailadress"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  {...register("emailadress")}
                  type="text"
                  id="emailadress"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="emergencycontactname"
                  className="text-sm font-medium text-gray-700"
                >
                  Emergency Contact Name
                </label>
                <input
                  {...register("emergencycontactname")}
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                  type="text"
                  id="emergencycontactname"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="emergencycontactnumber"
                  className="text-sm font-medium text-gray-700"
                >
                  Emergency Contact Number
                </label>
                <input
                  {...register("emergencycontactnumber")}
                  type="number"
                  id="emergencycontactnumber"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employment Status
                </label>
                <select
                  {...register("employmentstatus")}
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
                <label
                  htmlFor="placeofbirth"
                  className="text-sm font-medium text-gray-700"
                >
                  Place of Birth
                </label>
                <input
                  {...register("placeofbirth")}
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                  type="text"
                  id="placeofbirth"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="relationshiptoemergencycontact"
                  className="text-sm font-medium text-gray-700"
                >
                  Relationship Emergency Contact
                </label>
                <input
                  {...register("relationshiptoemergencycontact")}
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }}
                  type="text"
                  id="relationshiptoemergencycontact"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  School Type
                </label>
                <select
                  {...register("schooltype")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="PUBLIC">PUBLIC</option>
                  <option value="PRIVATE">PRIVATE</option>
                </select>
                {errors.schooltype && <p>{errors.schooltype.message}</p>}
              </div>
            </div>

            <div>
              <h1 className="mt-10 text-lg font-semibold">
                Proof of Update Profile
              </h1>
              <div className="mb-6">
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {errors.cloudinaryphoto && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.cloudinaryphoto.message}
                  </p>
                )}
              </div>

              {preview && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Preview:
                  </h3>
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-64 rounded-lg shadow-sm"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={createUpdateResident.isPending}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                {createUpdateResident.isPending ? "Loading..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FaceVerifiedDetails;
