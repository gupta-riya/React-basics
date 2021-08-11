import React,{Component} from 'react'
import {quizData} from './quizData'
import QuizComp from './QuizComp'
import './quiz.css';

export default class Quiz extends Component {

    render()
    {
        return (
        
            <>
               { quizData.map((quiz) => {
                   return <QuizComp key={quiz.qid} data = {quiz} />
                })}
            </>
        )
    }
   
    
}


