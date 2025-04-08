import { CencusContentForm } from "../../components/staff/Cencus-Cotent-Form";
import RegisterResidentFaceComponent from "../../components/staff/register-resident-face-component";
import { useState } from "react";
import GetCookie from "../../hooks/get-cookie";
export const Cencus = () => {
  const [type, setType] = useState<"resident" | "cencus">("cencus");

  const { cookieEmail } = GetCookie();
  return (
    <>
      {type === "cencus" ? (
        <CencusContentForm setType={setType} cookieEmail={cookieEmail} />
      ) : (
        <RegisterResidentFaceComponent
          setType={setType}
          cookieEmail={cookieEmail}
        />
      )}
    </>
  );
};
