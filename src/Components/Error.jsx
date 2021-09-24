import React from "react";
import { useTriviaContext } from "../util/context";
import { useAuth } from "../util/useAuth";
import { Link } from "react-router-dom";

const Error = ({ errorCode }) => {
  const { tokensUsed, setTokensUsed } = useTriviaContext();

  return (
    <div className="error">
      {errorCode === 1 ? (
        <h1>
          Not enough questions match your settings. Please change your settings.
        </h1>
      ) : errorCode === 3 ? (
        <h1>Token not found</h1>
      ) : errorCode === 4 ? (
        <>
          <h1>No new questions left. Refresh selections or change settings</h1>
          <div className="button-container">
            <button
            className = "refresh"
            to = "/"
              onClick={() => {
                setTokensUsed(tokensUsed + 1);
              }}
            >
              Refresh
            </button>
          </div>
        </>
      ) : (
        <h1>My bad</h1>
      )}
    </div>
  );
};

export default Error;
