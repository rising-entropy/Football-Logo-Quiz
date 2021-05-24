import React, {Component, useState} from 'react'
import './App.css';
import PlayerGame from './PlayerComponents/PlayerGame'
import GameOver from './PlayerComponents/GameOver'

//Notes:
// Handle scores in their own Component, share 
// Send back GameOver and HowMuchScored function handlers to conditionally render game over page.

//https://drive.google.com/drive/folders/1iB8i2Dv9mdi0cDikz6kYfBcLqwy02nDq?usp=sharing - Upload files here



const App = () => {

  //start progress over
  const [gameState, setGameState] = useState('start')
  const [logoGame, setLogoGame] = useState(false)
  const [playerGame, setPlayerGame] = useState(false)
  const[scorePercent, setScorePercent] = useState('')

  const getScorePercent = (value) => {
    setScorePercent(value)
  }

  const logoQuizHandler = () => {
    setLogoGame(true)
    setGameState('progress')
  }

  const gameOverChangeHandler = () => {
    setGameState('over')
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
          <PlayerGame getScorePercent={getScorePercent} gameOverChangeHandler={gameOverChangeHandler}/>
        ) 
      }
      {
        (gameState === 'over') && (
          <GameOver scorePercent={scorePercent}/>
        ) 
      }
    </div>
  );
}

export default App;