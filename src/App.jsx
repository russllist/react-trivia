import { useState } from 'react';
import './App.css';
import Game from './Game.jsx';
import SplashScreen from './SplashScreen.jsx';

let triviaQuestions = [
  {
    question: 'What is the capital city of Australia?',
    answers: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correct: 'Canberra',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correct: 'Mars',
  },
  {
    question: 'What is the largest mammal in the world?',
    answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'],
    correct: 'Blue Whale',
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ['Oxygen', 'Gold', 'Silver', 'Osmium'],
    correct: 'Oxygen',
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      'William Shakespeare',
      'Charles Dickens',
      'Mark Twain',
      'Jane Austen',
    ],
    correct: 'William Shakespeare',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    answers: ['China', 'Japan', 'Thailand', 'South Korea'],
    correct: 'Japan',
  },
  {
    question: 'How many continents are there in the world?',
    answers: ['5', '6', '7', '8'],
    correct: '7',
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    answers: ['Gold', 'Iron', 'Diamond', 'Platinum'],
    correct: 'Diamond',
  },
  {
    question: 'In which year did the Titanic sink?',
    answers: ['1910', '1912', '1920', '1922'],
    correct: '1912',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
    correct: 'Jupiter',
  },
  {
    question:
      'Which organ in the human body is primarily responsible for filtering blood?',
    answers: ['Liver', 'Heart', 'Kidney', 'Lungs'],
    correct: 'Kidney',
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: [
      'Vincent van Gogh',
      'Leonardo da Vinci',
      'Pablo Picasso',
      'Claude Monet',
    ],
    correct: 'Leonardo da Vinci',
  },
  {
    question: 'What is the smallest prime number?',
    answers: ['0', '1', '2', '3'],
    correct: '2',
  },
  {
    question: 'Which country hosted the 2016 Summer Olympics?',
    answers: ['China', 'Brazil', 'UK', 'Russia'],
    correct: 'Brazil',
  },
  {
    question: 'What is the most widely spoken language in the world?',
    answers: ['Spanish', 'English', 'Hindi', 'Mandarin Chinese'],
    correct: 'Mandarin Chinese',
  },
  {
    question: "What does the 'HTTP' stand for in a website address?",
    answers: [
      'HyperText Transfer Protocol',
      'HyperText Transmission Program',
      'High Transfer Text Protocol',
      'Hyper Tool Transfer Program',
    ],
    correct: 'HyperText Transfer Protocol',
  },
  {
    question: 'Which is the longest river in the world?',
    answers: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
    correct: 'Nile',
  },
  {
    question: 'How many bones are there in the human body?',
    answers: ['206', '205', '210', '208'],
    correct: '206',
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    answers: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'],
    correct: 'Nitrogen',
  },
  {
    question: 'What is the main ingredient in guacamole?',
    answers: ['Tomato', 'Lettuce', 'Avocado', 'Pepper'],
    correct: 'Avocado',
  },
];

function GameOver({ score }) {
  return (
    <>
      <div>
        <h2>Game Over!</h2>
        <p>You scored {score} out of number questions</p>
      </div>
    </>
  );
}

function App() {
  const [screen, setScreen] = useState('splash');

  function changeScreen(newScreen) {
    setScreen(newScreen);
  }

  return (
    <>
      <div className="gameTitle">
        <h2>Totally Trivial Trivia</h2>
      </div>
      <div>
        {screen == 'splash' && <SplashScreen handleClickBegin={changeScreen} />}
        {screen == 'game' && <Game questions={triviaQuestions} />}
        {screen == 'gameOver' && <GameOver score={10} />}
      </div>
    </>
  );
}

export default App;
