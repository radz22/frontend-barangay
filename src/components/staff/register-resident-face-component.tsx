import ResidentHook from "../../hooks/resident-hook";
import { residentType } from "../../type/user/resident-profilling-zod";

interface RegisterResidentProps {
  setType: (type: "resident" | "cencus") => void;
  cookieEmail: string | undefined;
}

const RegisterResidentFaceComponent: React.FC<RegisterResidentProps> = ({
  setType,
  cookieEmail,
}) => {
  const { residentData } = ResidentHook();

  const sortedResident = [...(residentData?.data || [])].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const sortedUnregisteredResidents = sortedResident.filter(
    (resident) =>
      Array.isArray(resident.descriptor) &&
      resident.descriptor.length === 0 &&
      resident.staffaccountcreate === cookieEmail
  );

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Card Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setType("cencus")}
              className="p-2 hover:bg-white/50 rounded-lg transition-all duration-200 text-indigo-600 hover:text-indigo-800"
              aria-label="Go back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Unregistered Residents
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {sortedUnregisteredResidents.length} pending registration
                {sortedUnregisteredResidents.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {sortedUnregisteredResidents.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 flex items-center justify-center bg-green-50 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">
                All residents are registered!
              </h3>
              <p className="text-gray-500">
                No pending facial registrations found.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedUnregisteredResidents.map((resident: residentType) => (
                <div
                  key={resident._id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-150"
                >
                  <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                        {resident.firstName.charAt(0)}
                        {resident.lastName.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {resident.firstName} {resident.middlename}{" "}
                        {resident.lastName}
                      </h4>
                      <div className="flex items-center mt-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                          <svg
                            className="mr-1.5 h-2 w-2 text-red-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          Unregistered
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1z" />
                      </svg>
                      Register Face
                    </button>
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m11.52 14.929 5.917-5.917a8.2 8.2 0 0 1-2.661-1.787 8.2 8.2 0 0 1-1.788-2.662L7.07 10.48c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-1.088 3.267a.848.848 0 0 0 1.073 1.073l3.266-1.088c.62-.207.93-.31 1.221-.45q.518-.246.969-.598c.255-.199.485-.43.947-.891" />
                        <path d="M3.25 22a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" />
                      </svg>
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer */}
        {sortedUnregisteredResidents.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 text-right">
            <p className="text-sm text-gray-500">
              Showing {sortedUnregisteredResidents.length} resident
              {sortedUnregisteredResidents.length !== 1 ? "s" : ""} needing
              facial registration
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterResidentFaceComponent;
