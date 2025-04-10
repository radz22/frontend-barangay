import { Resident } from "./resident-portal-component";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import ResidentHook from "../hooks/resident-hook";
import { Link } from "react-router-dom";
// Enhanced Zod validation schema
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
  isUpdated: z.boolean().optional(),
});

export type ResidentFormData = z.infer<typeof residentSchema>;

interface FaceVerifiedDetailsProps {
  residentDetails: Resident | null;
}

const FaceVerifiedDetails: React.FC<FaceVerifiedDetailsProps> = ({
  residentDetails,
}) => {
  const { handleUpdateResident, updateResidentMutation } = ResidentHook();
  const {
    register,
    handleSubmit,
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

        isUpdated: true,
      });
    }
  }, [residentDetails, reset]);

  const onSubmit = (data: ResidentFormData) => {
    handleUpdateResident(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Resident Details
        </h3>
        <div className="space-y-4">
          {/* Form Inputs for Updating Resident Details */}
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
                disabled={updateResidentMutation.isPending}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                {updateResidentMutation.isPending
                  ? "Loading..."
                  : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FaceVerifiedDetails;
