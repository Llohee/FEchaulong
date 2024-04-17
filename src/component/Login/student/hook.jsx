// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export const useLoginForm = () => {
//   const navigate = useNavigate();
//   const [success, setSuccess] = useState(false);

//   const handleFormSubmit = async (values) => {
//     try {
//       const url = `${process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN}/login`;
//       const { data } = await axios.post(url, values);
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         setSuccess(true);

//         const tokenParts = data.token.split(".");
//         const encodedPayload = tokenParts[1];
//         const decodedPayload = atob(encodedPayload);
//         const userInfo = JSON.parse(decodedPayload);
//         const role = userInfo.role;

//         console.log("User role:", role);
//       }
//     } catch (error) {
//       console.error("Error occurred during login:", error);
//     }
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   useEffect(() => {
//     if (!success) return;
//     setSuccess(false);
//     navigate("/home");
//   }, [success]);

//   return {
//     handleFormSubmit,
//     onFinishFailed,
//   };
// };
