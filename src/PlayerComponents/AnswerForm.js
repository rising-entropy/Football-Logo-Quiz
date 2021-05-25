const AnswerForm = (props) => {


    const chosenOptionHandler = (event) => {
        const chosenOption = event.target.value;
        if(chosenOption === props.answer)
        {
            props.correctAnswer()
        }
        else
        {
            props.wrongAnswer()
        }
    }


    return(
        <div>
            <button onClick={chosenOptionHandler} value={props.options[0]}>{props.options[0]}</button><br/>
            <button onClick={chosenOptionHandler} value={props.options[1]}>{props.options[1]}</button><br/>
            <button onClick={chosenOptionHandler} value={props.options[2]}>{props.options[2]}</button><br/>
            <button onClick={chosenOptionHandler} value={props.options[3]}>{props.options[3]}</button><br/>
        </div>
    )
}

export default AnswerForm;