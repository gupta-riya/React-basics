import React from 'react'
import './displayScore.css'


const DisplayScore = (props) =>
{
       
   return(         
    
        <h1 className = "score-board">You Scored {props.score}/{props.total} !!!</h1>
    
   )
}
            
       
export default DisplayScore
