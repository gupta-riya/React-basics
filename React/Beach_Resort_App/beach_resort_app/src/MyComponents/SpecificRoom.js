import React from 'react'
import Cover from './Cover'
import {data} from '../Data.js'
import '../cssStyles/specificRoom.css'



function capitalize(input)
{
    return input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
}

function SpecificRoom() {

    const roomInfo = data[0];
    const head = capitalize(roomInfo.fields.name);
    const desc = "";
    const btn_txt = "BACK TO ROOMS";
    const img = (roomInfo.fields.images[0].fields.file.url).replace(".","");
    const alink = "/rooms";
    const [,...tourImg] = roomInfo.fields.images;
    const pets = roomInfo.fields.pets ? "Allowed" : "Not Allowed";
    
    return (
        <>
            <Cover head = {head} desc={desc} btn_txt={btn_txt} img = {img} alink = {alink}/>
            
            <div className = "room-tour">
            {
                tourImg.map((e)=>{
                return(
                    
                        <div className = "tour-item">
                            <img src = {e.fields.file.url} alt="" className="tourImg"/>
                        </div>
                    
                )
                })
            }
            </div>

            <div className = "room-info">
                <div className="details">
                    <h3>Details</h3>
                    <h5>{roomInfo.fields.description}</h5>
                </div>
                <div className="details">
                    <h3>Info</h3>
                    <h5>Price : ${roomInfo.fields.price}</h5>
                    <h5>Size : {roomInfo.fields.size} SQFT</h5>
                    <h5>Max Capacity : {roomInfo.fields.capacity} Person</h5>
                    <h5>Pets {pets} </h5>
                    {roomInfo.fields.breakfast && 
                        <h5>Free Breakfast Included</h5>}
                </div>
            </div>
        

            <div className = "more-details">
                <h3>Extras</h3>
            
                <div className = "room-extras">
                    {roomInfo.fields.extras.map((txt)=>{
                        return(
                            <div className="extras">
                                <h5>-{txt}</h5>
                            </div>
                        )
                    })}                
                </div>
                
            </div>
        
        
        </>
    )
}

export default SpecificRoom
