import React,{useEffect,useState} from 'react'

function UseEffectWithCleanUp2() {

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
    },[])

    // here becoz of adding [] useeffect will run only once ad that too just before unmount
    // like if we click on btn and we are routed to another link



    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default UseEffectWithCleanUp2
