import CencusHook from "../../hooks/staff/cencus-hook";
import { cencusType } from "../../type/user/cencus-zod";
import { useState } from "react";
import { useCencusData } from "../../hooks/staff/use-cencus-data";
const ArchivedTable = () => {
  const {
    handleDelete,
    deleteCencusDataByIdMutation,
    handleRestore,
    restoredCencusbyIdMutation,
  } = CencusHook();
  const { data: cencusData } = useCencusData();
  const [search, setSearch] = useState<string>("");
  const sortedUsers = [...(cencusData?.data || [])].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  const filteredCencus = sortedUsers.filter((person: cencusType) => {
    if (!search) return true; // Return all if search is empty

    const searchTerm = search.toLowerCase();
    const fullName = `${person.firstname || ""} ${person.middlename || ""} ${
      person.lastname || ""
    }`.toLowerCase();

    return (
      person.firstname?.toLowerCase().includes(searchTerm) ||
      person.middlename?.toLowerCase().includes(searchTerm) ||
      person.lastname?.toLowerCase().includes(searchTerm) ||
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
              <th className="p-3 border border-gray-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCencus
              .filter((person: cencusType) => person.archived === true)
              .map((person: cencusType, index: any) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 odd:bg-gray-100 even:bg-white hover:bg-gray-200 transition-all"
                >
                  <td className="p-3 border border-gray-300">
                    {person.firstname}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {person.middlename || "-"}
                  </td>

                  <td className="p-3 border border-gray-300">
                    {person.lastname}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    <button
                      className="mr-2 p-2 "
                      onClick={() => handleRestore(person._id)}
                      disabled={restoredCencusbyIdMutation.isPending}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#00b527"
                          d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14zM6 7v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7zm8 7v4h-4v-4H8l4-4l4 4z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="p-2 text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(person._id)}
                      disabled={deleteCencusDataByIdMutation.isPending}
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
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArchivedTable;
