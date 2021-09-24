import React, { useState, useContext } from 'react';
import { useAuth } from './useAuth';
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
  const [newToken, setNewToken] = useState(true)
  const { token } = useAuth(newToken);

  return <TriviaContext.Provider value={{params, setParams, score, setScore, token, newToken}}>
      {children}
    </TriviaContext.Provider>
};

export const useTriviaContext = () => {
  return useContext(TriviaContext);
};
