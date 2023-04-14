import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  console.log("first===");
  const email = useSelector((state) => state.user.email);
  console.log(email);
  return email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
