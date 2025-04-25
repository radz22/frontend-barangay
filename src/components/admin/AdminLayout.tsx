import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import authHook from "../../hooks/authHook";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";

export const AdminLayout = () => {
  const { handleLogout } = authHook();
  const [archivedOpen, setArchivedOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-[#7F265B]">Admin Dashboard</h1>
        </div>

        <nav className="flex-1 mt-6 space-y-1">
          <NavItem to="/admin/dashboard" label="Dashboard" icon={<FiHome />} />
          <NavItem to="/admin/residents" label="Residents" icon={<FiUsers />} />
          <NavItem
            to="/admin/demographic"
            label="Demographic"
            icon={<FaPeopleGroup />}
          />
          <NavItem
            to="/admin/census"
            label="Census Data"
            icon={<FiBarChart2 />}
          />
          <NavItem
            to="/admin/staff/account"
            label="Staff Account"
            icon={<RiAccountPinBoxFill />}
          />

          <div className="px-4">
            <button
              onClick={() => setArchivedOpen((prev) => !prev)}
              className="w-full flex justify-between items-center py-3 px-2 rounded-lg text-gray-700 hover:bg-gray-200 transition"
            >
              <div className="flex items-center gap-3">
                <RiArchiveDrawerLine className="text-lg" />
                <span>Archived</span>
              </div>
              {archivedOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {archivedOpen && (
              <div className="ml-8 mt-1 space-y-1">
                <NavItem
                  to="/admin/archived/residents"
                  label="Residents"
                  icon={<FiUsers />}
                />
                <NavItem
                  to="/admin/archived/census"
                  label="Census"
                  icon={<FiBarChart2 />}
                />
              </div>
            )}
          </div>

          <NavItem
            to="/admin/settings"
            label="Settings"
            icon={<FiSettings />}
          />
        </nav>

        <button
          className="flex items-center px-6 py-3 gap-3 text-gray-700 hover:bg-red-100 rounded-lg transition mt-auto mb-6 mx-4"
          onClick={handleLogout}
        >
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </button>
      </aside>

      <main className="ml-64 flex-1 p-6 h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

type NavItemProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
};

const NavItem = ({ to, label, icon }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-6 py-3 gap-3 rounded-lg transition ${
        isActive
          ? "bg-[#7F265B] text-white font-semibold shadow-md"
          : "text-gray-700 hover:bg-gray-200"
      }`
    }
  >
    <span className="text-lg">{icon}</span>
    {label}
  </NavLink>
);
