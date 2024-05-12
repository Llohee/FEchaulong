import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllTeams } from "../../api/teams-api";
import TeamAvatar from "../../ui/avatar/teamavatar";
import { Tab } from "@headlessui/react";
import Team from "../../component/Teams/Team";
const TeamPage = () => {
  const { id } = useParams();
  const { getTeambyid, teamById } = useGetAllTeams();
  useEffect(() => {
    if (id) {
      getTeambyid(id);
    }
  }, [id]);

  
  return (
    <Team />
  );
};

export default TeamPage;
