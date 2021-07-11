import React,{useContext} from 'react'
import MyContext from './Context';
import DemoChilds from './DemoChilds';
function Demo() {

    console.log('Demo Render');
    // if we comment below two lines then demo will not render unnecesaarily as we are using memo
    // const val = useContext(MyContext);
    // console.log(val);
    return (
        <div>
            <DemoChilds/>
        </div>
    )
}

export default React.memo(Demo)
