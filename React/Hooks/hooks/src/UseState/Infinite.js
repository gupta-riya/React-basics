import React,{useEffect,useState} from 'react'

function Infinite() {
    console.log('render');
    
    // this will infinitly run if we dont add an empty dependency
    useEffect(()=>{
    console.log('useEffect');
    let num = Math.random()*100;
    setCount(num);
    },[])

    const [count,setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}

export default Infinite
