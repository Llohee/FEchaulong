import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
      <svg
        className="animate-spin h-14 w-14 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V2.5a.5.5 0 00-1 0V4a8 8 0 00-8 8h2.5a.5.5 0 000-1H4z"
        ></path>
      </svg>
      <p className="text-xl text-white">Đang tải...</p>
    </div>
  );
};
export const ActionLoading = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
      <svg
        className="animate-spin h-4 w-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="#00000"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="#00000"
          d="M4 12a8 8 0 018-8V2.5a.5.5 0 00-1 0V4a8 8 0 00-8 8h2.5a.5.5 0 000-1H4z"
        ></path>
      </svg>
    </div>
  );
};
export default Loading;
