import { useState } from "react";
import ResidentHook from "../../hooks/resident-hook";
import * as Dialog from "@radix-ui/react-dialog";
import { residentType } from "../../type/user/resident-profilling-zod";
import DeleteLayout from "./delete-layout";
import ViewResidentData from "./view-resident-data";
import { useResidentData } from "../../hooks/use-resident-data";
const ResidentDataTable = () => {
  const [selectId, setSelectId] = useState<string | null>(null);
  const [resident, setResident] = useState<residentType | null>(null);
  const [search, setSearch] = useState<string>("");
  const { data: residentData } = useResidentData();
  const { handleDelete, deleteResidentDataByIdMutation } = ResidentHook();

  const sortedResident = [...(residentData?.data || [])].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  const filteredResidents = sortedResident.filter((person: residentType) => {
    if (!search) return true; // Return all if search is empty

    const searchTerm = search.toLowerCase();
    const fullName = `${person.firstName || ""} ${person.middlename || ""} ${
      person.lastName || ""
    }`.toLowerCase();

    return (
      person.firstName?.toLowerCase().includes(searchTerm) ||
      person.middlename?.toLowerCase().includes(searchTerm) ||
      person.lastName?.toLowerCase().includes(searchTerm) ||
      fullName.includes(searchTerm)
    );
  });
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex  justify-end items-end ">
        <input
          type="text"
          placeholder="Search by (first, middle, last, or full name)"
          className="w-[300px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
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
            {filteredResidents
              .filter(
                (person: residentType) =>
                  person.descriptor !== undefined &&
                  person.descriptor.length > 0
              )
              .map((person: residentType, index: number) => (
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
                  <td className="p-3 border border-gray-300">
                    {person.gender}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
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
                        <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto">
                          <ViewResidentData data={resident} />
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

                    <Dialog.Root>
                      <Dialog.Trigger>
                        <button
                          className="p-2 text-red-600 hover:text-red-800"
                          onClick={() => setSelectId(person?._id ?? null)}
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
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <path d="m19 6-.867 12.142A2 2 0 0 1 16.137 20H7.863a2 2 0 0 1-1.996-1.858L5 6"></path>
                            <path d="M10 11v5"></path>
                            <path d="M14 11v5"></path>
                          </svg>
                        </button>
                      </Dialog.Trigger>

                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                        <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto">
                          <DeleteLayout
                            id={selectId}
                            handleDelete={handleDelete}
                            deleteMutation={deleteResidentDataByIdMutation}
                          />
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
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResidentDataTable;
