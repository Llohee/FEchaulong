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
              <Route path=":id" element={<TeamPage />} />
            </Route>
          </Route>
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
