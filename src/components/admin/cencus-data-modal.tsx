import React from "react";
import { cencusType } from "../../type/user/cencus-zod";
import { QRCodeSVG } from "qrcode.react";

interface CencusDataModalProps {
  userData: cencusType | null;
}

const CencusDataModal: React.FC<CencusDataModalProps> = ({ userData }) => {
  if (!userData) {
    return (
      <div className="p-4 text-center text-gray-600">
        No census data available.
      </div>
    );
  }
  const url = `http://localhost:5173/page/staff/${userData._id}`;

  return (
    <div className="mt-4 space-y-6">
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

export default CencusDataModal;
