import React,{Component} from 'react';
import {data} from './Data.js'

const RoomContext = React.createContext();

export default class RoomProvider extends Component{

    state = {
        room: [],
        sortedRooms: [],
        featuredRooms: [],
        type : "all",
        capacity: 1,
        price: 600,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    componentDidMount(){

        let rooms = this.formatData(data);
        let featuredRooms = rooms.filter((room)=>room.featured===true);

        let maxPrice = Math.max(...rooms.map((item)=>item.price));
        let maxSize = Math.max(...rooms.map(item=>item.size));

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            price: maxPrice,
            maxPrice,
            maxSize
        });



    }


    formatData(data){

        let tempItems = data.map((item)=>{
            let id = item.sys.id;
            let images = item.fields.images.map(image=>image.field.file.url);
            let room = {...item.fields,images,id};
            return room;
        });

        return tempItems;
    }


    getRoom = (slug) =>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.filter((item)=> item.slug===slug);
        return room;
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        },
            this.filterRooms
        );
    }


    filterRooms = () => {

        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;


        let tempRooms = [...rooms];


        capacity = parseInt(capacity);
        price = parseInt(price);

        //filter by type
        if(type!=="all")
        {
            tempRooms = tempRooms.filter((room)=>room.type === type);
        }

        //filter by capacity
        if(capacity!==1)
        {
            tempRooms = tempRooms.filter((room)=>room.capacity >= capacity);
        }

        //filter by price
        tempRooms = tempRooms.filter((room)=>room.price <= price);

        //filter by size
        tempRooms = tempRooms.filter((room)=>room.size >= minSize && room.size <= maxSize);


        //filter by breakfast
        if(breakfast)
        tempRooms = tempRooms.filter((room) => room.breakfast===true);

        //filter by pets
        if(pets)
        tempRooms = tempRooms.filter((room) => room.pets===true);

        this.setState({
            sortedRooms  : tempRooms
        })
    }

    render(){

        return(

            <RoomContext.Provider value={{
                ...this.state,
                getRoom : this.getRoom,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </RoomContext.Provider>


        )

    }
}


const RoomConsumer = RoomContext.Consumer;

export {RoomProvider,RoomConsumer,RoomContext};

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return(
            <RoomConsumer>
               { (value) => <Component{...props} context={value}/>}
            </RoomConsumer>
        )
    }
}
