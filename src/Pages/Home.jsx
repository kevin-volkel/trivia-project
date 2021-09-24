import React, { useEffect } from 'react';
import SingleQuestion from '../Components/SingleQuestion';
import Spinner from '../Components/Spinner';
import Error from '../Components/Error';
import { useTriviaContext } from '../util/context';
import { useFetch } from '../util/useFetch';
import { useAuth } from '../util/useAuth';

const Home = () => {
  const { params, score, setScore, setParams } = useTriviaContext();
  ;

  const { token } = useAuth();

  const { trivia, loading, error } = useFetch(
    `api.php?amount=${params.amount}&` +
      (params.difficulty !== 'mixed'
        ? `difficulty=${params.difficulty}&`
        : '') +
      (params.category !== 1 ? `category=${params.category}&` : '') 
      + `&token=${token}`
  );

  useEffect(() => {
    setScore(0);
  }, [params]);

  return (
    <div className="home">
      <h2>TRIVIA</h2>
      {loading ? (
        <Spinner />
      ) : error > 0 ? (
        <Error errorCode={error} />
      ) : (
        <>
          <div className="questions">
            {trivia.map((question, i) => (
              <SingleQuestion qNum = {i + 1} key={i} {...question} />
            ))}
          </div>
          <h2 className="score">
            Score: {score} / {params.amount}
          </h2>
          <div className="button-container">
            <button onClick={() => setParams({...params, loop: params.loop + 1})} className="refresh">
              Refresh
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
