
import React,{Component} from 'react';
import { RoomContext } from "../context";
import Feature from "./Feature"

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
  
    render() {
      let { featuredRooms: rooms } = this.context;
  
      return (
            <Feature room={rooms}/>
      );
    }
  }