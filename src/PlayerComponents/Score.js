const Score = (props) => {
    
    return(
        <h1>
            Score: {props.currentScore} / {props.totalQuestions}
        </h1>
    )
}

export default Score