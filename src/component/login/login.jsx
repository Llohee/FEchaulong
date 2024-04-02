import React from "react";
import Loginsvg_1 from "../../images/Loginsvg_1.svg";
import Loginsvg_2 from "../../images/Loginsvg_2.svg";
import Loginsvg_3 from "../../images/Loginsvg_3.svg";
import Loginsvg_4 from "../../images/Loginsvg_4.svg";
import Loginsvg_5 from "../../images/Loginsvg_5.svg";
import Loginsvg_6 from "../../images/Loginsvg_6.svg";
import Loginsvg_7 from "../../images/Loginsvg_7.svg";
const Login = () => {
  return (
    <div className="bg-[#2148C0] h-screen inset-0 bg-cover relative">
      <Loginsvg />
      <div className="absolute flex flex-col gap-12 m-auto w-full h-full z-100">
        <div className="bg-[#2244a7] w-[500px] min-h-[461.78px] flex flex-col gap-12 py-12 px-6 max-w-[100vw] rounded-lg m-auto md:border-2 md:shadow-2xlxl shadow-grey-9">
          <div className="flex flex-col w-full items-center justify-center gap-16">
            <img src={Loginsvg_5} alt="" />
            <div className="flex flex-col gap-6 w-full">
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
              <button className="bg-inherit border-none text-end text-white hover:text-sky-600">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Loginsvg = () => {
  return (
    <div className="">
      <div className="absolute right-0">
        <img src={Loginsvg_1} />
      </div>
      <div className="absolute left-0 bottom-0 z-10">
        <img src={Loginsvg_2} />
      </div>
      <div className="absolute left-0 bottom-0">
        <img src={Loginsvg_3} />
      </div>
      <div className="absolute left-0 bottom-0">
        <img src={Loginsvg_4} />
      </div>
    </div>
  );
};

export default Login;
