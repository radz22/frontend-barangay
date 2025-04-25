import { useState } from "react";
import { residentApprovalData } from "../../type/user/resident-profilling-zod";
import ResidentHook from "../../hooks/resident-hook";
import { ResidentNew } from "../../type/user/resident-profilling-zod";
import * as Dialog from "@radix-ui/react-dialog";

interface ViewProps {
  data: residentApprovalData | null;
}

const ViewApprovalResident: React.FC<ViewProps> = ({ data }) => {
  const {
    handleUpdateResident,
    updateResidentMutation,
    handleDecline,
    declineMutation,
  } = ResidentHook();
  const [selectId, setSelectId] = useState<string>("");
  const [declineReason, setDeclineReason] = useState<string>("");
  if (!data) {
    return (
      <div className="p-6 text-center text-gray-600 bg-white rounded-lg shadow">
        No resident data available.
      </div>
    );
  }

  const handleApprove = () => {
    const datas: ResidentNew = {
      id: data.updateid,
      firstName: data.firstName,
      lastName: data.lastName,
      middlename: data.middlename,
      dateofbirth: data.dateofbirth,
      age: data.age,
      gender: data.gender,
      civilstatus: data.civilstatus,
      nationality: data.nationality,
      mobilenumber: data.mobilenumber,
      address: data.address,
      streetname: data.streetname,
      province: data.province,
      cloudinaryid: data.cloudinaryid,
    };

    handleUpdateResident(datas);
  };

  const handleDeclineResident = () => {
    handleDecline(declineReason, selectId, data.cloudinaryid);
  };
  return (
    <div className="p-6 space-y-10 bg-white rounded-lg shadow-md w-full max-w-5xl mx-auto">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "First Name", value: data.firstName },
            { label: "Middle Name", value: data.middlename },
            { label: "Last Name", value: data.lastName },
            { label: "Gender", value: data.gender },
            { label: "Birthday", value: data.dateofbirth },
            { label: "Age", value: data.age },
            { label: "Mobile", value: data.mobilenumber },
            { label: "Civil Status", value: data.civilstatus },
            { label: "Nationality", value: data.nationality },
            { label: "Address", value: data.address },
            { label: "Street Name", value: data.streetname },
            { label: "Province", value: data.province },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200"
            >
              <p className="text-xs font-medium text-gray-500 mb-1">
                {item.label}
              </p>
              <p className="text-base text-gray-800 capitalize">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Proof of Update
        </h3>
        {data.cloudinaryphoto ? (
          <div className="flex justify-center">
            <div className="border rounded-lg overflow-hidden shadow-md">
              <img
                src={data.cloudinaryphoto}
                alt="Proof of update"
                className="w-[250px] h-[250px] object-cover"
              />
            </div>
          </div>
        ) : (
          <p className="text-gray-500 italic text-center">
            No proof image provided.
          </p>
        )}
      </div>

      <div className="flex justify-center gap-10 pt-6">
        <button
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition-all duration-150"
          onClick={handleApprove}
          disabled={updateResidentMutation.isPending}
        >
          {updateResidentMutation.isPending ? "Loading..." : "Approve"}
        </button>

        <Dialog.Root>
          <Dialog.Trigger>
            <button
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition-all duration-150"
              onClick={() => setSelectId(data.updateid)}
            >
              Decline
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                  Decline Reason
                </h3>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Enter Reason"
                  value={declineReason}
                  onChange={(e) => setDeclineReason(e.target.value)}
                ></textarea>

                <button
                  className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition-all duration-150 mt-5"
                  onClick={handleDeclineResident}
                  disabled={declineMutation.isPending}
                >
                  {declineMutation.isPending ? "Loading..." : "Submit"}
                </button>
              </div>
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
      </div>
    </div>
  );
};

export default ViewApprovalResident;
