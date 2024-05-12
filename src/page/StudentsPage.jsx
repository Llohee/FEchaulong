import { Navigate } from "react-router-dom";
import { useLoginForm } from "../api/login-api";
import Student from "../component/Student";

const Students = () => {
  const { userRole } = useLoginForm();
  if (userRole.includes("admin")) {
    return <div className="!overflow-hidden">
    <Student />;
    </div>
  }
  if (userRole.includes("stu")) {
    return <Navigate to={"/not-found"} replace />;
  }
};
Students.title = "Quản lý học sinh"
export default Students;
