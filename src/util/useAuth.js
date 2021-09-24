import React, { useState, useEffect } from 'react'
import { useTriviaContext } from './context'


export const useAuth = () => {
  const { tokensUsed } = useTriviaContext();
  const [token, setToken] = useState('')

  const fetchToken = async () => {
    try{
      const response = await fetch('https://opentdb.com/api_token.php?command=request');
      const data = await response.json();
      setToken(data.token)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    fetchToken()
  }, [tokensUsed])

  return {token}
}