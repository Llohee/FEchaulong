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
import Room from "./component/Teams/Team/video/room";
import ChatPage from "./page/ChatPage";
import Chat from "./component/Chat";
import Home from "./component/Teams/Team/home";
import NoteBook from "./component/Teams/Team/notebook";
import ClassWork from "./component/Teams/Team/classwork";
import AssignmentPage from "./page/TeamsPage/Assignment";
import Assignments from "./component/Teams/assigment";
import Assignment from "./component/Teams/assigment/assignment";
import Profile from "./component/user/profile";
import ProfilePage from "./page/ProfilePage";
// import Assignments from "./component/Teams/assigment";

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
              <Route path="team/:id" element={<TeamPage />}>
                <Route path="" element={<Home />} />
                <Route path="notebook" element={<NoteBook />} />
                <Route path="classwork" element={<ClassWork />} />
                <Route path="assignments" element={<AssignmentPage />}>
                  <Route path="" element={<Assignments />} />
                  <Route path=":assignmentId" element={<Assignment />} />
                  {/* <Route path="passdue/:assignmentId" element={<Assignment />} />
                  <Route path="compeleted/:assignmentId" element={<Assignment />} /> */}
                </Route>
              </Route>
            </Route>
            <Route path="chats" element={<ChatPage />}>
              <Route path="" element={<Chat />} />
            </Route>
            <Route path="profile" element={<ProfilePage />}>
              <Route path="" element={<Profile />} />
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
