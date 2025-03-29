import { useParams } from "react-router-dom";
import CencusHook from "../../hooks/staff/cencus-hook";
import { useEffect } from "react";
const CencusDataUserContent = () => {
  const { id } = useParams();

  const { cencusDataUser, handleGetUserCencusDataById } = CencusHook();

  useEffect(() => {
    handleGetUserCencusDataById(id);
  }, [id]);
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col ">
      <div className="w-[50%] bg-[#ffffff] px-3 py-3 shadow-lg shadow-[#d9d9d9] rounded-lg ">
        {cencusDataUser ? (
          <div className="max-h-[90vh] w-full overflow-y-scroll">
            <div>
              <h1 className="text-2xl font-semibold text-center">
                Cencus Data
              </h1>
            </div>
            <div className="w-full mt-5">
              <h1 className="text-xl font-semibold">House Hold</h1>
              <div className="mt-5 grid grid-cols-3	place-items-center">
                <div>
                  <div>
                    <h1 className="text-lg font-semibold  text-center">
                      Last Name
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.lastname}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="text-lg font-semibold  text-center">
                      First Name
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.firstname}
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <h1 className="text-lg font-semibold  text-center">
                      Middle Name
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.middlename}
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <h1 className="text-lg font-semibold  text-center">Age</h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.age}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="text-lg font-semibold  text-center">
                      Birth Date
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.birthday}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="text-lg font-semibold text-center">
                      Gender
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.gender}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="text-lg font-semibold text-center">
                      Mobile No#
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.mobilenumber}
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <h1 className="text-lg font-semibold text-center">
                      Occupation
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.occupation}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="text-lg font-semibold text-center">
                      Employment Status
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.employmentstatus}
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <h1 className="text-lg font-semibold text-center">City</h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.city}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="text-lg font-semibold text-center">City</h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.province}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="text-lg font-semibold text-center">
                      Street Name
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-center">
                      {cencusDataUser?.streetname}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-5">
              <h1 className="text-xl font-semibold">House Members</h1>
              <div className="mt-5 grid grid-cols-3	place-items-center">
                {cencusDataUser?.householdMembers?.map((member, index) => (
                  <div key={index}>
                    <div>
                      <div>
                        <h1 className="text-lg font-semibold  text-center">
                          Last Name
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-normal text-center">
                          {member?.lastname}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h1 className="text-lg font-semibold  text-center">
                          First Name
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-normal text-center">
                          {member?.firstname}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h1 className="text-lg font-semibold  text-center">
                          Middle Name
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-normal text-center">
                          {member?.middlename}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h1 className="text-lg font-semibold  text-center">
                          Age
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-normal text-center">
                          {member?.age}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h1 className="text-lg font-semibold  text-center">
                          Birth Date
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-normal text-center">
                          {member?.birthday}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h1 className="text-lg font-semibold  text-center">
                          Gender
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-normal text-center">
                          {member?.gender}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h1 className="text-lg font-semibold  text-center">
                          Civil Status
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-normal text-center">
                          {member?.civilstatus}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h1 className="text-lg font-semibold  text-center">
                          Relationship
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-normal text-center">
                          {member?.relationship}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h1 className="text-lg font-semibold  text-center">
                          Employment Status
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-normal text-center">
                          {member?.employmentstatus}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-center text-2xl font-semibold"> No Data </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CencusDataUserContent;
