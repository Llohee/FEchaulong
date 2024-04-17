import { Navigate } from "react-router-dom";
import { useLoginForm } from "../api/login-api";
import Student from "../component/Student";

const Students = () => {
  const { userRole } = useLoginForm();
  if (userRole.includes("admin")) {
    return <Student />;
  }
  if (userRole.includes("stu")) {
    return <Navigate to={"/not-found"} replace />;
  }
};

export default Students;
