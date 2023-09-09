import { useAuthContext } from "../contexts/auth-context";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const auth = useAuthContext();

  return auth.isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
