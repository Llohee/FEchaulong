import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";

export const useGetAllStudent = () => {
  const [getAllStudent, setGetAllStudent] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const Students = async () => {
      try {
        const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/users/`;
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setGetAllStudent(data);
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    };
    Students();
  }, []);

  const updateStudent = async (id, updatedData, setSubmitting) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/users/${id}`;
      const response = await axios.put(url, updatedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      message.success(response.data.message);
    } catch (error) {
      message.error(error.response.data.error);
    } 
  };

  const deleteStudent = async (id) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/users/${id}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllStudent, updateStudent, deleteStudent, errorMessage };
};
