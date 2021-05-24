import Score from './Score'
import QuestionAnswer from './QuestionAnswer'
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

const PlayerGame = () => {

    return(
        <>
        <Score totalQuestions={questions.length}/>
        <QuestionAnswer/>
        </>
    )

}

export default PlayerGame