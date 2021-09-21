import React, { useState, useContext } from 'react';
import { useFetch } from './useFetch';

const TriviaContext = React.createContext();

export const TriviaProvider = ({ children }) => {
  const [params, setParams] = useState('amount=10');

  return <TriviaContext.Provider value={{params, setParams}}>
      {children}
    </TriviaContext.Provider>
};

export const useTriviaContext = () => {
  return useContext(TriviaContext);
};
