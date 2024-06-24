import axios from "axios";
import { useLoginForm } from "./login-api";
import { useEffect, useState } from "react";
import { message } from "antd";

export const useGetAllTeams = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [allTeams, setAllTeams] = useState([]);
  const [teamById, setTeamById] = useState([]);
  const { userLogin } = useLoginForm();

  useEffect(() => {
    const getallTeams = async (id) => {
      try {
        setLoading(true);
        const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/team/${id}`;
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAllTeams(data.teams);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorMessage("Failed to fetch teams.");
      }
    };

    if (userLogin) {
      getallTeams(userLogin._id);
    }
  }, [userLogin]);

  const getTeambyid = async (id) => {
    try {
      setLoading(true);
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${id}`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTeamById(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const addUser = async (id, useradded) => {
    try {
      setLoading(true);
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${id}/add-users`;
      const response = await axios.post(
        url,
        { id: useradded },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      message.success(response.data.message);
    } catch (error) {
      setErrorMessage(errorMessage);
      message.error(
        error.response?.data?.message || error.response?.data?.error
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    allTeams,
    teamById,
    getTeambyid,
    addUser,
    errorMessage,
  };
};
