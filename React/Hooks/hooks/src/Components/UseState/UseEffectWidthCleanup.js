import React,{useEffect,useState} from 'react'

function UseEffectWidthCleanup() {

    const [count,setCount] = useState(0);
    console.log('Render');
    useEffect(()=>
    {
        console.log('useEffect');
        document.title =  `Clicked ${count} times`;
        //cleanUp 
        return ()=>{
            alert(`I will be called before the nest UseEffect is called  ${count}`);
        }
    },[count])



    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default UseEffectWidthCleanup
