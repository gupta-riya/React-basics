import React from 'react'
import Cover from './Cover.js'
import './cssStyles/home.css' 
import Services from './Services.js'

function Home() {

    const head = "Luxurious Rooms";
    const desc = "Deluxe Rooms Starting At ₹1000* Only";
    const btn_txt = "OUR ROOMS";
    const img = "defaultBcg.jpeg";

    return (
        
        <>
          
            <Cover head = {head} desc={desc} btn_txt={btn_txt} img = {img}/>
            <section className = "home_section">
                <p className = "services_title" >Services</p>
                <div className = "divider"></div>
                <Services/>
            </section>

        </>
        
    )
}

export default Home
