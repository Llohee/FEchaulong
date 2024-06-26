import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";

export const useGetAllStudent = () => {
  const [getAllStudent, setGetAllStudent] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [fetchTrigger, setFetchTrigger] = useState(false);

  const updateStudent = async (id, updatedData) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/users/${id}`;
      const response = await axios.put(url, updatedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      message.success(response.data.message);
      setFetchTrigger((prev) => !prev); // Toggle fetchTrigger to trigger useEffect
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

      message.success(response.data.message); // Assuming your API returns a success message
      setFetchTrigger((prev) => !prev); // Toggle fetchTrigger to trigger useEffect
    } catch (error) {
      message.error(error.response.data.error);
    }
  };

  useEffect(() => {
    const fetchStudents = async () => {
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

    fetchStudents(); 
  }, [fetchTrigger]);

  return { getAllStudent, updateStudent, deleteStudent, errorMessage };
};
