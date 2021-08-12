
import React from 'react'

import './quizComp.css'

const QuizComp = (props) =>
{
  
        const data = props.data;
        const handleSelected = (e) => {

                       
            let arr = [...e.target.parentNode.parentNode.children];
            arr = arr.slice(1,5);
            for(let i = 0 ; i < arr.length ; i++)
            {
                arr[i].children[0].classList.remove("active");
            }
            
            arr[e.target.getAttribute("id")-1].children[0].classList.add("active");
           
            

        }

        return(
            <>
                <div className = "ques-container">
                    <p className = "question"><span>{'Q' + data.qid + '. '}</span>{data.question}</p>
                    {
                        
                        data.options.map((opt) => {
                            return (
                                <div className = "option-container">
                                    
                                    <button id = {opt.oid} className="opt-button" 
                                        onClick = {(e)=>{
                                                        
                                                        handleSelected(e);                                                        
                                                        props.selected(opt.oid);
                                                   }}>
                                        {opt.value}</button>

                                </div>
                            );
                        })
                        
                    }
                </div>
            </>
        )
}


export default QuizComp










