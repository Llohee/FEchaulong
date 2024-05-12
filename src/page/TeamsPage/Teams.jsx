import React from "react";
import Teams from "../../component/Teams/Teams";
import { Outlet } from "react-router-dom";
const TeamsPage = () => {
  return (
    <>
      {/* <Teams />; */}
      <Outlet />
    </>
  );
};

export default TeamsPage;
