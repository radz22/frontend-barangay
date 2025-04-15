import authHook from "../../hooks/authHook";
import { accountDatatype } from "../../type/user/account-data-type";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import ViewAndUpdateAccount from "./view-and-update-account";
import DeleteLayout from "./delete-layout";
import { useStaffAccountData } from "../../hooks/use-account-data";
interface manageAccountDataProps {
  handleClose: () => void;
}
const ManageAccountData: React.FC<manageAccountDataProps> = ({
  handleClose,
}) => {
  const { data: accountData } = useStaffAccountData();
  const { handleDelete, deleteAccountMutation } = authHook();
  const [account, setAccount] = useState<accountDatatype | null>(null);
  const [selectId, setSelectId] = useState<string | null>(null);

  const sortedAccount = [...(accountData?.data || [])].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-300">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#7F265B] text-white text-left border-b border-gray-300">
            <th className="p-3 border border-gray-300">Account Email</th>

            <th className="p-3 border border-gray-300 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedAccount.map((person: accountDatatype, index: number) => (
            <tr
              key={index}
              className="border-b border-gray-300 odd:bg-gray-100 even:bg-white hover:bg-gray-200 transition-all"
            >
              <td className="p-3 border border-gray-300">{person.email}</td>

              <td className="p-3 border border-gray-300 text-center">
                <Dialog.Root>
                  <Dialog.Trigger>
                    <button className="mr-2 p-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        onClick={() => {
                          setAccount(person);
                        }}
                      >
                        <path
                          fill="#0021ff"
                          d="M2 17v3h8v-1.89H3.9V17c0-.64 3.13-2.1 6.1-2.1c.96.01 1.91.14 2.83.38l1.52-1.52c-1.4-.47-2.85-.73-4.35-.76c-2.67 0-8 1.33-8 4m8-13C7.79 4 6 5.79 6 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m11.7 3.35l-1 1l-2.05-2l1-1a.55.55 0 0 1 .77 0l1.28 1.28c.21.21.21.56 0 .77M12 18.94l6.06-6.06l2.05 2l-6 6.07H12z"
                        ></path>
                      </svg>
                    </button>
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-auto">
                      <ViewAndUpdateAccount
                        data={account}
                        handleClose={handleClose}
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

                <Dialog.Root>
                  <Dialog.Trigger>
                    <button className="p-2 text-red-600 hover:text-red-800">
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
                        onClick={() => setSelectId(person?._id ?? null)}
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
                        deleteMutation={deleteAccountMutation}
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
  );
};

export default ManageAccountData;
