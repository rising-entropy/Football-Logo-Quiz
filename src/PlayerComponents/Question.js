const Question = (props) => {

    const imgLink = "/questionImages/PlayerImages/"+props.imageLink 

    return(
        <div className="container container-fluid">
            <img src={imgLink} alt="playerImage" style={{width: '30%'}}/>
            <br/><br/><br/>
            <h4>{props.fact}</h4>
        </div>
    )
}

export default Question;