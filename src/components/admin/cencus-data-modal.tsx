import React from "react";
import { cencusType } from "../../type/user/cencus-zod";

interface ViewProps {
  data: cencusType | null;
}

const CencusDataModal: React.FC<ViewProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="p-6 text-center text-gray-600 bg-white rounded-lg shadow-sm">
        No census data available.
      </div>
    );
  }

  // Helper functions
  const formatEnum = (value: string) => {
    return value
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderYesNo = (value: string) => {
    return value === "yes" ? (
      <span className="text-green-600">Yes</span>
    ) : (
      <span className="text-red-600">No</span>
    );
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md h-[85vh] overflow-auto">
      {/* Header */}
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {data.firstname} {data.middlename} {data.lastname}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <InfoField
            label="Census Date"
            value={formatDate(data.dateofcencus)}
          />
          <InfoField label="Census Area" value={data.areaofcencusstreet} />
          <InfoField label="Year Conducted" value={data.yearconducting} />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Personal Information */}
          <SectionCard title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField label="First Name" value={data.firstname} />
              <InfoField label="Middle Name" value={data.middlename} />
              <InfoField label="Last Name" value={data.lastname} />
              <InfoField label="Birthday" value={formatDate(data.birthday)} />
              <InfoField label="Age" value={data.age.toString()} />
              <InfoField label="Gender" value={formatEnum(data.gender)} />
              <InfoField
                label="Civil Status"
                value={formatEnum(data.civilstatus)}
              />
              <InfoField
                label="Citizenship"
                value={formatEnum(data.citizenship)}
              />
              <InfoField label="Place of Birth" value={data.placeofbirth} />
            </div>
          </SectionCard>

          {/* Contact Information */}
          <SectionCard title="Contact Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField
                label="Mobile Number"
                value={data.mobilenumber.toString()}
              />
              <InfoField label="Email Address" value={data.emailadress} />
              <InfoField
                label="Government ID"
                value={data.governmentid || "None"}
              />
              {data.governmentid && (
                <InfoField
                  label="Government ID Number"
                  value={data.governmentidnumber?.toString() || "Not provided"}
                />
              )}
            </div>
          </SectionCard>

          {/* Address Information */}
          <SectionCard title="Address Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField
                label="House Number"
                value={data.housenumber.toString()}
              />
              <InfoField label="Street Name" value={data.streetname} />
              <InfoField label="Barangay" value={data.barangay} />
              <InfoField label="City" value={data.city} />
              <InfoField label="Province" value={data.province} />
              <InfoField
                label="Housing Type"
                value={formatEnum(data.housingtype)}
              />
              <InfoField
                label="House Type"
                value={formatEnum(data.housetype)}
              />
              <InfoField
                label="Year Constructed"
                value={data.yearofconstructed}
              />
              <InfoField
                label="House Members"
                value={data.numberofhousemembers.toString()}
              />
            </div>
          </SectionCard>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Education & Employment */}
          <SectionCard title="Education & Employment">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField
                label="Currently Enrolled"
                value={renderYesNo(data.currentschoolenrollment)}
              />
              <InfoField
                label="School Type"
                value={formatEnum(data.schooltype)}
              />
              <InfoField
                label="Educational Attainment"
                value={formatEnum(data.educationalattainment)}
              />
              <InfoField
                label="Employment Status"
                value={formatEnum(data.employmentstatus)}
              />
              <InfoField label="Occupation" value={data.occupation} />
            </div>
          </SectionCard>

          {/* Health Information */}
          <SectionCard title="Health Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField
                label="Health Status"
                value={formatEnum(data.healthstatus)}
              />
              <InfoField
                label="Has Disability"
                value={renderYesNo(data.disabilitystatus)}
              />
              {data.disabilitystatus === "yes" && (
                <InfoField
                  label="Disability Type"
                  value={data.disabilitytype}
                />
              )}
              <InfoField
                label="Existing Health Condition"
                value={data.existinghealthcondition}
              />
              <InfoField
                label="Fully Immunized"
                value={renderYesNo(data.fullyimmunized)}
              />
              <InfoField
                label="COVID-19 Vaccinated"
                value={renderYesNo(data.covid19vaccination)}
              />
            </div>
          </SectionCard>

          {/* Migration History */}
          {data.residentlived === "yes" && (
            <SectionCard title="Migration History">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoField
                  label="Previous Barangay"
                  value={data.barangayresidence}
                />
                <InfoField label="Previous City" value={data.cityresidence} />
                <InfoField
                  label="Previous Municipality"
                  value={data.municipalityresidence}
                />
                <InfoField
                  label="Previous Province"
                  value={data.provinceresidence}
                />
                <InfoField
                  label="Reason for Moving"
                  value={data.reasonformoving}
                />
              </div>
            </SectionCard>
          )}

          {/* Emergency Contact */}
          <SectionCard title="Emergency Contact" highlight>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField
                label="Contact Name"
                value={data.emergencycontactname}
              />
              <InfoField
                label="Contact Number"
                value={data.emergencycontactnumber.toString()}
              />
              <InfoField
                label="Relationship"
                value={data.relationshiptoemergencycontact}
              />
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Household Members */}
      {data.householdMembers && data.householdMembers.length > 0 && (
        <SectionCard title="Household Members">
          <div className="space-y-4">
            {data.householdMembers.map((member, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50">
                <h4 className="font-medium text-gray-800 mb-3">
                  {member.firstname} {member.middlename} {member.lastname}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InfoField
                    label="Relationship"
                    value={formatEnum(member.relationship)}
                  />
                  <InfoField label="Age" value={member.age.toString()} />
                  <InfoField label="Gender" value={formatEnum(member.gender)} />
                  <InfoField
                    label="Birthday"
                    value={formatDate(member.birthday)}
                  />
                  <InfoField
                    label="Civil Status"
                    value={formatEnum(member.civilstatus)}
                  />
                  <InfoField
                    label="Citizenship"
                    value={formatEnum(member.citizenship)}
                  />
                  <InfoField
                    label="Mobile"
                    value={member.mobilenumber.toString()}
                  />
                  <InfoField label="Email" value={member.emailaddress} />
                  <InfoField label="Occupation" value={member.occupation} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* System Information */}
      <div className="text-sm text-gray-500 mt-6 pt-4 border-t">
        <div className="flex justify-between">
          <InfoField
            label="Created By"
            value={data.staffaccountcreate || "System"}
          />
          <InfoField
            label="Status"
            value={
              data.archived ? (
                <span className="text-red-600">Archived</span>
              ) : (
                <span className="text-green-600">Active</span>
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

// Helper components
const SectionCard = ({
  title,
  children,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) => (
  <div
    className={`p-4 rounded-lg border ${
      highlight ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
    }`}
  >
    <h3
      className={`text-lg font-semibold mb-4 ${
        highlight ? "text-blue-700" : "text-gray-700"
      }`}
    >
      {title}
    </h3>
    {children}
  </div>
);

const InfoField = ({
  label,
  value,
}: {
  label: string;
  value?: React.ReactNode | string | null;
}) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-gray-800">
      {value !== undefined && value !== null && value !== "" ? (
        value
      ) : (
        <span className="text-gray-400">Not specified</span>
      )}
    </p>
  </div>
);

export default CencusDataModal;
