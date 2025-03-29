import { QRCodeSVG } from "qrcode.react";
import CencusHook from "../../hooks/staff/cencus-hook";
const QrCode = () => {
  const { cencusUserData } = CencusHook();

  const url = `http://localhost:5173/page/staff/${cencusUserData?.data?._id}`;

  return (
    <div className="w-full flex items-center justify-center">
      {cencusUserData ? (
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
      ) : (
        <div>NO DATA</div>
      )}
    </div>
  );
};

export default QrCode;
