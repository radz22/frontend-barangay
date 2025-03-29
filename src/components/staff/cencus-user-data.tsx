import { useParams } from "react-router-dom";
import CencusHook from "../../hooks/staff/cencus-hook";
import { useEffect } from "react";

interface InfoCardProps {
  label: string;
  value: string | number | undefined;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
    <h3 className="text-sm font-medium text-gray-500">{label}</h3>
    <p className="mt-1 text-lg font-normal text-gray-800 break-words">
      {value || <span className="text-gray-400">N/A</span>}
    </p>
  </div>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
    {title}
  </h2>
);

const CencusDataUserContent = () => {
  const { id } = useParams();
  const { cencusDataUser, handleGetUserCencusDataById } = CencusHook();

  useEffect(() => {
    handleGetUserCencusDataById(id);
  }, [id]);

  if (!cencusDataUser) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-semibold text-gray-700">
            No Data Found
          </h1>
          <p className="mt-2 text-gray-500">
            The requested census data could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Census Data Record
          </h1>
          <p className="text-center mt-2 opacity-90">
            Collected on: {cencusDataUser.dateofcencus}
          </p>
        </div>

        <div className="p-6 space-y-8">
          {/* Basic Information Section */}
          <div>
            <SectionHeader title="Household Head Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InfoCard label="Last Name" value={cencusDataUser.lastname} />
              <InfoCard label="First Name" value={cencusDataUser.firstname} />
              <InfoCard label="Middle Name" value={cencusDataUser.middlename} />
              <InfoCard label="Age" value={cencusDataUser.age} />
              <InfoCard label="Birth Date" value={cencusDataUser.birthday} />
              <InfoCard label="Gender" value={cencusDataUser.gender} />
              <InfoCard
                label="Civil Status"
                value={cencusDataUser.civilstatus}
              />
              <InfoCard
                label="Mobile Number"
                value={cencusDataUser.mobilenumber}
              />
              <InfoCard label="Occupation" value={cencusDataUser.occupation} />
              <InfoCard
                label="Employment Status"
                value={cencusDataUser.employmentstatus}
              />
            </div>
          </div>

          {/* Address Information */}
          <div>
            <SectionHeader title="Address Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InfoCard
                label="House Number"
                value={cencusDataUser.housenumber}
              />
              <InfoCard label="Street Name" value={cencusDataUser.streetname} />
              <InfoCard label="Barangay" value={cencusDataUser.barangay} />
              <InfoCard label="City" value={cencusDataUser.city} />
              <InfoCard label="Province" value={cencusDataUser.province} />
              <InfoCard label="House Type" value={cencusDataUser.housetype} />
              <InfoCard
                label="Housing Type"
                value={cencusDataUser.housingtype}
              />
              <InfoCard
                label="Year Constructed"
                value={cencusDataUser.yearofconstructed}
              />
            </div>
          </div>

          {/* Health Information */}
          <div>
            <SectionHeader title="Health Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InfoCard
                label="Health Status"
                value={cencusDataUser.healthstatus}
              />
              <InfoCard
                label="Disability Status"
                value={cencusDataUser.disabilitystatus}
              />
              {cencusDataUser.disabilitystatus === "yes" && (
                <InfoCard
                  label="Disability Type"
                  value={cencusDataUser.disabilitytype}
                />
              )}
              <InfoCard
                label="Existing Health Condition"
                value={cencusDataUser.existinghealthcondition}
              />
              <InfoCard
                label="Fully Immunized"
                value={cencusDataUser.fullyimmunized}
              />
              <InfoCard
                label="COVID-19 Vaccination"
                value={cencusDataUser.covid19vaccination}
              />
            </div>
          </div>

          {/* Education Information */}
          <div>
            <SectionHeader title="Education Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard
                label="Currently Enrolled"
                value={cencusDataUser.currentschoolenrollment}
              />
              <InfoCard
                label="Educational Attainment"
                value={cencusDataUser.educationalattainment}
              />
            </div>
          </div>

          {/* Migration Information */}
          {cencusDataUser.residentlived === "yes" && (
            <div>
              <SectionHeader title="Migration History" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InfoCard
                  label="Previous Barangay"
                  value={cencusDataUser.barangayresidence}
                />
                <InfoCard
                  label="Previous City"
                  value={cencusDataUser.cityresidence}
                />
                <InfoCard
                  label="Previous Municipality"
                  value={cencusDataUser.municipalityresidence}
                />
                <InfoCard
                  label="Previous Province"
                  value={cencusDataUser.provinceresidence}
                />
                <InfoCard
                  label="Reason for Moving"
                  value={cencusDataUser.reasonformoving}
                />
              </div>
            </div>
          )}

          {/* Emergency Contact */}
          <div>
            <SectionHeader title="Emergency Contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard
                label="Contact Name"
                value={cencusDataUser.emergencycontactname}
              />
              <InfoCard
                label="Contact Number"
                value={cencusDataUser.emergencycontactnumber}
              />
              <InfoCard
                label="Relationship"
                value={cencusDataUser.relationshiptoemergencycontact}
              />
            </div>
          </div>

          {/* Household Members */}
          <div>
            <SectionHeader
              title={`Household Members (${
                cencusDataUser.householdMembers?.length || 0
              })`}
            />
            {cencusDataUser.householdMembers?.length ? (
              <div className="space-y-6">
                {cencusDataUser.householdMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-lg font-semibold mb-4">
                      Member #{index + 1}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <InfoCard label="Last Name" value={member.lastname} />
                      <InfoCard label="First Name" value={member.firstname} />
                      <InfoCard label="Middle Name" value={member.middlename} />
                      <InfoCard label="Age" value={member.age} />
                      <InfoCard label="Birth Date" value={member.birthday} />
                      <InfoCard label="Gender" value={member.gender} />
                      <InfoCard
                        label="Civil Status"
                        value={member.civilstatus}
                      />
                      <InfoCard
                        label="Relationship"
                        value={member.relationship}
                      />
                      <InfoCard
                        label="Employment Status"
                        value={member.employmentstatus}
                      />
                      <InfoCard label="Occupation" value={member.occupation} />
                      <InfoCard
                        label="Currently Enrolled"
                        value={member.currentschoolenrollment}
                      />
                      <InfoCard
                        label="Educational Attainment"
                        value={member.educationalattainment}
                      />
                      <InfoCard
                        label="Health Status"
                        value={member.healthstatus}
                      />
                      <InfoCard
                        label="Disability Status"
                        value={member.disabilitystatus}
                      />
                      {member.disabilitystatus === "yes" && (
                        <InfoCard
                          label="Disability Type"
                          value={member.disabilitytype}
                        />
                      )}
                      <InfoCard
                        label="Existing Health Condition"
                        value={member.existinghealthcondition}
                      />
                      <InfoCard
                        label="Fully Immunized"
                        value={member.fullyimmunized}
                      />
                      <InfoCard
                        label="COVID-19 Vaccination"
                        value={member.covid19vaccination}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                No household members recorded
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CencusDataUserContent;
