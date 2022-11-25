import React from "react";

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const SubmitUrlForm: React.FC<Props> = ({ handleSubmit, loading }) => {
  return (
    <div className="container font-sans rounded text-center flex items-center justify-center h-screen flex-col">
      <h2 className="font-bold px-0 mb-4 text-4xl my-2 md:text-7xl md:mb-4">
        SEO Spider <span className="fa fa-spider" />
      </h2>
      <h3 className="md:font-bold text-center text-gray-600 text-base md:text-xl">
        Identify your on-page SEO mistakes
      </h3>
      <div className="w-full text-center pt-4">
        <form onSubmit={handleSubmit}>
          <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
            <input
              name="website_url"
              disabled={loading}
              type="url"
              required
              placeholder="http://example.com"
              className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline outline-green-500"
            />
            <button
              disabled={loading}
              type="submit"
              className="flex-1 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-3 rounded shadow hover:bg-green-400"
            >
              <span className="fa fa-search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitUrlForm;
