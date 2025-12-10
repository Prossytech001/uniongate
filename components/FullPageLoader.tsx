import React from "react";
import CubeLoader from "./CubeLoader";

const FullPageLoader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <CubeLoader />
    </div>
  );
};

export default FullPageLoader;
