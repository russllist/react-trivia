import { useState } from 'react';
import Card from './AnswerCard';

function SplashScreen({ handleClickBegin }) {
  function handleClick() {
    handleClickBegin('game');
  }

  return (
    <div className="gameArea">
      <h3>Test your knowledge in this multiple choice quiz!</h3>
      <button onClick={handleClick}>Begin</button>
    </div>
  );
}

function GameOver({ score, total }) {
  return (
    <>
      <div className="gameArea">
        <h2>Game Over!</h2>
        <p className="counter">
          You scored {score} out of {total}
        </p>
      </div>
    </>
  );
}

function Game({ questions }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const [screen, setScreen] = useState('splash');

  function changeScreen(newScreen) {
    setScreen(newScreen);
  }

  function handleCorrectClick() {
    setScore(score + 1);
  }

  function handleClickNext() {
    if (questionNum < questions.length - 1) {
      setQuestionNum(questionNum + 1);
    } else {
      setScreen('gameOver');
    }
  }

  function handleClickPrev() {
    if (questionNum > 0) {
      setQuestionNum(questionNum - 1);
    }
  }

  return (
    <>
      {screen == 'splash' && <SplashScreen handleClickBegin={changeScreen} />}
      {screen == 'game' && (
        <div className="gameArea">
          <div>
            <h3 className="question">{questions[questionNum].question}</h3>
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
          <div className="counter">Score: {score}</div>
        </div>
      )}
      {screen == 'gameOver' && (
        <GameOver score={score} total={questions.length} />
      )}
    </>
  );
}

export default Game;
