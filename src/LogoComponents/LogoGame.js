import React, { useState } from 'react'
import ShowScore from './ShowScore'
import './LogoGame.css'
const questions = require('../questions/LogoQuestions.json');

function LogoGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const clickHandler = (isCorrect) => {
    if(isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      			setShowScore(true);
    }
  }


  return (
    
   <div className="quiz">
     {showScore ? (
				<ShowScore score={score} questions={questions}/>
			) : (
        <>
     <h2>Question {currentQuestion + 1}/{questions.length}</h2>

     <section>

      <div className="question" key={questions[currentQuestion].id}><img src={questions[currentQuestion].question} alt="" /></div>
      
      
      <div className="options">
        {questions[currentQuestion].options.map((option) => {
          return(
            <button  onClick = {() => clickHandler(option.isCorrect)}>{option.opt}</button>
          );
        })}
      </div>
     </section>
     </>
      )}
   </div>
      
  );
   
}

export default LogoGame
