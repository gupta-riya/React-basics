import React from 'react';
import Cover from './Cover.js';
import RoomsOptions from './RoomsOptions';
import '../cssStyles/AllRooms.css'
import Feature from './Feature'
import { withRoomConsumer } from '../context.js';


function AllRooms({context}){
    const{sortedRooms,rooms} = context;
    
    return(
        <>
            
            <section className = "service_section">
                <p className = "services_title" >Search Rooms</p>
                <div className = "divider"></div>
                <RoomsOptions rooms={rooms}/>
                <Feature featuredRooms = {sortedRooms}/>
            </section>
        </>
    )
}

export default withRoomConsumer(AllRooms);

// export default class AllRooms extends Component {

    
//     render()
//     {

        
        

//         return(

//             <>
//             <Cover head = {head} desc={desc} btn_txt={btn_txt} img = {img} alink = {alink}/>
//             <section className = "service_section">
//                 <p className = "services_title" >Search Rooms</p>
//                 <div className = "divider"></div>
//                 <RoomsOptions/>
//                 <Feature featuredRooms = {filteredData}/>
//             </section>
//             </>
//         )
//     }





// }