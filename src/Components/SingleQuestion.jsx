import React, { useState, useEffect } from "react";
import { useTriviaContext } from "../util/context";
import { ImCross, ImCheckmark } from "react-icons/im";

const SingleQuestion = ({
  question,
  correct_answer,
  incorrect_answers,
  type,
  qNum,
}) => {
  const [revealed, setRevealed] = useState(false);
  const [newAnswers, setNewAnswers] = useState([]);
  const { score, setScore } = useTriviaContext();
  const [correct, setCorrect] = useState(false);
  const [size, setSize] = useState('')

  const decode = (text) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  };

  const scrambleAnswers = (answers) => {
    let randomOrder = [];
    if (type === "multiple") {
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
      randomOrder = ["True", "False"];
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
    checkSize()
    window.addEventListener("resize", checkSize)
  }, []);

  const checkSize = () => {
    if (window.innerWidth < 768) {
      setSize("small");
    } else {
      setSize("large");
    }
  }

  const answerQuestion = (e) => {
    setRevealed(true);
    if (e.target.innerHTML === correct_answer && !revealed) {
      setScore(score + 1);
      setCorrect(true);
    }
  };

  return (
    <div
      className={`single-question ${
        !revealed ? "" : correct ? "correct" : "wrong"
      }`}
    >
      <div className="question">
        <div className="question-text">
          <div className="question-question">{decode(question)}</div>
          {size === "large" && <div className="question-number">#{qNum}</div>}
        </div>
        {!revealed ? (
          ""
        ) : correct && revealed ? (
          <ImCheckmark className="check" />
        ) : (
          <ImCross className="cross" />
        )}
      </div>
      {newAnswers.map((answer, i) => {
        return (
          <p
            key={i}
            className={`answer ${
              answer.correct && revealed ? "correct-answer" : ""
            } ${revealed ? "revealed" : ""}`}
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
