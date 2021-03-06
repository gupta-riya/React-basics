import React,{useEffect,useState} from 'react'
import './Ue3.css'

// 3rd Variation
// non empty dependency array
// dependency array k andar

// the values that we pass
//only when they change useEffect runs 
function Ue3() {

    console.log('render');
    const [count,setCount] = useState(0);
    const [darkMode,setDarkMode] = useState(false);

    // useEffect will run only pn count state change
    useEffect(()=>{
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
    },[count])
    return (
        <div className = {darkMode ? "view dark-mode":"view"}>
            {/* <h1>DarkMode</h1> */}
            <label htmlFor = 'dark Mode'>DarkMode</label>
            <input type = "checkbox" checked = {darkMode} onChange={()=>setDarkMode(!darkMode)}></input>
            <button onClick = {()=>{setCount(count+1)}}>{count}</button>
        </div>
    )
}

export default Ue3
