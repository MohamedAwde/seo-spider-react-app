import React, { useEffect, useRef } from "react";

const LoadingSpinner = () => {
  const loadingResults = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadingResults.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="flex items-center justify-center h-screen"
      ref={loadingResults}
    >
      <div className=" my-4">
        <div className=" flex justify-center items-center my-2">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
        <h4 className="text-center">Analyzing your website</h4>
      </div>
    </div>
  );
};

export default LoadingSpinner;
