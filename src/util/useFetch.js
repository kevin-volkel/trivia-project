import React, { useState, useEffect } from 'react'
import { useTriviaContext } from './context'

const API_ENDPOINT = `https://opentdb.com/api.php?` //? amount=10&category=9&difficulty=easy&type=multiple

export const useFetch = (query) => {
  const { params } = useTriviaContext();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({showing: false, msg: ''})
  const [trivia, setTrivia] = useState([])

  const fetchTrivia = async (url) => {
    setLoading(true)
    console.log(url);
    try{
      const response = await fetch(url)
      const data = await response.json()
      setTrivia(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    fetchTrivia(`${API_ENDPOINT}${query}`)
  }, [params])

  return {loading, error, trivia}
}