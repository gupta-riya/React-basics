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
            return task.id!==id;
        })
        this.setState({tasks:nta});
        
    }
    
    render(){
        
        return(
            <>
                <InputComponent value={this.state.currTask} onChange={this.handleChange} onSubmit = {this.onSubmit}/>
                <TaskListComponent tasks = {this.state.tasks} onDelete={this.onDelete}/>
            </>
        )
    }
}


// input component

class InputComponent extends Component{

    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            
            <div className = 'input-container'>
            <input  type = "text"  value = {this.props.value} onChange={this.props.onChange}></input>
            <button onClick = {this.props.onSubmit}>Add</button>
            </div>
        )
    }
}

class TaskListComponent extends Component{

    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            
            <div className = 'class-list'>
                <ul>
                    {
                        this.props.tasks.map(task=>(
                            <li key = {task.id}>
                                <h1>{task.txt}</h1>
                                <button onClick = {()=>this.props.onDelete(task.id)}>Delete</button>
                                {/* or   <button onClick = {function(){this.onDelete(task.id)}.bind(this)}>Delete</button>*/}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}