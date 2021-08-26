import React from 'react';
import {useContext} from "react";
import {RoomContext} from "../context";
import '../cssStyles/RoomsOptions.css';



//function that returns unique value set

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
}


const RoomOptions = ({rooms}) => {

    const context = useContext(RoomContext);
    const{
            handleChange,
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets
            } = context;

    
    //get unique values for all filter options
    let types = getUnique(rooms,"type");
    types = ["all",...types];
    types = types.map((item,idx) => { 
        return(
            <option key ={idx} value={item}>
                {item}
            </option>
        )
    })

    let guests = getUnique(rooms,"capacity");
    guests = guests.map((item,idx) => { 
        return(
            <option key ={idx} value={item}>
                {item}
            </option>
        )
    })


    return(
        <>
        <div className = "room-container">
            <div className = "grid-item room-type">
                <h4>ROOM TYPE</h4>
                <select className="type" name="type" onChange={handleChange} value={type}>
                    {types}
                </select>
            </div>
            <div className = "grid-item guests">
                <h4>GUESTS</h4>
                <select className="guest" name="capacity" onChange={handleChange} value={capacity}>
                    {guests}
                </select>
            </div>
            <div className = "grid-item room-price">                    
                <h4>ROOM PRICE</h4>
                <input type="range" name="price" min={minPrice} max={maxPrice} value={price} className = "price" onChange={handleChange}/>
                
            </div>
            <div className = "grid-item ">
                <h4>ROOM SIZE</h4>
                <div className = "room-size">
                    <input type="number" name="minSize" value={minSize} min = "0" className="lowsize" onChange={handleChange}></input>
                    <input type="number" name="maxSize" value={maxSize} max = "100000" className="highsize" onChange={handleChange}></input>
                </div>
                
            </div>
            <div className = "grid-item room-opt">
                <input type="checkbox" name="breakfast" checked={breakfast} onChange={handleChange}/>
                <label>Breakfast</label>
                    <br/>
                <input type="checkbox" name="pets" checked={pets} onChange={handleChange}/>
                <label>Pet</label>
            </div>
        </div>

        
    </>
)
}


export default RoomOptions;