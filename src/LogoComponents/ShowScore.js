import React from 'react'
import './LogoGame.css'

const ShowScore = (props) => {
    let whatToShow = <div>Game Over</div>
    let scorePercent = parseInt((props.score*100)/props.questions.length)
    if(parseInt(scorePercent) === 100)
    {
        whatToShow = <>
        <h3>Game Over</h3>
        <h4>Score: {props.score}</h4>
        <img src="https://media.giphy.com/media/TfS90uxi84zHpOpfjt/giphy.gif" alt="ucl" style={{borderRadius: '10px'}} /><br/><br/><br/>
        <h5>You crazy son of a bitch you did it!</h5>
        </>
        return (
            <div>
                {whatToShow}
            </div>
        )
    }
    else if(parseInt(scorePercent) >=80 && parseInt(scorePercent) <=100)
    {
        whatToShow = <>
        <h3>Game Over</h3>
        <h4>Score: {props.score}</h4>
        <img src="https://media.giphy.com/media/QZb0IeW05gEKmbW7Ym/giphy.gif" alt="pep" style={{borderRadius: '10px'}} /><br/><br/><br/>
        <h5>Almost there.</h5>
        </>
        return (
            <div>
                {whatToShow}
            </div>
        )
    }
    else if(parseInt(scorePercent) >=50 && parseInt(scorePercent) <=80)
    {
        whatToShow = <>
        <h3>Game Over</h3>
        <h4>Score: {props.score}</h4>
        <img src="https://media.giphy.com/media/QxMb25h7RhitNWgyy0/giphy.gif" alt="mount" style={{borderRadius: '10px'}} /><br/><br/><br/>
        <h5>You're gonna make it. Keep rocking.</h5>
        </>
        return (
            <div>
                {whatToShow}
            </div>
        )
    }
    else if(parseInt(scorePercent) >=30 && parseInt(scorePercent) <=50)
    {
        whatToShow = <>
        <h3>Game Over</h3>
        <h4>Score: {props.score}</h4>
        <img src="https://media.giphy.com/media/50AGaCNv28UFUYA9DS/giphy.gif" alt="goal" style={{borderRadius: '10px'}} /><br/><br/><br/>
        <h5>Keep Going. You're going great.</h5>
        </>
        return (
            <div>
                {whatToShow}
            </div>
        )
    }
    else if(parseInt(scorePercent) === 0)
    {
        whatToShow = <>
        <h3>Game Over</h3>
        <h4>Score: {props.score}</h4>
        <img src="https://media.giphy.com/media/b4ogmP84ef8y5O6k9a/giphy.gif" alt="harry maguire" style={{borderRadius: '10px'}} /><br/><br/><br/>
        <h5>You're nothing more than a Fridge. Do better.</h5>
        </>
        return (
            <div>
                {whatToShow}
            </div>
        )
    }
    else
    {
        whatToShow = <>
        <h3>Game Over</h3>
        <h4>Score: {props.score}</h4>
        <img src="https://media.giphy.com/media/l0HlUxcWRsqROFYuk/giphy.gif" alt="jose" style={{borderRadius: '10px'}} /><br/><br/><br/>
        <h5>Join the fandom fam.</h5>
        </>
        return (
            <div>
                {whatToShow}
            </div>
        )
    }

}
   

export default ShowScore
