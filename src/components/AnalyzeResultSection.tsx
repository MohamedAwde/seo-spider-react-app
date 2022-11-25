import React from "react";
import AnalyzeResult from "./AnalyzeResult";
import HeaderAlert from "./HeaderAlert";
import LoadingSpinner from "./LoadingSpinner";

const AnalyzeResultSection: React.FC<{
  hideErroMsg: () => void;
  data: [];
  loading: boolean;
  error: string;
}> = ({ error, loading, data, hideErroMsg }) => {
  if (error) return <HeaderAlert msg={error} hideMsg={hideErroMsg} />;
  if (loading) return <LoadingSpinner />;
  if (data.length === 0) return null;

  return (
    <>
      <h3 className="py-10 text-xl pb-5 font-bold">Analysis results</h3>
      <div className="space-y-3 mb-10">
        {data.length > 0
          ? data.map((result, index) => (
              <AnalyzeResult key={index} result={result} />
            ))
          : null}
      </div>
    </>
  );
};

export default AnalyzeResultSection;
