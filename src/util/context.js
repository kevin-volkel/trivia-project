import React, { useState, useContext } from 'react'
import { useFetch } from './useFetch'

const TriviaContext = React.createContext()

export const TriviaProvider = ({children}) => {
  const [params, setParams] = useState('amount=10')
  const {trivia, loading, error} = useFetch(params)

  return <TriviaContext.Provider value = {params, setParams, trivia, loading, error}>
    {children}
  </TriviaContext.Provider>
}

export const useTriviaContext = () => {
  return useContext(TriviaContext)
}