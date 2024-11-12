import { useState } from 'react';
import Card from './AnswerCard';

function GameBoard({ questions }) {
  const [questionNum, setQuestionNum] = useState(0);

  function handleClickNext() {
    if (questionNum < questions.length - 1) {
      setQuestionNum(questionNum + 1);
    }
  }

  function handleClickPrev() {
    if (questionNum > 0) {
      setQuestionNum(questionNum - 1);
    }
  }

  return (
    <>
      <div className="game">
        <div className="question">
          <h3>{questions[questionNum].question}</h3>
        </div>
        <div>
          {questions[questionNum].answers.map((answer) => (
            <Card
              key={answer}
              answer={answer}
              correct={questions[questionNum].correct}
            />
          ))}
        </div>
        <div>
          <button onClick={handleClickPrev}>Previous</button>
          <button onClick={handleClickNext}>Next</button>
        </div>
      </div>
    </>
  );
}

export default GameBoard;
