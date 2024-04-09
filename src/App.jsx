import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./page/PrivateRoute";
import LoginRegister from "./page/LoginRegister";
import PublicRoute from "./page/PublicRoute";
import Logout from "./page/Logout";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="" element={<LoginRegister />} />
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
