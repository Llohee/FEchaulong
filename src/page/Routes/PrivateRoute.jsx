import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const userLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) return true;
    return false;
  };
  if (!userLoggedIn()) {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <div className="bg-slate-500 min-h-screen overflow-hidden">
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
