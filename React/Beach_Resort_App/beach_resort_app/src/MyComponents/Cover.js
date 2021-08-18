import React from 'react'
import './cssStyles/cover.css'

function Cover(props) {

    let url = `http://localhost:3000/Images/`;
    let  img_url = url + props.img;
    
    return (
        <div style={{ background: `url(${img_url}) 50%/cover no-repeat`}} className = "main-container">

            <div className = "sub-container">
                <h1 className="main-heading">
                    {props.head}
                </h1>
                <div className = "divider"></div>
                <h2>{props.desc}</h2>
                <button className = "cover-button">{props.btn_txt}</button>
            </div>


        </div>
    )
}

export default Cover
