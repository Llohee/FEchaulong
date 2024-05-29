import { useEffect, useState } from "react";
import axios from "axios";

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
      setInactiveAssigments(data.inactiveHomeworks);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  const getTeambyid = async (Teamid, id) => {
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
  const onSubmitAssigment = async (Teamid, id, values) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${Teamid}/${id}/submit`;
      await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      setErrorMessage(error.response.data.message);
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  return {
    ActiveAssigments,
    InactiveAssigments,
    getTeambyid,
    onFinishFailed,
    onSubmitAssigment,
    deleteAssignment,
    getAssignmentById,
    errorMessage,
    activeAssigments,
    inactiveAssigments,
  };
};
