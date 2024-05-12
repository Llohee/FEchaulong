import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFormSubmit = async (values) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/login`;
      const { data } = await axios.post(url, values);
      if (data.token) {
        localStorage.setItem("token", data.token);
        setSuccess(true);
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  useEffect(() => {
    if (!success) {
      return;
    }
    setSuccess(false);
    navigate("/home");
  }, [success]);

  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/users/role`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserRole(response.data.role);
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };
    fetchUserRole();
  }, []);
  const [userLogin, setUserLogin] = useState({});
  useEffect(() => {
    const getUserLogin = async () => {
      try {
        const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/users/me`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserLogin(response.data);
      } catch (error) {
        console.error("Error fetching userlogin", error);
      }
    };
    getUserLogin();
  }, []);

  return {
    handleFormSubmit,
    onFinishFailed,
    userRole,
    errorMessage,
    userLogin,
  };
};
