import {
  residentSchema,
  residentType,
} from "../../type/user/resident-profilling-zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutationResult } from "@tanstack/react-query";
interface CreateProps {
  handleCreate: (data: residentType) => void;
  createResidentMutation: UseMutationResult<void, Error, residentType>;
  setOpen: () => void;
}

export const ResidentProfillingContent: React.FC<CreateProps> = ({
  handleCreate,
  createResidentMutation,
  setOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<residentType>({
    resolver: zodResolver(residentSchema),
  });
  const onSubmit: SubmitHandler<residentType> = (data) => {
    handleCreate(data);
    setOpen();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6">Resident Profiling Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            {...register("firstName")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
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
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            {...register("dateofbirth")}
            type="date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />

          {errors.dateofbirth && (
            <p className="text-red-500 text-sm">{errors.dateofbirth.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            {...register("gender")}
            defaultValue=""
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500">{errors.gender.message}</p>
          )}
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

            <option value="seperated">Seperated</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nationality
          </label>
          <input
            {...register("nationality")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.nationality && (
            <p className="text-red-500 text-sm">{errors.nationality.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="number"
            {...register("mobilenumber", {
              valueAsNumber: true,
            })}
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
            Address
          </label>
          <input
            {...register("address")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Street
          </label>
          <input
            {...register("streetname")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.streetname && (
            <p className="text-red-500 text-sm">{errors.streetname.message}</p>
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
            <p className="text-red-500 text-sm">{errors.province.message}</p>
          )}
        </div>

        {/* Household Members */}

        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          disabled={createResidentMutation.isPending}
        >
          {createResidentMutation.isPending ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
