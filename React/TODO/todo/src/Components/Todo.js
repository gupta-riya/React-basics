import React, {Component} from 'react';

export default class Todo extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            tasks:[{id:1,txt:'Task 1'},{id:2,txt:'Task 2'},{id:3,txt:'Task 3'}],
            currTask:''
        }
    }
    
    handleChange = (e) =>{
        let val = e.target.value;
        console.log(val);
        this.setState({currTask:val})
    }
    
    
    render(){
        
        return(
            <div>

                <div className = 'input-container'>
                    <input  type = "text"  value = {this.state.currTask} onChange={this.handleChange}></input>
                    <button>Add</button>
                </div>
                <div className = 'class-list'>
                    <ul>
                        {
                            this.state.tasks.map(task=>(
                                <li>
                                    <h1>{task.txt}</h1>
                                    <button>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        )
    }
}
