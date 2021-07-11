import React,{useEffect, useState} from 'react'

function Question2() {

    const[count,setCount] = useState(0);

    const updateState= () => {
        setCount(count + 1)
    }

    useEffect(()=>{
        console.log('Boom');
    })
    return (
        <div>
            <button onClick={updateState}>State:{ count}</button>
        </div>
    )
}

export default Question2
