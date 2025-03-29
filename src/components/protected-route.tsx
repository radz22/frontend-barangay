import { Navigate, Outlet } from "react-router-dom";
import useCookie from "../hooks/cookie-hook";
import SkeletonLoader from "./loading/loading-screen";
const ProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { data, isLoading, isFetching } = useCookie();
  if (isLoading || isFetching) return <SkeletonLoader />;

  if (!data || !data.role || !allowedRoles.includes(data?.role)) {
    return <Navigate to="/page/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
