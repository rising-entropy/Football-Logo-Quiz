import Question from './Question'
import AnswerForm from './AnswerForm'


const QuestionAnswer = (props) => {

    const theQuestion = props.questionInstance;

    const correctAns = () => {
        props.correctAnswer()
    }
    const wrongAns = () => {
        props.wrongAnswer()
    }

    return(
        <div className="container container-fluid">
            <Question imageLink={theQuestion.imageLink} fact={theQuestion.fact}/>
            <AnswerForm options={theQuestion.options} answer={theQuestion.answer} correctAnswer={correctAns} wrongAnswer={wrongAns}/>
        </div>
    )
}

export default QuestionAnswer;