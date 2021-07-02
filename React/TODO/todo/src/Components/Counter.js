import React,{useState} from 'react'

function Counter() {
    // this.state = {
    //     count :0 
    // }
    // this.setState({})

    const [count,setCount] = useState(0);
    // we pass the initial value of our state to useState as argument
    // useState returns us a pair of values
    // current state and a function that can be used to change the current state
    
    const handleIncrement = () =>{
        setCount(count+1);
    }
    
    const handleDecrement = () =>{
        setCount(count-1);
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick = {handleDecrement}>-</button>
        </div>
    )
}

export default Counter
