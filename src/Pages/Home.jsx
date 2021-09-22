import React, { useState, useEffect } from 'react'
import SingleQuestion from '../Components/SingleQuestion';
import { useTriviaContext } from '../util/context'
import { useFetch } from '../util/useFetch';


const Home = () => {
  const { params, score, setScore, setParams } = useTriviaContext();
  const { trivia, loading, error } = useFetch(params);

  useEffect(() => {
    setScore(0)
  }, [params])

  return (
    <div className = "home">
      {console.log(trivia)}
      <h2>Home</h2>
      <div className="questions">
        {trivia.map( (question, i) => <SingleQuestion key = {i} {...question}/>)}
      </div>
      <h2 className = "score">Score: {score} / {params.split('&')[0].split('amount=')[1]}</h2>
      <button onClick = { () => setParams(params + "&")}>Refresh</button>
    </div>
  )
}

export default Home
