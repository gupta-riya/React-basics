import React from 'react';
import Cover from './Cover.js';
import AllRooms from './AllRooms.js';

const Rooms = () => {

    const head = "Our Rooms";
    const desc = "";
    const btn_txt = "RETURN HOME";
    const img = "/Images/room-9.jpeg";
    const alink = "/";

    return(
    <>
        <Cover head = {head} desc={desc} btn_txt={btn_txt} img = {img} alink = {alink}/>
        <AllRooms/>
    </>
    )
}

export default Rooms;