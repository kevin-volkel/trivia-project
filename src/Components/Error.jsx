import React from "react";
import { useTriviaContext } from "../util/context";
import { useAuth } from "../util/useAuth";

const Error = ({ errorCode }) => {

  const { newToken } = useTriviaContext();

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
          <h1>Token expired</h1>
        </>
      ) : (
        <h1>My bad</h1>
      )}
    </div>
  );
};

export default Error;
