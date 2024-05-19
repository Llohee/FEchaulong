import React from "react";
import Home from "../component/Dashboard/dasboard";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../component/ui/header";
import Sidebar from "../component/ui/sidebar";
import Layout from "../ui/layout/layout";

const Dashboard = () => {
  return (
    <div className="relative">
      <Layout />
      <Outlet />
    </div>
  );
};

export default Dashboard;
