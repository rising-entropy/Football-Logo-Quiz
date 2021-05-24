const GameOver = (props) => {

    const whatToShow = <div>Game Over</div>

    if(parseInt(props.scorePercent) === 100)
    {

    }
    else if(parseInt(props.scorePercent) > 80)
    {

    }
    else if(parseInt(props.scorePercent) > 50)
    {

    }
    else if(parseInt(props.scorePercent) > 30)
    {

    }
    else
    {

    }

    return (
        <div>
            {whatToShow}
        </div>
    )

}

export default GameOver;