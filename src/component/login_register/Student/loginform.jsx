import React, { useState } from "react";
import Loginsvg_6 from "../../../images/Loginsvg_6.svg";
import Loginsvg_7 from "../../../images/Loginsvg_7.svg";
import { useNavigate } from "react-router-dom";

const LoginStudentForm = () => {
  const navigate = useNavigate();
  return (
    <div className="w-96 flex flex-col items-center justify-center gap-16">
      <div className="w-full flex flex-col gap-6">
        <div className="flex gap-2 px-3 rounded border border-white">
          <img src={Loginsvg_6} alt="" />
          <input
            placeholder="TÊN ĐĂNG NHẬP"
            type="text"
            onFocus={null}
            className="p-2 bg-inherit focus:outline-none w-full text-white"
          ></input>
        </div>
        <div className="flex gap-2 px-3 rounded border border-white">
          <img src={Loginsvg_7} alt="" />
          <input
            placeholder="MẬT KHẨU"
            type="text"
            onFocus={null}
            className="p-2 bg-inherit focus:outline-none w-full text-white"
          ></input>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <button className="py-2 rounded border-none bg-white text-[#2148C0] text-xl">
          Đăng nhập
        </button>
        {/* <button
          onClick={() => {
            navigate("/register");
          }}
          className="bg-inherit border-none text-end text-white hover:text-sky-600"
        >
          Đăng ký
        </button> */}
      </div>
    </div>
  );
};

export default LoginStudentForm;
