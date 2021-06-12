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
    
    // handles input value 
    handleChange = (e) =>{
        let val = e.target.value;
        this.setState({currTask:val})
    }
    
    // add task on submitting
    onSubmit = ()=>{
        let newTaskArr = [...this.state.tasks,{id:this.state.tasks.length+1,txt:this.state.currTask}]
        this.setState({tasks:newTaskArr,currTask:''});
    
    }

    // on deleting task
    onDelete = (id) =>
    {
        // will return all task not equal to that id
        let nta = this.state.tasks.filter(task=>{
            return task.id != id;
        })
        this.setState({tasks:nta});
        
    }
    
    render(){
        
        return(
            <div>

                <div className = 'input-container'>
                    <input  type = "text"  value = {this.state.currTask} onChange={this.handleChange}></input>
                    <button onClick = {this.onSubmit}>Add</button>
                </div>
                <div className = 'class-list'>
                    <ul>
                        {
                            this.state.tasks.map(task=>(
                                <li key = {task.id}>
                                    <h1>{task.txt}</h1>
                                    <button onClick = {()=>this.onDelete(task.id)}>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        )
    }
}
