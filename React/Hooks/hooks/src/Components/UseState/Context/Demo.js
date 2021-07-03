import React,{useContext} from 'react'
import MyContext from './Context';
import DemoChilds from './DemoChilds';
function Demo() {

    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>
            <DemoChilds/>
        </div>
    )
}

export default Demo
