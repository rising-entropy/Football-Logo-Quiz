const GameOver = (props) => {

    const whatToShow = <div>Game Over</div>

    if(parseInt(props.scorePercent) === 100)
    {
        whatToShow = <div>Game Over</div>
    }
    else if(parseInt(props.scorePercent) > 80)
    {
        whatToShow = <div>Game Over</div>
    }
    else if(parseInt(props.scorePercent) > 50)
    {
        whatToShow = <div>Game Over</div>
    }
    else if(parseInt(props.scorePercent) > 30)
    {
        whatToShow = <div>Game Over</div>
    }
    else
    {
        whatToShow = <div>Game Over</div>
    }

    return (
        <div>
            {whatToShow}
        </div>
    )

}

export default GameOver;