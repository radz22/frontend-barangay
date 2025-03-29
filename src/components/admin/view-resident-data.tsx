import React from "react";
import { residentType } from "../../type/user/resident-profilling-zod";
interface ViewProps {
  data: residentType | null;
}
const ViewResidentData: React.FC<ViewProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="p-4 text-center text-gray-600">
        No census data available.
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">First Name:</span> {data.firstName}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Middle Name:</span>{" "}
              {data.middlename}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Last Name:</span> {data.lastName}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Gender:</span> {data.gender}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Birthday:</span> {data.dateofbirth}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Civil Status:</span>{" "}
              {data.civilstatus}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Nationality:</span>{" "}
              {data.nationality}
            </p>

            <p className="text-gray-600">
              <span className="font-medium">Mobile:</span> {data.mobilenumber}
            </p>
          </div>
        </div>
      </div>

      {/* Address Information */}
      {/* <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Address Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">House Number:</span>{" "}
                  {userData.housenumber}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Street:</span> {userData.streetname}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Barangay:</span> {userData.barangay}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">City:</span> {userData.city}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Province:</span> {userData.province}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Housing Type:</span>{" "}
                  {userData.housingtype}
                </p>
              </div>
            </div>
          </div> */}

      {/* <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Household Members
            </h3>
            <div className="space-y-4">
              {userData.householdMembers?.map((member, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gray-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">Name:</span>{" "}
                        {member.firstname} {member.middlename} {member.lastname}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Relationship:</span>{" "}
                        {member.relationship}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">Age:</span> {member.age}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Occupation:</span>{" "}
                        {member.occupation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
    </div>
  );
};

export default ViewResidentData;
