import { useState } from 'react';

function SplashScreen({ handleClickBegin }) {
  function handleClick() {
    handleClickBegin('game');
  }

  return (
    <div>
      <h3>Test your knowledge in this multiple choice quiz!</h3>
      <button onClick={handleClick}>Begin</button>
    </div>
  );
}

export default SplashScreen;
