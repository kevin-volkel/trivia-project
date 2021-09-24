import React, { useState, useEffect } from 'react'


export const useAuth = (isReset = false) => {
  const [token, setToken] = useState('')
  const [tokensUsed, setTokensUsed] = useState(0)
  
  // if(isReset){
  //   setTokensUsed(tokensUsed + 1)
  //   setToken('')
  // }

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