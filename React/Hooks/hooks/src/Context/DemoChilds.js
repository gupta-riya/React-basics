import React,{useContext} from 'react'
import MyContext from './Context';
function DemoChilds() {
console.log('Demo Child render');
    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>
            
        </div>
    )
}

export default DemoChilds