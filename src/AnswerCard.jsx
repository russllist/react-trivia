import { useState } from 'react';

function Card({ answer, correct, addScore }) {
  const [content, setContent] = useState(answer);
  const [tileColor, setTileColor] = useState('#FDFFFC');

  function handleClick() {
    if (answer == correct) {
      setContent('Correct!');
      setTileColor('#4CB944');
      addScore();
    } else {
      setContent('Wrongo!');
      setTileColor('#F06543');
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
