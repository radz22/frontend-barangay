import { Resident } from "./resident-portal-component";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import ResidentHook from "../hooks/resident-hook";
import { Link } from "react-router-dom";
import { residentUpdate } from "../type/user/resident-profilling-zod";
const residentSchema = z.object({
  id: z.string().optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  middlename: z.string().optional(),
  dateofbirth: z.string(),

  gender: z.enum(["female", "male", "other"]),
  civilstatus: z.enum(["single", "married", "widowed", "separated"], {
    required_error: "Civil status is required",
  }),
  nationality: z.string().optional(),
  mobilenumber: z.string().optional(),
  address: z.string().optional(),
  streetname: z.string().optional(),
  province: z.string().optional(),
  cloudinaryphoto: z.string().min(1, " required"),
});

export type ResidentFormData = z.infer<typeof residentSchema>;

interface FaceVerifiedDetailsProps {
  residentDetails: Resident | null;
}

const FaceVerifiedDetails: React.FC<FaceVerifiedDetailsProps> = ({
  residentDetails,
}) => {
  const [preview, setPreview] = useState<null | string>(null);

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
    formState: { errors },
  } = useForm<ResidentFormData>({
    resolver: zodResolver(residentSchema),
  });

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
        nationality: residentDetails.nationality
          ? residentDetails.nationality
          : "",
        streetname: residentDetails.streetname
          ? residentDetails.streetname
          : "",
        address: residentDetails.address ? residentDetails.address : "",
        province: residentDetails.province ? residentDetails.province : "",
        mobilenumber: residentDetails?.mobilenumber?.toString()
          ? residentDetails?.mobilenumber?.toString()
          : "",
      });

      handleGetReason(residentDetails._id);
    }
  }, [residentDetails, reset]);

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
      gender: data.gender,
      civilstatus: data.civilstatus,
      nationality: data.nationality,
      mobilenumber: Number(data.mobilenumber) || undefined,
      address: data.address,
      streetname: data.streetname,
      province: data.province,
      cloudinaryphoto: data.cloudinaryphoto,
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
                  type="text"
                  id="middlename"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Date of Birth */}
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

              {/* Gender */}
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

              {/* Civil Status */}
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

              {/* Other Optional Fields */}
              <div>
                <label
                  htmlFor="nationality"
                  className="text-sm font-medium text-gray-700"
                >
                  Nationality
                </label>
                <input
                  {...register("nationality")}
                  type="text"
                  id="nationality"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  {...register("address")}
                  type="text"
                  id="address"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
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
              <Link to="/page/resident-portal">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                >
                  Cancel
                </button>
              </Link>
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
