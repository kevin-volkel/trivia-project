import React, { useState } from 'react';

const SingleQuestion = ({ question, correct_answer, incorrect_answers }) => {

  const decode = (text) => {
    let txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
  }

  const scrambleAnswers = (answers) => {
    const randomOrder = [];
    while(true){
      let randy = Math.floor(Math.random * 3)
      // if()
    }
  }

  return (
    <div className = "single-question">
      <h4 className="question">{decode(question)}</h4>
      <p className="answer">{decode(correct_answer)}</p>
      {incorrect_answers.map((answer) => (
        <p className="answer">{decode(answer)}</p>
      ))}
    </div>
  );
};

export default SingleQuestion;
