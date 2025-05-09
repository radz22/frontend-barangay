import { useState } from "react";
import { residentApprovalData } from "../../type/user/resident-profilling-zod";
import ResidentHook from "../../hooks/resident-hook";
import { ResidentNew } from "../../type/user/resident-profilling-zod";
import * as Dialog from "@radix-ui/react-dialog";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
      mobilenumber: data.mobilenumber,
      streetname: data.streetname,
      province: data.province,
      cloudinaryid: data.cloudinaryid,

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
            { label: "Street Name", value: data.streetname },
            { label: "Province", value: data.province },
            { label: "Citizen Ship", value: data.citizenship },
            { label: "City", value: data.city },
            {
              label: "Current School Enrollment",
              value: data.currentschoolenrollment,
            },
            {
              label: "Educational Attainment",
              value: data.educationalattainment,
            },
            { label: "Email Address", value: data.emailadress },
            {
              label: "Emergency Contact Name",
              value: data.emergencycontactname,
            },
            {
              label: "Emergency Contact Number",
              value: data.emergencycontactnumber,
            },
            { label: "Employment Status", value: data.employmentstatus },
            { label: "Place of Birth", value: data.placeofbirth },
            {
              label: "Relationship to Emergency Contact",
              value: data.relationshiptoemergencycontact,
            },
            { label: "School Type", value: data.schooltype },
            { label: "Documents", value: data.documents },
            { label: "Reason for Change", value: data.reason },
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
        <div className="border rounded-lg overflow-hidden shadow-md flex items-center justify-center">
          <Dialog.Root>
            <Dialog.Trigger>
              <img
                src={data.cloudinaryphoto}
                alt="Proof of update"
                className="w-[400px] h-[400px]  cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
              <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto max-w-6xl h-[90vh] max-h-[800px]  rounded-lg shadow-xl overflow-hidden flex flex-col">
                {data.cloudinaryphoto && (
                  <TransformWrapper
                    initialScale={1}
                    minScale={0.5}
                    maxScale={8}
                    doubleClick={{ step: 0.5 }}
                  >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                      <div className="relative flex-1 w-full h-full">
                        <div className="absolute top-4 left-4 z-10 flex gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-md shadow-sm">
                          <button
                            onClick={() => zoomIn()}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded"
                            aria-label="Zoom in"
                          >
                            <PlusIcon />
                          </button>
                          <button
                            onClick={() => zoomOut()}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded"
                            aria-label="Zoom out"
                          >
                            <MinusIcon />
                          </button>
                          <button
                            onClick={() => resetTransform()}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded"
                            aria-label="Reset zoom"
                          >
                            <ResetIcon />
                          </button>
                        </div>

                        <Dialog.Close asChild>
                          <button
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#7F265B] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6a1d4b] transition-colors"
                            aria-label="Close dialog"
                          >
                            <CloseIcon />
                          </button>
                        </Dialog.Close>

                        <TransformComponent
                          wrapperClass="w-full h-full"
                          contentClass="flex items-center justify-center"
                        >
                          <img
                            src={data.cloudinaryphoto}
                            alt="Zoomable content"
                            className="max-w-full max-h-full object-contain"
                          />
                        </TransformComponent>
                      </div>
                    )}
                  </TransformWrapper>
                )}
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
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

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12h14" />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path strokeWidth="2" strokeLinecap="round" d="M5 12h14" />
  </svg>
);

const ResetIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeWidth="2"
      d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
    />
    <path strokeWidth="2" d="M3 3v5h5" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M16.95 8.464a1 1 0 0 0-1.414-1.414L12 10.586L8.464 7.05A1 1 0 1 0 7.05 8.464L10.586 12L7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 1 0 1.414-1.414L13.414 12z" />
  </svg>
);
