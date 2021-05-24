import Question from './Question'
import AnswerForm from './AnswerForm'


const QuestionAnswer = (props) => {

    const theQuestion = props.questionInstance;

    const correctAns = () => {
        props.correctAnswer()
    }

    return(
        <div>
            <Question imageLink={theQuestion.imageLink} fact={theQuestion.fact}/>
            <AnswerForm options={theQuestion.options} answer={theQuestion.answer} correctAnswer={correctAns}/>
        </div>
    )

}

export default QuestionAnswer;