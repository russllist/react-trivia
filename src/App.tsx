import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'









let trivia = {answers:['answer1aslkdjghas','answer2','answer3','answer4']}


function Card({answer}) {
  return(
    <>
    <div className='answercard'>
      <p>{answer}</p>
    </div>

    </>
  )
}


function Game(){
  return(
    <>
      <div className='question'>
        This is where the question goes
      </div>
      <div>
      {trivia.answers.map((answer) =>
      <Card answer={answer} />
      )}
      </div>
    </>
  )
}

function App() {
  
  return (
    <>
      
      {/* Component 1 - Main App
          Title stays on page whole time
        Component 2
          Trivia container with question
        Component 3
          Answer cards contained within component 2 */}
      <div className='gameTitle'>
        This is where the heading goes
      </div>
      <Game />
    </>
  )
}

export default App
