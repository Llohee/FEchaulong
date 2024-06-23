import { useState } from "react";
import axios from "axios";
import { message } from "antd";

export const useCreateStu = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const createStudent = async (values, closeModal) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/users/create`;
      const response = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      message.success(response.data.message);
      closeModal()
    } catch (error) {
      setErrorMessage(error.response.data.message);
      message.error(error.response.data.error);
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
