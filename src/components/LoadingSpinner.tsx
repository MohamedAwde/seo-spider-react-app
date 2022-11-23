import React from "react";

const LoadingSpinner = () => {
  return (
    <div className=" my-4">
      <div className=" flex justify-center items-center my-2">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
      <h4 className="text-center">Analyzing your website</h4>
    </div>
  );
};

export default LoadingSpinner;
