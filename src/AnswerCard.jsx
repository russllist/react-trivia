import { useState } from 'react';

function Card({ answer, correct }) {
  const [content, setContent] = useState(answer);
  const [tileColor, setTileColor] = useState('lightblue');

  function handleClick() {
    if (answer === correct) {
      setContent('Correct!');
      setTileColor('green');
    } else {
      setContent('Wrongo!');
      setTileColor('red');
    }
  }

  return (
    <>
      <div
        className="answercard"
        onClick={handleClick}
        style={{
          backgroundColor: tileColor,
        }}
      >
        <p>{content}</p>
      </div>
    </>
  );
}

export default Card;
