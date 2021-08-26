import React,{Component} from 'react'
import Cover from './Cover'
import '../cssStyles/specificRoom.css'
import { RoomContext } from '../context';
import {Link} from 'react-router-dom'


export default class SpecificRoom extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            slug : this.props.match.params.slug
        }
    }

    static contextType = RoomContext;

    capitalize(input)
    {
        return input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
    }

    render(){

        console.log(this.context);
        // const {getRoom} = this.contextType;
        // const room = getRoom(this.state.slug);

        // if(!room)
        // {
        //     return(
        //         <div>
        //             <h3>No such Room can be founded....</h3>
        //             <Link to = '/rooms'>Back To Rooms</Link>
        //         </div>
        //     )
        // }

        // let {name,description,capacity,size,price,extras,breakfast,pets,images} = room;

        // const [main,...defaultImages] = images;

        // name = this.capitalize(name) + " Room";

        // const desc = "";
        // const btn_txt = "BACK TO ROOMS";
        // const img = (main).replace(".","");
        // const alink = "/rooms";

        return(

            <>
            {/* <Cover head = {name} desc={desc} btn_txt={btn_txt} img = {img} alink = {alink}/>
            
            <div className = "room-tour">
            {
                defaultImages.map((e,idx)=>{
                return(
                    
                        <div className = "tour-item">
                            <img key = {idx} src = {e} alt={name} className="tourImg"/>
                        </div>
                    
                )
                })
            }
            </div>

            <div className = "room-info">
                <div className="details">
                    <h3>Details</h3>
                    <h5>{description}</h5>
                </div>
                <div className="details">
                    <h3>Info</h3>
                    <h5>Price : ${price}</h5>
                    <h5>Size : {size} SQFT</h5>
                    <h5>Max Capacity : {capacity} {capacity > 1 ? " People":" Person"} </h5>
                    <h5>{pets ? "Pets Allowed" : "No Pets Allowed"} </h5>
                    <h5>{breakfast && 
                        "Free Breakfast Included"}</h5>
                </div>
            </div>
        

            <div className = "more-details">
                <h3>Extras</h3>
            
                <div className = "room-extras">
                    {extras.map((txt,idx)=>{
                        return(
                            <div key = {idx} className="extras">
                                <h5>-{txt}</h5>
                            </div>
                        )
                    })}                
                </div>
                
            </div>
         */}
        
        </>
        )
    }








}


