import React from 'react'
import Cover from './Cover.js'

function Home() {

    const head = "Luxurious Rooms";
    const desc = "Deluxe Rooms Starting At ₹1000* Only";
    const btn_txt = "OUR ROOMS";
    const img = "defaultBcg.jpeg";

    return (
        
        <>
          
            <Cover head = {head} desc={desc} btn_txt={btn_txt} img = {img}/>

        </>
        
    )
}

export default Home
