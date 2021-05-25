import React, {Component, useState} from 'react'
import './App.css';
import PlayerGame from './PlayerComponents/PlayerGame'
import LogoGame from './LogoComponents/LogoGame'

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
          <LogoGame/>
        ) 
      }
      {
        (gameState === 'progress' && playerGame) && (
          <PlayerGame/>
        ) 
      }
    </div>
  );
}

export default App;