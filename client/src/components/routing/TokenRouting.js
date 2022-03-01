import React from "react";
import { Navigate } from "react-router-dom";

const TokenRouting = ({ children, ...rest }) => {
  let token = localStorage.token;

  return !token ? <Navigate to="/login" /> : children;
};

export default TokenRouting;
