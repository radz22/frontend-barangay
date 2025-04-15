import ViewApprovalResident from "./view-approval-resident";
import { residentApprovalData } from "../../type/user/resident-profilling-zod";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useResidentApprovalData } from "../../hooks/use-resident-update-data";
const ResidentApprovalData = () => {
  const { data: getAll } = useResidentApprovalData();
  const [resident, setResident] = useState<residentApprovalData | null>(null);
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-300">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#7F265B] text-white text-left border-b border-gray-300">
              <th className="p-3 border border-gray-300">First Name</th>
              <th className="p-3 border border-gray-300">Middle Name</th>
              <th className="p-3 border border-gray-300">Last Name</th>
              <th className="p-3 border border-gray-300">Birth Date</th>
              <th className="p-3 border border-gray-300">Gender</th>
              <th className="p-3 border border-gray-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {getAll?.data.map((person: residentApprovalData, index: number) => (
              <tr
                key={index}
                className="border-b border-gray-300 odd:bg-gray-100 even:bg-white hover:bg-gray-200 transition-all"
              >
                <td className="p-3 border border-gray-300">
                  {person.firstName}
                </td>
                <td className="p-3 border border-gray-300">
                  {person.middlename || "-"}
                </td>
                <td className="p-3 border border-gray-300">
                  {person.lastName}
                </td>
                <td className="p-3 border border-gray-300">
                  {person.dateofbirth}
                </td>
                <td className="p-3 border border-gray-300">{person.gender}</td>
                <td className="p-3 border border-gray-300 text-center flex justify-center gap-5">
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <button
                        className="mr-2 p-2 text-blue-600 hover:text-blue-800"
                        onClick={() => setResident(person)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M20.188 10.934c.388.472.582.707.582 1.066s-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18s-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066s.194-.594.582-1.066C5.232 9.21 8.364 6 12 6s6.768 3.21 8.188 4.934Z"></path>
                        </svg>
                      </button>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                      <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[700px] overflow-auto">
                        <ViewApprovalResident data={resident} />
                        <div className="absolute top-[10px] right-[10px]  ">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResidentApprovalData;
