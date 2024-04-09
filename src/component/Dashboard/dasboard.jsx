import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [goLogout, setGoLogout] = useState(false);
  useEffect(() => {
    if (!goLogout) return;
    setGoLogout(false);
    navigate("/logout");
  }, [goLogout]);
  return (
    <div>
      <button type="default" onClick={() => setGoLogout(true)}>
        Logout
      </button>
    </div>
  );
};

export default Home;
