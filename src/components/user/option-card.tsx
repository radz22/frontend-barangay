import authHook from "../../hooks/authHook";
import * as Dialog from "@radix-ui/react-dialog";
import QrCode from "./QrCode";
interface optionCardProps {
  handleOpen: () => void;
}
const OptionCard: React.FC<optionCardProps> = ({ handleOpen }) => {
  const { handleLogout } = authHook();

  return (
    <div className="bg-[#ffffff] py-3 px-3 w-[290px] shadow-xl	 shadow-[#b3b3b3] rounded-lg relative">
      <div className="w-full">
        <div className="flex items-center justify-between mt-8 cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="bg-[#e4e4e4] px-1 py-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zm1.838-6.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-medium">Settings</h1>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#9d9d9d"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m7 4l8.33 6.04c2.226 1.615 2.226 2.306 0 3.92L7 20"
                color="#00"
              />
            </svg>
          </div>
        </div>

        <Dialog.Root>
          <Dialog.Trigger className="w-full">
            <div className="flex items-center justify-between mt-8 cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="bg-[#e4e4e4] px-1 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#0b0b0b"
                      d="M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1zm5 4h-4v-2h2v-2h2zM3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h3v2h-3zM6 6v2h2V6zm0 10v2h2v-2zM16 6v2h2V6z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h1 className="text-lg font-medium">Census QR</h1>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#9d9d9d"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m7 4l8.33 6.04c2.226 1.615 2.226 2.306 0 3.92L7 20"
                    color="#00"
                  />
                </svg>
              </div>
            </div>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[400px] h-auto">
              <QrCode />
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

        <div
          className="flex items-center gap-2 mt-6 cursor-pointer"
          onClick={handleLogout}
        >
          <div className="bg-[#e4e4e4] px-1 py-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M3.5 9.568v4.864c0 2.294 0 3.44.722 4.153c.655.647 1.674.706 3.596.712c-.101-.675-.122-1.48-.128-2.428a.734.734 0 0 1 .735-.734a.735.735 0 0 1 .744.726c.006 1.064.033 1.818.14 2.39c.103.552.267.87.507 1.108c.273.27.656.445 1.38.54c.744.1 1.73.101 3.145.101h.985c1.415 0 2.401-.002 3.146-.1c.723-.096 1.106-.272 1.378-.541c.273-.27.451-.648.548-1.362c.1-.734.102-1.709.102-3.105V8.108c0-1.397-.002-2.37-.102-3.105c-.097-.714-.275-1.093-.547-1.362c-.273-.27-.656-.445-1.38-.54C17.728 3 16.742 3 15.327 3h-.985c-1.415 0-2.401.002-3.146.1c-.723.096-1.106.272-1.379.541c-.24.237-.404.556-.507 1.108c-.107.572-.134 1.326-.14 2.39a.735.735 0 0 1-.744.726a.734.734 0 0 1-.735-.734c.006-.948.027-1.753.128-2.428c-1.922.006-2.94.065-3.596.712c-.722.713-.722 1.86-.722 4.153m2.434 2.948a.723.723 0 0 1 0-1.032l1.97-1.946a.746.746 0 0 1 1.046 0a.723.723 0 0 1 0 1.032l-.71.7h7.086c.408 0 .74.327.74.73s-.332.73-.74.73H8.24l.71.7a.723.723 0 0 1 0 1.032a.746.746 0 0 1-1.046 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-medium">Log Out</h1>
          </div>
        </div>
      </div>
      <div className="absolute top-[-20px] right-[-10px]" onClick={handleOpen}>
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
      </div>
    </div>
  );
};

export default OptionCard;
