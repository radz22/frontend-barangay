import React from "react";
import { QRCodeSVG } from "qrcode.react";

interface ViewOptionQrCodeProps {
  url: string;
}
const ViewOptionQrCode: React.FC<ViewOptionQrCodeProps> = ({ url }) => {
  return (
    <div className="mt-4 space-y-6 flex item-center justify-center">
      <div className="w-full max-w-[200px]">
        <QRCodeSVG
          value={url}
          size={200}
          fgColor="#fff"
          bgColor="#000"
          level="H"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ViewOptionQrCode;
