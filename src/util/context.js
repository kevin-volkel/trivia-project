import React, { useState, useContext } from 'react';
import { useFetch } from './useFetch';

const TriviaContext = React.createContext();

export const TriviaProvider = ({ children }) => {


  const [params, setParams] = useState({
    amount: 10,
    category: 1,
    difficulty: 'mixed',
    loop: 0
  });
  const [score, setScore] = useState(0)
  const [authToken, setAuthToken] = useState('')

  return <TriviaContext.Provider value={{params, setParams, score, setScore, authToken, setAuthToken}}>
      {children}
    </TriviaContext.Provider>
};

export const useTriviaContext = () => {
  return useContext(TriviaContext);
};
