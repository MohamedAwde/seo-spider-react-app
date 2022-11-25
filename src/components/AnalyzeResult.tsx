import React from "react";
import classnames from "classnames";

interface Props {
  result: {
    rating: string;
    header: string;
    description: string;
  };
}

const AnalyzeResult: React.FC<Props> = ({ result }) => {
  const { description, header, rating } = result;

  let theme;

  if (rating === "bad") {
    theme = "red";
  } else if (rating === "good") {
    theme = "orange";
  } else {
    theme = "green";
  }

  return (
    <div
      className={classnames(
        "p-5 w-full",
        { "bg-red-100": theme === "red" },
        { "bg-orange-100": theme === "orange" },
        { "bg-green-100": theme === "green" }
      )}
    >
      <div className="flex space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={classnames(
            "flex-none fill-current  h-4 w-4",
            { "text-red-500": theme === "red" },
            { "text-orange-500": theme === "orange" },
            { "text-green-500": theme === "green" }
          )}
        >
          {rating === "bad" ? (
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"></path>
          ) : rating === "good" ? (
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"></path>
          ) : (
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"></path>
          )}
        </svg>

        <div className="leading-tight flex flex-col space-y-2">
          <div
            className={classnames(
              "text-lg font-medium",
              {
                "text-red-700": theme === "red",
              },
              {
                "text-orange-700": theme === "orange",
              },
              {
                "text-green-700": theme === "green",
              }
            )}
          >
            {header}
          </div>
          <div
            className={classnames(
              "flex-1 leading-snug text-sm md:max-w-[70%] text-justify",
              {
                "text-red-600": theme === "red",
              },
              {
                "text-orange-600": theme === "orange",
              },
              {
                "text-green-600": theme === "green",
              }
            )}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeResult;
