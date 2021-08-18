import React,{Component} from 'react';
import './cssStyles/header.css'
import {FaAlignJustify} from 'react-icons/fa';

export default class Header extends Component {

    state = {
        isOpen : false
    }

    handleClick = () => {

        this.setState(
            {isOpen : !this.state.isOpen}
        )

    }

    render()
    {
        return(

                
                    <nav className = "navbar">
                        <div className = "nav-center">

                            <div className = "nav-header">
                                <img src="./Images/logo.svg" alt="logo"/>
                                <button className = "menu-button" onClick = {this.handleClick}>
                                    <FaAlignJustify className="menu-icon"/>
                                </button>
                            </div>
                            <ul className = {this.state.isOpen ? "nav-links show-nav-link":"nav-links"}>
                                <li className = "nav-list">Home</li>
                                <li className = "nav-list">Rooms</li>
                            </ul>

                        </div>
                        
                    </nav>






        )
    }





}