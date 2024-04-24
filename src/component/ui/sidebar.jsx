import React from "react";
import { useLoginForm } from "../../api/login-api";
import Button from "./button/button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { userRole } = useLoginForm();
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-violet-1 w-20 flex flex-col gap-6 items-center fixed top-0 left-0 z-[500] border-r-2 border-border-1 pt-[70px]">
      {userRole.includes("admin") && (
        <button
          className="text-white"
          onClick={() => navigate("/home/students")}
        >
          <svg
            width="70px"
            height="70px"
            viewBox="-12 -15 48.00 48.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(4.199999999999999,4.199999999999999), scale(0.65)"
            >
              <path
                transform="translate(-12, -12), scale(3)"
                fill="#c4b5fd"
                d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                strokewidth="0"
              ></path>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.048"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 21C4 17.4735 6.60771 14.5561 10 14.0709M19.8726 15.2038C19.8044 15.2079 19.7357 15.21 19.6667 15.21C18.6422 15.21 17.7077 14.7524 17 14C16.2923 14.7524 15.3578 15.2099 14.3333 15.2099C14.2643 15.2099 14.1956 15.2078 14.1274 15.2037C14.0442 15.5853 14 15.9855 14 16.3979C14 18.6121 15.2748 20.4725 17 21C18.7252 20.4725 20 18.6121 20 16.3979C20 15.9855 19.9558 15.5853 19.8726 15.2038ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                stroke="#ffffff"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Học sinh
        </button>
      )}
      <button className="text-white">
        <svg
          height="54px"
          width="54px"
          version="1.1"
          id="_x32_"
          viewBox="-133.12 -133.12 778.24 778.24"
          fill="#ffffff"
          stroke="#ffffff"
          stroke-width="0.00512"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <path
              transform="translate(-133.12, -133.12), scale(48.64)"
              fill="#c4b5fd"
              d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
              strokewidth="0"
            ></path>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <style type="text/css"></style>
            <g>
              <path
                class="st0"
                d="M145.764,98.011c27.058,0,49.002-21.943,49.002-49.009C194.766,21.935,172.822,0,145.764,0 c-27.066,0-49.009,21.935-49.009,49.002C96.755,76.068,118.698,98.011,145.764,98.011z"
              ></path>
              <circle class="st0" cx="110.089" cy="377.876" r="48.646"></circle>
              <path
                class="st0"
                d="M110.321,450.209c-33.874-0.248-61.543,27-61.799,60.874L171.195,512 C171.442,478.126,144.195,450.466,110.321,450.209z"
              ></path>
              <circle class="st0" cx="271.065" cy="377.876" r="48.646"></circle>
              <path
                class="st0"
                d="M271.288,450.209c-33.866-0.248-61.544,27-61.792,60.874L332.17,512 C332.418,478.126,305.162,450.466,271.288,450.209z"
              ></path>
              <circle class="st0" cx="432.033" cy="377.876" r="48.646"></circle>
              <path
                class="st0"
                d="M432.255,450.209c-33.866-0.248-61.535,27-61.782,60.874L493.138,512 C493.393,478.126,466.129,450.466,432.255,450.209z"
              ></path>
              <path
                class="st0"
                d="M272.66,235.671h-53.513v-39.657c0.264-35.212-24.332-64.79-57.363-72.143l-6.089,18.87h-19.87l-6.072-18.837 c-32.602,7.287-57.115,36.187-57.371,71.011v40.756H18.861v33.635H272.66V235.671z M135.825,153.597h19.87v61.114l-9.932,8.592 l-9.939-8.592V153.597z"
              ></path>
            </g>
          </g>
        </svg>
        Lớp học
      </button>
      <button className="text-white">
        <svg
          width="50px"
          height="50px"
          viewBox="-4.08 -4.08 32.16 32.16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <path
              transform="translate(-4.08, -4.08), scale(2.01)"
              fill="#c4b5fd"
              d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
              strokewidth="0"
            ></path>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
              stroke="#ffffff"
              stroke-width="1.392"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
        Lịch
      </button>
      <button className="text-white">
        <svg
          width="54px"
          height="54px"
          viewBox="-3.36 -3.36 25.72 35.72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="SVGRepo_bgCarrier"
            stroke-width="0"
            transform="translate(0,0), scale(1)"
          >
            <path
              transform="translate(-3.36, -3.36), scale(1.92)"
              fill="#c4b5fd"
              d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
              strokewidth="0"
            ></path>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
              stroke="#ffffff"
              stroke-width="1.5"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M8 10.5H16"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M8 14H13.5"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
        Tin nhắn
      </button>
      <button className="text-white">
        <svg
          fill="#ffffff"
          width="50px"
          height="50px"
          viewBox="-729.6 -729.6 3079.20 3479.20"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          stroke-width="74.88000000000001"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <path
              transform="translate(-729.6, -729.6), scale(211.2)"
              fill="#c4b5fd"
              d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
              strokewidth="0"
            ></path>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="m1783.68 1468.235-315.445 315.445v-315.445h315.445Zm-541.327-338.823v112.94h-903.53v-112.94h903.53Zm338.936-338.824V903.53H338.824V790.59h1242.465ZM621.176 0c93.403 0 169.412 76.01 169.412 169.412 0 26.09-6.437 50.484-16.94 72.62L999.98 468.255l-79.962 79.962-226.221-226.334c-22.137 10.504-46.532 16.942-72.622 16.942-93.402 0-169.411-76.01-169.411-169.412C451.765 76.009 527.775 0 621.176 0Zm395.295 225.882v112.942h790.588v1016.47h-451.765v451.765H112.941V338.824h225.883V225.882H0V1920h1421.478c45.176 0 87.755-17.619 119.717-49.581l329.224-329.11c31.962-32.076 49.581-74.655 49.581-119.831V225.882h-903.53Z"
              fill-rule="evenodd"
            ></path>{" "}
          </g>
        </svg>
        Ghi nhớ
      </button>
      <button className="text-white">
        <svg
          width="54px"
          height="54px"
          viewBox="-2.4 -2.4 28.80 28.80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <path
              transform="translate(-2.4, -2.4), scale(1.7999999999999998)"
              fill="#c4b5fd"
              d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
              strokewidth="0"
            ></path>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 9.5V15.5M12 15.5L10 13.5M12 15.5L14 13.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
        Tài liệu
      </button>
      <button className="text-white">
        <svg
          width="54px"
          height="54px"
          viewBox="-3.6 -3.6 29.20 31.20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <path
              transform="translate(-3.6, -3.6), scale(1.9500000000000002)"
              fill="#c4b5fd"
              d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
              strokewidth="0"
            ></path>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z"
              stroke="#ffffff"
              stroke-width="1.5"
            ></path>{" "}
            <path
              d="M14.1007 16.0272L13.5569 15.5107L14.1007 16.0272ZM14.5562 15.5477L15.1 16.0642H15.1L14.5562 15.5477ZM16.9728 15.2123L16.5987 15.8623H16.5987L16.9728 15.2123ZM18.8833 16.312L18.5092 16.962L18.8833 16.312ZM19.4217 19.7584L19.9655 20.2749L19.4217 19.7584ZM18.0011 21.254L17.4573 20.7375L18.0011 21.254ZM16.6763 21.9631L16.7499 22.7095L16.6763 21.9631ZM6.81536 17.4752L7.35915 16.9587L6.81536 17.4752ZM2.00289 7.96594L1.25397 8.00613L1.25397 8.00613L2.00289 7.96594ZM8.47752 9.50311L9.02131 10.0196H9.02131L8.47752 9.50311ZM8.63424 6.6931L9.24664 6.26012L8.63424 6.6931ZM7.37326 4.90961L6.76086 5.3426V5.3426L7.37326 4.90961ZM4.26145 4.60864L4.80524 5.12516L4.26145 4.60864ZM2.69185 6.26114L2.14806 5.74462L2.14806 5.74462L2.69185 6.26114ZM10.0631 14.0559L10.6069 13.5394L10.0631 14.0559ZM14.6445 16.5437L15.1 16.0642L14.0124 15.0312L13.5569 15.5107L14.6445 16.5437ZM16.5987 15.8623L18.5092 16.962L19.2575 15.662L17.347 14.5623L16.5987 15.8623ZM18.8779 19.2419L17.4573 20.7375L18.5449 21.7705L19.9655 20.2749L18.8779 19.2419ZM16.6026 21.2167C15.1676 21.3584 11.4233 21.2375 7.35915 16.9587L6.27157 17.9917C10.7009 22.655 14.9261 22.8895 16.7499 22.7095L16.6026 21.2167ZM7.35915 16.9587C3.48303 12.8778 2.83285 9.43556 2.75181 7.92574L1.25397 8.00613C1.35322 9.85536 2.1384 13.6403 6.27157 17.9917L7.35915 16.9587ZM8.7345 10.3216L9.02131 10.0196L7.93372 8.9866L7.64691 9.28856L8.7345 10.3216ZM9.24664 6.26012L7.98565 4.47663L6.76086 5.3426L8.02185 7.12608L9.24664 6.26012ZM3.71766 4.09213L2.14806 5.74462L3.23564 6.77765L4.80524 5.12516L3.71766 4.09213ZM8.1907 9.80507C7.64691 9.28856 7.64622 9.28929 7.64552 9.29002C7.64528 9.29028 7.64458 9.29102 7.64411 9.29152C7.64316 9.29254 7.64219 9.29357 7.64121 9.29463C7.63924 9.29675 7.6372 9.29896 7.6351 9.30127C7.63091 9.30588 7.62646 9.31087 7.62178 9.31625C7.61243 9.32701 7.60215 9.33931 7.59116 9.3532C7.56918 9.38098 7.54431 9.41512 7.51822 9.45588C7.46591 9.53764 7.40917 9.64531 7.36112 9.78033C7.26342 10.0549 7.21018 10.4185 7.27671 10.8726C7.40742 11.7647 7.99198 12.9644 9.51933 14.5724L10.6069 13.5394C9.17926 12.0363 8.82761 11.1106 8.76086 10.6551C8.72866 10.4354 8.76138 10.3196 8.77432 10.2832C8.78159 10.2628 8.78635 10.2571 8.78169 10.2644C8.77944 10.2679 8.77494 10.2745 8.76738 10.2841C8.76359 10.2888 8.75904 10.2944 8.7536 10.3006C8.75088 10.3038 8.74793 10.3071 8.74476 10.3106C8.74317 10.3123 8.74152 10.3141 8.73981 10.3159C8.73896 10.3169 8.73809 10.3178 8.7372 10.3187C8.73676 10.3192 8.73608 10.3199 8.73586 10.3202C8.73518 10.3209 8.7345 10.3216 8.1907 9.80507ZM9.51933 14.5724C11.0422 16.1757 12.1923 16.806 13.0698 16.9485C13.5201 17.0216 13.8846 16.9632 14.1606 16.8544C14.2955 16.8012 14.4022 16.7387 14.4823 16.6819C14.5223 16.6535 14.5556 16.6266 14.5824 16.6031C14.5959 16.5913 14.6077 16.5803 14.618 16.5703C14.6232 16.5654 14.628 16.5606 14.6324 16.5562C14.6346 16.554 14.6367 16.5518 14.6387 16.5497C14.6397 16.5487 14.6407 16.5477 14.6417 16.5467C14.6422 16.5462 14.6429 16.5454 14.6431 16.5452C14.6438 16.5444 14.6445 16.5437 14.1007 16.0272C13.5569 15.5107 13.5576 15.51 13.5583 15.5093C13.5585 15.509 13.5592 15.5083 13.5596 15.5078C13.5605 15.5069 13.5614 15.506 13.5623 15.5051C13.5641 15.5033 13.5658 15.5015 13.5674 15.4998C13.5708 15.4965 13.574 15.4933 13.577 15.4904C13.583 15.4846 13.5885 15.4796 13.5933 15.4754C13.6028 15.467 13.6099 15.4616 13.6145 15.4584C13.6239 15.4517 13.6229 15.454 13.6102 15.459C13.5909 15.4666 13.5 15.4987 13.3103 15.4679C12.9077 15.4025 12.0391 15.0472 10.6069 13.5394L9.51933 14.5724ZM7.98565 4.47663C6.97206 3.04305 4.94384 2.80119 3.71766 4.09213L4.80524 5.12516C5.32808 4.57471 6.24851 4.61795 6.76086 5.3426L7.98565 4.47663ZM2.75181 7.92574C2.73038 7.52644 2.90425 7.12654 3.23564 6.77765L2.14806 5.74462C1.61221 6.30877 1.20493 7.09246 1.25397 8.00613L2.75181 7.92574ZM17.4573 20.7375C17.1783 21.0313 16.8864 21.1887 16.6026 21.2167L16.7499 22.7095C17.497 22.6357 18.1016 22.2373 18.5449 21.7705L17.4573 20.7375ZM9.02131 10.0196C9.98889 9.00095 10.0574 7.40678 9.24664 6.26012L8.02185 7.12608C8.44399 7.72315 8.37926 8.51753 7.93372 8.9866L9.02131 10.0196ZM18.5092 16.962C19.33 17.4345 19.4907 18.5968 18.8779 19.2419L19.9655 20.2749C21.2704 18.901 20.8904 16.6019 19.2575 15.662L18.5092 16.962ZM15.1 16.0642C15.4854 15.6584 16.086 15.5672 16.5987 15.8623L17.347 14.5623C16.2485 13.93 14.8861 14.1113 14.0124 15.0312L15.1 16.0642Z"
              fill="#ffffff"
            ></path>{" "}
          </g>
        </svg>
        Cuộc gọi
      </button>
    </div>
  );
};

export default Sidebar;