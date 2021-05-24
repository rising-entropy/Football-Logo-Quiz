const Question = (props) => {

    const imgLink = "/questionImages/PlayerImages/"+props.imageLink 

    return(
        <div>
            <img src={imgLink} alt="playerImage"/>
            <h4>{props.fact}</h4>
        </div>
    )
}

export default Question;