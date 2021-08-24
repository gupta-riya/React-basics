import React,{Component} from 'react';
import './cssStyles/RoomsOptions.css'
export default class RoomsOptions extends Component{

    
    render(){

       
        return (

            <>
                <div className = "room-container">
                    <div className = "grid-item room-type">
                    <h4>ROOM TYPE</h4>
                    <select className="type" name="rooms">
                        <option value="">all</option>
                        <option value="singleb">single</option>
                        <option value="double">double</option>
                        <option value="family">family</option>
                        <option value="presdential">presdential</option>
                    </select>

                    </div>
                    <div className = "grid-item guests">
                        <h4>GUESTS</h4>
                        <select className="guest" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="10">10</option>

                        </select>
                    </div>
                    <div className = "grid-item room-price">                    
                        <h4>ROOM PRICE</h4>
                        <input type="range" min="0" max="600" defaultValue="600" className = "price" onChange={(e)=>{console.log(e.target.value)}}/>
                        
                    </div>
                    <div className = "grid-item ">
                        <h4>ROOM SIZE</h4>
                        <div className = "room-size">
                            <input type="number" defaultValue="0" min = "0" className="lowsize"></input>
                            <input type="number" defaultValue="1000" max = "1000" className="highsize"></input>
                        </div>
                        
                    </div>
                    <div className = "grid-item room-opt">
                        <input type="checkbox" value="breakfast"/>
                        <label>Breakfast</label>
                            <br/>
                        <input type="checkbox" value="pet"/>
                        <label>Pet</label>
                    </div>
                </div>
            
            </>
        )
    }
}