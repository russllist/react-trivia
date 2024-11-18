import { useState } from 'react';
import Card from './AnswerCard';

function Game({ questions }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [maxQuestion, setMaxQuestion] = useState(0);
  const [score, setScore] = useState(0);

  function handleCorrectClick() {
    setScore(score + 1);
  }

  function handleClickNext() {
    if (questionNum < questions.length - 1) {
      setQuestionNum(questionNum + 1);
      setMaxQuestion(Math.max(questionNum, maxQuestion));
      console.log('current question: ', questionNum);
      console.log('max question: ', maxQuestion);
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
              addScore={handleCorrectClick}
            />
          ))}
        </div>
        <div>
          <button onClick={handleClickPrev}>Previous</button>
          <button onClick={handleClickNext}>Next</button>
        </div>
        <div className="counter">
          <p>Score: {score}</p>
        </div>
      </div>
    </>
  );
}

export default Game;
