import { NavLink, Outlet } from "react-router-dom";
import authHook from "../../hooks/authHook";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { RiAccountPinBoxFill } from "react-icons/ri";

export const AdminLayout = () => {
  const { handleLogout } = authHook();
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-[#7F265B]">Admin Dashboard</h1>
        </div>

        <nav className="flex-1 mt-6">
          {[
            { to: "/admin/dashboard", label: "Dashboard", icon: <FiHome /> },
            { to: "/admin/residents", label: "Residents", icon: <FiUsers /> },
            {
              to: "/admin/census",
              label: "Census Data",
              icon: <FiBarChart2 />,
            },
            {
              to: "/admin/staff/account",
              label: "Staff Account",
              icon: <RiAccountPinBoxFill />,
            },
            { to: "/admin/settings", label: "Settings", icon: <FiSettings /> },
          ].map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 gap-3 rounded-lg transition 
                 ${
                   isActive
                     ? "bg-[#7F265B] text-white font-semibold shadow-md"
                     : "text-gray-700 hover:bg-gray-200"
                 }`
              }
            >
              <span className="text-lg">{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="flex items-center px-6 py-3 gap-3 text-gray-700 hover:bg-red-100 rounded-lg transition mt-auto mb-6 mx-4"
          onClick={handleLogout}
        >
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </button>
      </aside>

      <main className="ml-64 flex-1 p-6 h-full">
        <Outlet />
      </main>
    </div>
  );
};
