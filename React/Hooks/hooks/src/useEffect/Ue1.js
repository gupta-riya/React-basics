import React, {useEffect,useState} from 'react'
//useState ka 1 variation
// no optional dependency array is passed
// runs after every render
function Ue1() {

    
    useEffect(()=>{
        document.title = `Clicked ${count} times`;
    })
    const [count,setCount] = useState(0);
    return (
        <div>
            
            <p>You clicked the button {count} times</p>
            <button onClick = {()=> {setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Ue1
