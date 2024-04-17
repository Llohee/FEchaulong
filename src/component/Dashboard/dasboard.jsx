import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginForm } from "../../api/login-api";

const Home = () => {
  const navigate = useNavigate();
  const [goLogout, setGoLogout] = useState(false);
  useEffect(() => {
    if (!goLogout) return;
    setGoLogout(false);
    navigate("/logout");
  }, [goLogout]);
  const { userRole } = useLoginForm();
  console.log(userRole);
  return (
    <div className="bg-cyan-300 h-screen">
      <div className="container mx-auto flex gap-10">
        <button type="default" onClick={() => setGoLogout(true)}>
          Logout
        </button>
        {/* {userRole.includes("admin") && ( */}
          <button type="button" onClick={() => navigate("/home/students")}>
            Danh sách người dùng
          </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default Home;
