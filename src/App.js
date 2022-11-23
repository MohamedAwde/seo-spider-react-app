import { useState } from "react";
import AnalyzeResult from "./components/AnalyzeResult";
import LoadingSpinner from "./components/LoadingSpinner";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const url = event.target.website_url.value;
    axios
      .post("http://localhost:8080/", { url })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="container px-4 md:px-0 max-w-6xl mx-auto">
      <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
        <h2 className="font-bold break-normal text-5xl my-2 md:text-7xl md:mb-4">
          SEO Spider <span className="fa fa-spider" />
        </h2>
        <h3 className="font-bold text-gray-600 text-base md:text-xl">
          identify your SEO mistakes and optimize your web page contents for a
          better search engine ranking
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
                className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
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
      {!loading ? (
        <h3 className="py-10 text-xl pb-5 font-bold">Analysis results</h3>
      ) : null}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="space-y-3 mb-10">
          {data ? (
            data.map((result, index) => (
              <AnalyzeResult key={index} result={result} />
            ))
          ) : (
            <>error</>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
