import { useState } from "react";
import axios from "axios";

export const useCreateStu = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const createStudent = async (values) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/users/create`;
      await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  return {
    createStudent,
    onFinishFailed,
    errorMessage,
  };
};
