import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login/login";
// import PublicRoute from "./page/PublicRoute";
// import Dashboard from "./component/Dashboard/dasboard";
import PrivateRoute from "./page/PrivateRoute";
import Loginstd from "./component/login/loginstd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PrivateRoute />}> */}
        {/* <Route path="" element={<Login />} />
          <Route path="me" element={<Me />} /> 
          <Route path="logout" element={<Logout />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route element={<PublicRoute />}> */}
        <Route path="" element={<Login />} />
        <Route path="/loginstd" element={<Loginstd />} />
        {/* <Route path="register" element={<Register />} /> */}
        {/* </Route> */}
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
