import Score from './Score'
import QuestionAnswer from './QuestionAnswer'
import {useState} from 'react'
import GameOver from './GameOver'


let questions = require('../questions/PlayerQuestions.json');

const shuffle = (array)=> {
    let currentIndex = array.length,
      temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

questions = shuffle(questions);

for(let question of questions)
{
    question.options = shuffle(question.options)
}

const PlayerGame = (props) => {

    const [questionNumber, setQuestionNumber] = useState(0)
    const[scorePercent, setScorePercent] = useState('')
    const[gameOver, setGameOver] = useState(false)

    const correctAnswer = () => {
        setQuestionNumber(prev => {

            if((prev+1) === questions.length)
            {
                setScorePercent(100)
                setGameOver(true)
                return;
            }

            return prev + 1
        })
    }

    const wrongAnswer = () => {
        setScorePercent(parseInt((questionNumber*100)/questions.length))
        setGameOver(true)
    }

    return(
        <div>
        { !gameOver ?
            <div className="container container-fluid">
                <Score totalQuestions={questions.length} currentScore={questionNumber}/>
                <QuestionAnswer questionInstance={questions[questionNumber]} correctAnswer={correctAnswer} wrongAnswer={wrongAnswer}/>
            </div>
        : <GameOver scorePercent={scorePercent} score={questionNumber} questionCount={questions.length}/>
        }
        </div>
    )

}

export default PlayerGame