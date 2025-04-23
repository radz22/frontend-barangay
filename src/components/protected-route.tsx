import { Navigate, Outlet } from "react-router-dom";
import SkeletonLoader from "./loading/loading-screen";
import { useEffect, useState } from "react";
import { getCookie } from "../services/cookie-service";
const ProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await getCookie();
        setRole(response?.role ?? null);
      } catch (error) {
        console.error("Error fetching cookie data:", error);
        setRole(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRole();
  }, []);

  if (isLoading) return <SkeletonLoader />;

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/page/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
