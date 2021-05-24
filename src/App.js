import React, {Component, useState} from 'react'
import './App.css';
import PlayerGame from './PlayerComponents/PlayerGame'

//Notes:
// Handle scores in their own Component, share 
// Send back GameOver and HowMuchScored function handlers to conditionally render game over page.

//https://drive.google.com/drive/folders/1iB8i2Dv9mdi0cDikz6kYfBcLqwy02nDq?usp=sharing - Upload files here



const App = () => {

  //start progress over
  const [gameState, setGameState] = useState('start')
  const [logoGame, setLogoGame] = useState(false)
  const [playerGame, setPlayerGame] = useState(false)

  const logoQuizHandler = () => {
    setLogoGame(true)
    setGameState('progress')
  }

  const playerQuizHandler = () => {
    setPlayerGame(true)
    setGameState('progress')
  }



  return (
    <div>
      {
        gameState === 'start' && (
        <>
        Welcome to Football Quiz<br/>
        <button onClick={logoQuizHandler}>Logo Quiz</button><br/>
        <button onClick={playerQuizHandler}>Player Quiz</button>
        </>
        )
      }
      {
        (gameState === 'progress' && logoGame) && (
          <h2>I wanna play logo</h2>
        ) 
      }
      {
        (gameState === 'progress' && playerGame) && (
          <PlayerGame/>
        ) 
      }
      {
        (gameState === 'over') && (
          <h2>Game Over</h2>
        ) 
      }
    </div>
  );
}

export default App;