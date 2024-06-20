import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";

export const useAssigment = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [activeAssigments, setActiveAssigments] = useState([]);
  const [inactiveAssigments, setInactiveAssigments] = useState([]);
  const [getAssignmentById, setGetAssignmentById] = useState([]);

  const ActiveAssigments = async (Teamid) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/active-homeworks`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setActiveAssigments(data.activeHomeworks);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const InactiveAssigments = async (Teamid) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/inactive-homeworks`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setInactiveAssigments(data);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const getbyid = async (Teamid, id) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/homework/${id}`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setGetAssignmentById(data.homework);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitAssigment = async (
    Teamid,
    id,
    values,
    file,
    setSubmitting,
    setUserSubmitted
  ) => {
    const formData = new FormData();
    formData.append("description", values.description);
    formData.append("image", file);

    setSubmitting(true);

    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/${id}/submit`;
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      message.success(response.data.message);
      setUserSubmitted(true);
    } catch (error) {
      console.error("Error submitting homework:", error);
      message.error(error.response.data.error || "Error submitting homework");
    } finally {
      setSubmitting(false);
    }
  };

  const deleteAssignment = async (Teamid, id, submitid) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/${id}/delete-submission/${submitid}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      message.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const createAssignment = async (Teamid, values, file) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("start_time", values.start_time);
    formData.append("end_time", values.end_time);
    formData.append("image", file);

    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/add-homework`;
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      message.success(response.data.message);
    } catch (error) {
      console.error("Error submitting homework:", error);
      message.error(error.response.data.error || "Error submitting homework");
    }
  };
  return {
    ActiveAssigments,
    InactiveAssigments,
    getbyid,
    onFinishFailed,
    onSubmitAssigment,
    deleteAssignment,
    createAssignment,
    getAssignmentById,
    errorMessage,
    activeAssigments,
    inactiveAssigments,
  };
};
