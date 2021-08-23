import React,{Component} from 'react';
import Cover from './Cover.js';


export default class AllRooms extends Component {

    
    render()
    {

        const head = "Our Rooms";
        const desc = "";
        const btn_txt = "RETURN HOME";
        const img = "room-9.jpeg";
        const alink = "/";

        return(

            <>
            <Cover head = {head} desc={desc} btn_txt={btn_txt} img = {img} alink = {alink}/>
            </>
        )
    }





}