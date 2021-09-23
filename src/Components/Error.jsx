import React, { useState } from 'react';

const Error = ({ errorCode }) => {
  return (
    <div className = "error">
      {errorCode === 1 ? (
        <h1>
          Not enough questions match your settings. Please change your settings.
        </h1>
      ) : (
        <h1>My bad</h1>
      )}
    </div>
  );
};

export default Error;
