import React,{useContext} from 'react'
import MyContext from './Context';
function DemoChilds() {

    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>
            
        </div>
    )
}

export default DemoChilds