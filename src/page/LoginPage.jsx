import React from "react";
import Loginsvg_1 from "../images/Loginsvg_1.svg";
import Loginsvg_2 from "../images/Loginsvg_2.svg";
import Loginsvg_3 from "../images/Loginsvg_3.svg";
import Loginsvg_4 from "../images/Loginsvg_4.svg";
import {
  BgLeft1Variants,
  BgLeft2Variants,
  BgLeft3Variants,
  BgRight1Variants,
} from "../animation/loginanimation";
import LoginForm from "../component/Login/index";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="bg-[#2148C0] h-screen inset-0 bg-cover relative overflow-hidden">
      <LoginForm />
      <motion.div initial="hidden" animate="visible" className="">
        <motion.div
          variants={BgRight1Variants}
          custom={0}
          className="absolute right-0"
        >
          <img src={Loginsvg_1} />
        </motion.div>
        <motion.div
          variants={BgLeft1Variants}
          custom={1}
          className="absolute left-0 bottom-0 z-10"
        >
          <img src={Loginsvg_2} />
        </motion.div>
        <motion.div
          variants={BgLeft2Variants}
          custom={0}
          className="absolute left-0 bottom-0"
        >
          <img src={Loginsvg_3} />
        </motion.div>
        <motion.div
          variants={BgLeft3Variants}
          custom={0}
          className="absolute left-0 bottom-0"
        >
          <img src={Loginsvg_4} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
