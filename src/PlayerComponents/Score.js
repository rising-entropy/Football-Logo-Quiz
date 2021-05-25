const Score = (props) => {
    
    return(
        <div className="container container-fluid">
        <h1>
            Score: {props.currentScore} / {props.totalQuestions}
        </h1>
        </div>
    )
}

export default Score