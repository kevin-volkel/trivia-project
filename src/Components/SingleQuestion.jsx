import React, { useState, useEffect } from 'react';
import { useTriviaContext } from '../util/context';
import { ImCross, ImCheck } from 'react-icons/im';

const SingleQuestion = ({
  question,
  correct_answer,
  incorrect_answers,
  type,
}) => {
  const [revealed, setRevealed] = useState(false);
  const [newAnswers, setNewAnswers] = useState([]);
  const { score, setScore } = useTriviaContext();

  const decode = (text) => {
    let txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
  };

  const scrambleAnswers = (answers) => {
    let randomOrder = [];
    if (type == 'multiple') {
      if (
        !isNaN(answers[0]) &&
        !isNaN(answers[1]) &&
        !isNaN(answers[2]) &&
        !isNaN(answers[3])
      ) {
        randomOrder = answers.sort((a, b) => b - a);
      }
      randomOrder = answers.sort(() => Math.random() - 0.5);
    } else {
      randomOrder = ['True', 'False'];
    }
    return randomOrder.map((answer) => {
      return {
        text: answer,
        correct: answer === correct_answer,
      };
    });
  };

  useEffect(() => {
    setNewAnswers(scrambleAnswers([correct_answer, ...incorrect_answers]));
  }, []);

  const answerQuestion = (e) => {
    console.log(e.target);
    setRevealed(true);
    if (
      e.target.classList.contains('correct') &&
      !e.target.classList.contains('revealed')
    ) {
      setScore(score + 1);
    }
    console.log(score);
  };

  return (
    <div className="single-question">
      <h4 className="question">{decode(question)}</h4>
      {newAnswers.map((answer, i) => {
        return (
          <p
            key={i}
            className={`answer ${answer.correct ? 'correct' : ''} ${
              revealed ? 'revealed' : ''
            }`}
            onClick={answerQuestion}
          >
            {decode(answer.text)}
          </p>
        );
      })}
    </div>
  );
};

export default SingleQuestion;
