import { Navigate } from "react-router-dom";

const RoleProtectedRoute = ({ allowedRole, children }) => {
  const role = localStorage.getItem("role");

  if (!role) {
    return <Navigate to="/" replace />; // not logged in
  }

  if (role !== allowedRole) {
    // redirect to their correct home
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default RoleProtectedRoute;
