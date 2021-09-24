import React, { useState, useEffect } from 'react'
import { useTriviaContext } from './context'

const API_ENDPOINT = `https://opentdb.com/` //? amount=10&category=9&difficulty=easy&type=multiple


export const useFetch = (query) => {
  const { params, token } = useTriviaContext();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(0)
  const [trivia, setTrivia] = useState([])

  const fetchTrivia = async (url) => {
    setLoading(true)
    console.log(url);
    try{
      const response = await fetch(url)
      const data = await response.json()
      setTrivia(data.results || data)
      setError(data.response_code)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    fetchTrivia(`${API_ENDPOINT}${query}`)
  }, [params, token])

  return {loading, error, trivia}
}