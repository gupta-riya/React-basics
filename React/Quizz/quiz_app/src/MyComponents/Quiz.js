import React,{Component} from 'react'
import {quizData} from './quizData'
import QuizComp from './QuizComp'
import './quiz.css';
import DisplayScore from './DisplayScore'

export default class Quiz extends Component {


    
    state = {

        arr : Array(quizData.length).fill(0),
        score : 0,
        showScore: false,
        currPage : 1

    }

    

   computeSelected = (qid,answer,correct) =>{

       
       if(answer === correct)
       {
          
           if(this.state.arr[qid-1] === 0)
           {
               let temp = [...this.state.arr];
               temp[qid-1] = 1;
                this.setState({
                    score : this.state.score + 1,
                    arr : temp
                }) 
               
           }
       }
       else
       {
           if(this.state.arr[qid-1] === 1)
           {
                let temp = [...this.state.arr];
                temp[qid-1] = 0;
                this.setState({
                    score : this.state.score - 1,
                    arr : temp
                }) 
           }
           
       }
        // console.log(this.state.score);

   }


   dispScore = () => {

       this.setState({
           showScore: true
       })


   }

   nextPage = () => {
       this.setState({
           currPage : this.state.currPage + 1
       })
   }


    render()
    {

        let limit = 3;
        let startIndex =  (this.state.currPage-1)*limit;
        let endIndex = startIndex + limit ;
        let totalPages = this.state.arr.length/limit;
        const currData = quizData.slice(startIndex,endIndex);
        
        return (
        
           <>
               <div>
              
                   {
                   
                        this.state.showScore === false && 
                            (currData.map((quiz) => (
                            <QuizComp 
                                key={quiz.qid} 
                                data = {quiz} 
                                selected = {(answer) => this.computeSelected(quiz.qid,answer,quiz.aid)}/>
                            ) 
                            ))
           
                    }
                  
                      {
                      (this.state.showScore === true) && 
                      (<DisplayScore score = {this.state.score} total = {this.state.arr.length}/>)
                     }
                    
            </div>

            <div>

                     {
                         (this.state.currPage!==totalPages) && <button className="submit-btn" onClick = {this.nextPage} >Next</button>
                     }
                     {
                         (this.state.currPage===totalPages && this.state.showScore === false ) ? <button className="submit-btn" onClick = {this.dispScore} >Submit</button>: null
                     }
            </div>
                
                </>
                

            
        )
    }
   
    
}


