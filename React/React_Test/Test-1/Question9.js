import React, { useEffect } from 'react'

function Question9() {

    useEffect(()=>{
        window.addEventListener("mousemove", handleMousePosition)
        return ()=>{
            window.removeEventListener("mousemove", handleMousePosition)
        }
    },[])

    return (
        <div>
            
        </div>
    )
}

export default Question9
