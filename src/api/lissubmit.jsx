import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const useListSumit = () => {
  const [getSubmitssions, setGetSubmitssions] = useState([]);
  const [getNoneSubmitssions, setGetNoneSubmitssions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const Submit = async (id, assignmentId) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${id}/homework/${assignmentId}/submissions`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setGetSubmitssions(data.submissions);
      setGetNoneSubmitssions(data.usersNotSubmitted);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  const { id, assignmentId } = useParams();
  useEffect(() => {
    Submit(id, assignmentId);
  }, [id, assignmentId]);

  const getSubmitByUserId = async (id, assignmentId, userId) => {
    try {
      const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/teams/${id}/${assignmentId}/get-submission/${userId}`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setSubmissions(data);
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Error fetching submissions");
    }
  };




  return { getSubmitssions, getNoneSubmitssions, submissions, getSubmitByUserId };
};
