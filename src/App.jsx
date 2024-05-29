import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./page/Routes/PrivateRoute";
import Login from "./page/LoginPage";
import PublicRoute from "./page/Routes/PublicRoute";
import Logout from "./page/LogoutPage";
import Dashboard from "./page/DashboardPage";
import HomePage from "./component/Dashboard/dasboard";
import Students from "./page/StudentsPage";
import TeamsPage from "./page/TeamsPage/Teams";
import TeamPage from "./page/TeamsPage/Team";
import Teams from "./component/Teams/Teams";
import Team from "./component/Teams/Team";
import Room from "./component/Teams/Team/video/room";
import ChatPage from "./page/ChatPage";
import Chat from "./component/Chat";
import AssignmentPage from "./page/TeamsPage/Assignment";
import Assigment from "./component/Teams/assigment/assigment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="home" element={<HomePage />} />
            <Route path="students" element={<Students />} />
            <Route path="teams" element={<TeamsPage />}>
              <Route path="" element={<Teams />} />
              <Route path="team" element={<TeamPage />}>
                <Route path=":id" element={<Team />}>
                  <Route path="" element={<Team />} />
                  {/* <Route path="assignment">
                    <Route path=":assignmentId" element={<Assigment />} />
                  </Route> */}
                </Route>
              </Route>
            </Route>
            <Route path="chats" element={<ChatPage />}>
              <Route path="" element={<Chat />} />
            </Route>
          </Route>
          <Route path="room/:roomId" element={<Room />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<>Not Found</>} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
