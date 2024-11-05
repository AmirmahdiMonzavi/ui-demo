import React from "react";

import Spinner from "../spinner";

const LoadingPage = () => {
  return (
    <div className="absolute left-1/2 top-1/2">
      <Spinner />
    </div>
  );
};

export default LoadingPage;
