import ViewOptionQrCode from "./view-option-qrcode";
import * as Dialog from "@radix-ui/react-dialog";
import { FiX, FiExternalLink, FiShare2, FiCopy } from "react-icons/fi";
import { handleSuccessAlert } from "../sweet-alert";
const ViewOptionLink = () => {
  const directLink = `https://barangay-ly7m.onrender.com/page/resident-portal`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directLink);
    handleSuccessAlert("Link copied to clipboard!");
  };

  const handleOpenDirectLink = () => {
    window.open(directLink, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col items-center space-y-6">
        <h3 className="text-lg font-semibold text-gray-800">Share Options</h3>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          {/* Direct Link Button Group */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleOpenDirectLink}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium"
            >
              <FiExternalLink className="text-gray-600" />
              Open Direct Link
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium sm:px-3"
            >
              <FiCopy className="text-gray-600" />
              <span className="sr-only sm:not-sr-only">Copy</span>
            </button>
          </div>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#7F265B] rounded-lg hover:bg-[#6a1f4d] transition-colors duration-200 text-white font-medium shadow-sm">
                <FiShare2 />
                Show QR Code
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
              <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <ViewOptionQrCode url={directLink} />

                <Dialog.Close asChild>
                  <button
                    className="absolute -top-3 -right-3 w-10 h-10 bg-[#7F265B] rounded-full flex items-center justify-center text-white hover:bg-[#6a1f4d] transition-colors duration-200 shadow-md"
                    aria-label="Close"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <div className="text-center max-w-md">
          <p className="text-sm text-gray-500 mb-2">
            Share this resident's information:
          </p>
          <div className="flex items-center justify-center bg-gray-50 p-2 rounded-lg border border-gray-200">
            <span className="text-xs font-mono text-gray-600 truncate max-w-xs">
              {directLink}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOptionLink;
