import React, { useState, useEffect } from 'react'

const API_ENDPOINT = `https://opentdb.com/api.php?` //? amount=10&category=9&difficulty=easy&type=multiple

export const useFetch = (params) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({showing: false, msg: ''})
  const [questions, setQuestions] = useState([])

  const fetchTrivia = async (url) => {
    setLoading(true)
    console.log(url);
    try{
      const response = await fetch(url)
      const data = await response.json()
      setQuestions(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    fetchTrivia(`${API_ENDPOINT}${params}`)
  })

  return {loading, error, questions}
}