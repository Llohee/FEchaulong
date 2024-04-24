import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginForm } from "../../api/login-api";
import Button from "../ui/button/button";
import Layout from "../../ui/layout/layout";
import Students from "../../page/Students";
const Home = () => {
  const navigate = useNavigate();
  const { userRole, userLogin } = useLoginForm();
  return (
    <Layout>
     
    </Layout>
  );
};

export default Home;
