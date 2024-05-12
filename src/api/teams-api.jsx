import axios from "axios";
import { useLoginForm } from "./login-api";
import { useEffect, useState } from "react";

export const useGetAllTeams = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [allTeams, setAllTeams] = useState([]);
  const [teamById, getTeamById] = useState([]);
  const { userLogin } = useLoginForm();
  useEffect(() => {
    const getallTeams = async (id) => {
      try {
        const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/team/${id}`;
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAllTeams(data.teams);
      } catch (error) {
        console.log(error);
      }
    };
    if (userLogin) {
      getallTeams(userLogin._id);
    }
  }, [userLogin]);

  const getTeambyid = async (id) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${id}`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      getTeamById(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (id, useradded) => {
    try {
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
      console.log(response);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return {
    useGetAllTeams,
    allTeams,
    teamById,
    getTeambyid,
    addUser,
    errorMessage,
  };
};
