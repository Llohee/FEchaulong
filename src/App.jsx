import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./page/PrivateRoute";
import Login from "./page/Login";
import PublicRoute from "./page/PublicRoute";
import Logout from "./page/Logout";
import Dashboard from "./page/Dashboard";
import Home from "./component/Dashboard/dasboard";
import Students from "./page/Students";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="students" element={<Students />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<>Not Found</>} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
