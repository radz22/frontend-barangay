import "./App.css";
import SkeletonLoader from "./components/loading/loading-screen";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";

// 🔹 Lazy-loaded Components
const Signin = lazy(() =>
  import("./pages/Sign-in").then((module) => ({ default: module.Signin }))
);

const AdminDashboard = lazy(() =>
  import("./pages/admin/Admin-Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);
const AdminLayout = lazy(() =>
  import("./components/admin/AdminLayout").then((module) => ({
    default: module.AdminLayout,
  }))
);
const AdminArchived = lazy(() =>
  import("./pages/admin/Archived").then((module) => ({
    default: module.default,
  }))
);
const AdminResident = lazy(() =>
  import("./pages/admin/Resident").then((module) => ({
    default: module.Resident,
  }))
);
const AdminCencus = lazy(() =>
  import("./pages/admin/Cencus").then((module) => ({
    default: module.Cencus,
  }))
);
const AdminSettings = lazy(() =>
  import("./pages/admin/Settings").then((module) => ({
    default: module.Settings,
  }))
);
const StaffCencus = lazy(() =>
  import("./pages/staff/Cencus").then((module) => ({
    default: module.Cencus,
  }))
);
const CencusDataUser = lazy(() =>
  import("./pages/staff/CencusDataUser").then((module) => ({
    default: module.default,
  }))
);
const CreateStaffAccount = lazy(() =>
  import("./pages/admin/Create-Staff-Account").then((module) => ({
    default: module.default,
  }))
);

const ResetPassword = lazy(() =>
  import("./pages/reset-password").then((module) => ({
    default: module.default,
  }))
);
const Unauthorized = lazy(() =>
  import("./pages/unauthorized").then((module) => ({
    default: module.default,
  }))
);

function App() {
  return (
    <Router>
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          {/* ✅ Public Routes */}
          <Route path="/" element={<Signin />} />
          <Route path="/page/user/detail/:id" element={<CencusDataUser />} />
          <Route path="/page/reset-password/:id" element={<ResetPassword />} />
          <Route path="/page/unauthorized" element={<Unauthorized />} />

          <Route element={<ProtectedRoute allowedRoles={["admin", "staff"]} />}>
            <Route path="/page/staff" element={<StaffCencus />} />
          </Route>

          {/* ✅ Admin-Only Routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/residents" element={<AdminResident />} />
              <Route path="/admin/census" element={<AdminCencus />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
              <Route path="/admin/archived" element={<AdminArchived />} />
              <Route
                path="/admin/staff/account"
                element={<CreateStaffAccount />}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
