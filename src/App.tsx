import { useState } from "react";
import axios from "axios";
import SubmitUrlForm from "./components/SubmitUrlForm";
import AnalyzeResultSection from "./components/AnalyzeResultSection";

interface StateTypes {
  data: [];
  loading: boolean;
  error: string;
}

function App() {
  const [state, setState] = useState<StateTypes>({
    data: [],
    loading: false,
    error: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = event.currentTarget.website_url.value;
    setState({ ...state, loading: true, error: "" });

    try {
      const { data } = await axios.post(
        "https://seo-spider-nodejs-production.up.railway.app/",
        { url }
      );
      setState({ ...state, loading: false, data, error: "" });
    } catch (err: any) {
      let error = "";
      if (err.response)
        error =
          "Error the server is offline, please try again after a few seconds";
      else if (err.request)
        error =
          "Error while connecting to the server, please try again after a few seconds";
      else
        error =
          "Error something went wrong, please try again after a few seconds";
      setState({ ...state, error, loading: false });
    }
  };

  const handleHideErroMsg = () => setState({ ...state, error: "" });

  return (
    <div className="bg-gradient-to-b from-gray-100">
      <div className="px-4 md:px-0 max-w-6xl mx-auto">
        <SubmitUrlForm handleSubmit={handleSubmit} loading={state.loading} />
        <AnalyzeResultSection {...state} hideErroMsg={handleHideErroMsg} />
      </div>
    </div>
  );
}

export default App;
