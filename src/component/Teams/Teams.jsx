import React, { useEffect, useState } from "react";
import { useLoginForm } from "../../api/login-api";
import { allTeams, useGetAllTeams } from "../../api/teams-api";
import Avatar from "../../ui/avatar/avatar";
import TeamAvatar from "../../ui/avatar/teamavatar";
import { Link } from "react-router-dom";
import Loading from "../../ui/Loading/loading";
import CreateTeam from "./modal/create-team";

const Teams = () => {
  const { allTeams, loading } = useGetAllTeams();
  const { userLogin } = useLoginForm();
  const roles = userLogin?.role ?? [];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sub_container">
      <div className="flex px-8 py-4 justify-end mt-8">
        {roles.includes("admin") && (
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="bg-slate-600 flex items-center gap-2 border-2 rounded-md px-2 py-1"
          >
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 32 32"
              version="1.1"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Icon-Set"
                    transform="translate(-360.000000, -1035.000000)"
                    fill="#ffffff"
                  >
                    <path
                      d="M388,1053 L378,1053 L378,1063 C378,1064.1 377.104,1065 376,1065 C374.896,1065 374,1064.1 374,1063 L374,1053 L364,1053 C362.896,1053 362,1052.1 362,1051 C362,1049.9 362.896,1049 364,1049 L374,1049 L374,1039 C374,1037.9 374.896,1037 376,1037 C377.104,1037 378,1037.9 378,1039 L378,1049 L388,1049 C389.104,1049 390,1049.9 390,1051 C390,1052.1 389.104,1053 388,1053 L388,1053 Z M388,1047 L380,1047 L380,1039 C380,1036.79 378.209,1035 376,1035 C373.791,1035 372,1036.79 372,1039 L372,1047 L364,1047 C361.791,1047 360,1048.79 360,1051 C360,1053.21 361.791,1055 364,1055 L372,1055 L372,1063 C372,1065.21 373.791,1067 376,1067 C378.209,1067 380,1065.21 380,1063 L380,1055 L388,1055 C390.209,1055 392,1053.21 392,1051 C392,1048.79 390.209,1047 388,1047 L388,1047 Z"
                      id="plus"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p className="text-white text-lg">Tạo lớp học</p>
          </button>
        )}
      </div>
      {loading ? <Loading /> : <AllTeam allTeams={allTeams} />}
      {isOpen && (
        <CreateTeam isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      )}
    </div>
  );
};

const AllTeam = ({ allTeams }) => {
  return (
    <div className="flex flex-wrap gap-14 p-8">
      {allTeams.map((team, index) => (
        <Link to={`/teams/team/${team._id}`} key={index} className="block">
          <button
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
            className=" hover:bg-opacity-65 w-56 py-6 rounded-lg flex flex-col justify-center items-center gap-2"
          >
            <TeamAvatar name={team.name} />
            <div className="text-xl text-white">{team.name}</div>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Teams;
