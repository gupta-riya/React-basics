import React,{Component} from 'react';
import Cover from './Cover.js';
import RoomsOptions from './RoomsOptions';
import '../cssStyles/AllRooms.css'
import {data} from '../Data'
import Feature from './Feature'

export default class AllRooms extends Component {

    
    render()
    {

        const head = "Our Rooms";
        const desc = "";
        const btn_txt = "RETURN HOME";
        const img = "/Images/room-9.jpeg";
        const alink = "/";
        const filteredData = data;

        return(

            <>
            <Cover head = {head} desc={desc} btn_txt={btn_txt} img = {img} alink = {alink}/>
            <section className = "service_section">
                <p className = "services_title" >Search Rooms</p>
                <div className = "divider"></div>
                <RoomsOptions/>
                <Feature featuredRooms = {filteredData}/>
            </section>
            </>
        )
    }





}