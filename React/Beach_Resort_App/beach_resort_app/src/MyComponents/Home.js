import React from 'react'
import Cover from './Cover.js'
import './cssStyles/home.css' 
import Services from './Services.js'
import Feature from './Feature.js'

function Home() {

    const head = "Luxurious Rooms";
    const desc = "Deluxe Rooms Starting At ₹1000* Only";
    const btn_txt = "OUR ROOMS";
    const img = "defaultBcg.jpeg";
    const alink = "/rooms";

    return (
        
        <>
          
            <Cover head = {head} desc={desc} btn_txt={btn_txt} img = {img} alink = {alink}/>
            <section className = "service_section">
                <p className = "services_title" >Services</p>
                <div className = "divider"></div>
                <Services/>
            </section>
            <section className = "feature_section">
                <p className = "services_title" >Featured Rooms</p>
                <div className = "divider"></div>
                <Feature/>
            </section>

        </>
        
    )
}

export default Home
