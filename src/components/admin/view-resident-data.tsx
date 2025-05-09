import React from "react";
import { residentType } from "../../type/user/resident-profilling-zod";
import { formatDate } from "../../utils/format-date";
interface ViewProps {
  data: residentType | null;
}

const ViewResidentData: React.FC<ViewProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="p-4 text-center text-gray-600 bg-white rounded-lg shadow-sm">
        No resident data available.
      </div>
    );
  }

  const formatEnum = (value: string) => {
    return value
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md h-[85vh]  overflow-auto">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {data.firstName} {data.middlename && `${data.middlename} `}
          {data.lastName}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-600 border-b pb-2">
            Personal Information
          </h3>

          <InfoField label="First Name" value={data.firstName} />
          <InfoField label="Middle Name" value={data.middlename} />
          <InfoField label="Last Name" value={data.lastName} />
          <InfoField label="Gender" value={formatEnum(data.gender)} />
          <InfoField
            label="Date of Birth"
            value={formatDate(data.dateofbirth)}
          />
          <InfoField label="Place of Birth" value={data.placeofbirth} />
          <InfoField label="Age" value={data.age?.toString()} />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-600 border-b pb-2">
            Civil Status & Citizenship
          </h3>

          <InfoField
            label="Civil Status"
            value={formatEnum(data.civilstatus)}
          />
          <InfoField label="Nationality" value={data.nationality} />
          <InfoField label="Citizenship" value={data.citizenship} />
          <InfoField
            label="Employment Status"
            value={formatEnum(data.employmentstatus)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-600 border-b pb-2">
            Contact Information
          </h3>

          <InfoField
            label="Mobile Number"
            value={data.mobilenumber?.toString()}
          />
          <InfoField label="Email Address" value={data.emailadress} />
          <InfoField label="Address" value={data.address} />
          <InfoField label="Street Name" value={data.streetname} />
          <InfoField label="City" value={data.city} />
          <InfoField label="Province" value={data.province} />
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          Emergency Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoField label="Name" value={data.emergencycontactname} />
          <InfoField
            label="Contact Number"
            value={data.emergencycontactnumber?.toString()}
          />
          <InfoField
            label="Relationship"
            value={data.relationshiptoemergencycontact}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-600 border-b pb-2">
          Education Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoField
            label="Educational Attainment"
            value={formatEnum(data.educationalattainment)}
          />
          <InfoField
            label="Current School Enrollment"
            value={data.currentschoolenrollment}
          />
          <InfoField label="School Type" value={data.schooltype} />
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-6 pt-4 border-t">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoField label="Created By" value={data.staffaccountcreate} />
          <InfoField
            label="Created At"
            value={
              data.createdAt ? formatDate(data.createdAt) : "Not available"
            }
          />
        </div>
      </div>
    </div>
  );
};

// Helper component for consistent field display
const InfoField = ({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-gray-800">
      {value || <span className="text-gray-400">Not specified</span>}
    </p>
  </div>
);

export default ViewResidentData;
