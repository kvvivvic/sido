import React from "react";
import "loading.css";
import "../../accet/images/spinner2.gif";

const Loading = () => {
  return (
    <div className=" absolute w-full h-full top-0 left-0 bg-spinner z-50 flex flex-col items-center justify-center">
      <span className=" font-roboto text-center">등록 중 입니다...</span>
    </div>
  );
};

export default Loading;
