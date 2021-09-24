import React, { useState, useContext } from 'react';

const TriviaContext = React.createContext();

export const TriviaProvider = ({ children }) => {


  const [params, setParams] = useState({
    amount: 10,
    category: 1,
    difficulty: 'mixed',
    loop: 0
  });
  const [score, setScore] = useState(0)
  const [tokensUsed, setTokensUsed] = useState(0)

  return <TriviaContext.Provider value={{params, setParams, score, setScore, tokensUsed, setTokensUsed}}>
      {children}
    </TriviaContext.Provider>
};

export const useTriviaContext = () => {
  return useContext(TriviaContext);
};
