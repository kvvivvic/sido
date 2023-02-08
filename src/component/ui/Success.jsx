import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col  absolute w-full h-full top-0 left-0 bg-spinner z-50">
      <div className="w-full  absolute top-1/3 flex flex-col justify-center items-center">
        <p className="text-2xl font-roboto">등록이 완료되었습니다 ✅</p>
        <div className="flex">
          <Link to="/">
            <button className="border-indigo-400 h-12 w-36 rounded-lg mt-8 text-white inline-block font-bold bg-indigo-400 mx-1">홈으로</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
