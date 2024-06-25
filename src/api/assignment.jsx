import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";

export const useAssigment = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeAssigments, setActiveAssigments] = useState([]);
  const [inactiveAssigments, setInactiveAssigments] = useState([]);
  const [getAssignmentById, setGetAssignmentById] = useState([]);
  const [compeletedAssignment, setCompeletedAssginment] = useState([]);
  const ActiveAssigments = async (Teamid) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const InactiveAssigments = async (Teamid) => {
    setLoading(true);
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/inactive-homeworks`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setInactiveAssigments(data.inactiveHomeworks);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const CompeletedAsssginments = async (Teamid, id) => {
    setLoading(true);
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/submissions/${id}`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCompeletedAssginment(data.submissions);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
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
  const updateSubmission = async (Teamid, homeworkId, submissionId, values) => {
    setLoading(true);
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/${homeworkId}/update-submission/${submissionId}`;
      const response = await axios.put(url, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      message.success(response.data.message);
    } catch (error) {
      console.error("Error updating submission score and comment:", error);
      message.error(error.response.data.error || "Error updating submission");
    } finally {
      setLoading(false);
    }
  };
  return {
    ActiveAssigments,
    InactiveAssigments,
    CompeletedAsssginments,
    getbyid,
    updateSubmission,
    onFinishFailed,
    onSubmitAssigment,
    deleteAssignment,
    createAssignment,
    getAssignmentById,
    compeletedAssignment,
    errorMessage,
    activeAssigments,
    inactiveAssigments,
    loading,
  };
};
