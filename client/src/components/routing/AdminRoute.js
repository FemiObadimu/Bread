import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const AdminRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, loadUser } = authContext;
  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);

  return isAuthenticated && user.role !== "admin" ? (
    <Navigate to="/dashboard" />
  ) : (
    children
  );
};

export default AdminRoute;
