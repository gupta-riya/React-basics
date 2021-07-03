import React,{useState} from 'react'

function Us() {
    
    const [msgObj,setMessage] = useState({message:''});

    // const [msgObj,setMessage] = useState({message:'',id:1});
    // in the above instruction if we start typing id element will get loose if we are not using spread operator as we are passing only message value and it will replace the whole object by message

    const handleChange = (e) =>{
        let val = e.target.value;
        // msgObj.message = val;
        // console.log(msgObj);
        // setMessage({...msgObj,message:val});
        //let obj = {...msgObj,message:val}; => this will not remove the id element
        let obj = {message:val};
        setMessage(obj);
    }
    
    
    
    return (
        
        <div>
            <input type = 'text' value={msgObj.message} onChange={handleChange}></input>
            <p>{msgObj.message}</p>
        </div>
    )
}

export default Us
