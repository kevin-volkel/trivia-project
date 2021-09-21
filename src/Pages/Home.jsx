import React, { useState } from 'react'
import SingleQuestion from '../Components/SingleQuestion';
import { useTriviaContext } from '../util/context'
import { useFetch } from '../util/useFetch';


const Home = () => {
  const { params } = useTriviaContext();
  const { trivia, loading, error } = useFetch(params);

  return (
    <div className = "home">
      {console.log(trivia)}
      <h2>Home</h2>
      <div className="questions">
        {trivia.map( (question) => <SingleQuestion {...question}/>)}
      </div>
    </div>
  )
}

export default Home
