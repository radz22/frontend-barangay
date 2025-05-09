import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ResidentDataTable from "./resident-data-table";
import ResidentApprovalData from "./resident-approval-data";
const ResidentContent = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-screens">
      <div className="w-full flex items-end justify-end px-4 flex-col">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger>
            <button
              className="w-auto py-3 px-3 bg-[#7F265B] text-white rounded-lg  font-semibold "
              onClick={() => setOpen(true)}
            >
              Resident Update Approval
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-auto">
              <div className="max-h-[80vh] overflow-auto">
                <ResidentApprovalData />
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
      <div className=" w-full z-0 ">
        <ResidentDataTable />
      </div>
    </div>
  );
};

export default ResidentContent;
