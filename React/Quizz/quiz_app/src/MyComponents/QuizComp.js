
import React,{Component} from 'react'
import './quizComp.css'

export default class QuizComp extends Component
{
    // state = {

    //     data : this.props.data
    // }

   


    render()
    {

        const data = this.props.data;

        return(
            <>
                <div className = "ques-container">
                    <p className = "question"><span>{'Q' + data.qid + '. '}</span>{data.question}</p>
                    {
                        data.options.map((opt) => {
                            return (
                                <div className = "option-container">
                                    <span>{opt.oid + '. '}</span>
                                    <button className="opt-button">{opt.value}</button>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        )
    }













}