import React from "react";

import Spinner from "../../accet/images/spinner2.gif";

const Loading = () => {
  return (
    <div className=" absolute w-full h-full top-0 left-0 bg-spinner z-50 flex flex-col items-center justify-center">
      <img src={Spinner} alt="로딩중" width="5%" />
    </div>
  );
};

export default Loading;
