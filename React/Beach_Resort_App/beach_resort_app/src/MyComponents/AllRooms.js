import React from 'react';
import RoomsOptions from './RoomsOptions';
import '../cssStyles/AllRooms.css'
import Feature from './Feature'
import Loading from './Loading'
import { withRoomConsumer } from '../context.js';


function AllRooms({context}){
    const{loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading/>;
    }
    return(
        <>
            
            <section className = "service_section">
                <p className = "services_title" >Search Rooms</p>
                <div className = "divider"></div>
                <RoomsOptions rooms={rooms}/>                
                <Feature room = {sortedRooms}/>
            </section>
        </>
    )
}

export default withRoomConsumer(AllRooms);

