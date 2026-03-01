import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // change to true to test access

  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;