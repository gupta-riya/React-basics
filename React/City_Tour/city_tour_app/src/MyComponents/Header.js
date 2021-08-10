import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap';


export default function Header(){

    const brand_logo = {
        
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginBotton: "0.2rem"
     };

    const menuItem =
    {
        marginLeft: "3rem" ,
        fontSize : "1.2rem"
   }


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
           
                <Navbar.Brand>
                <img
                    alt=""
                    src='./Images/travel.png'
                    width="40"
                    height="40"
                    className="d-inline-block align-top " style = {brand_logo}
                    />{'  '}City Tour
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/" style = {menuItem}>Home</Nav.Link>
                <Nav.Link href="/about" style = {menuItem}>About</Nav.Link>
                <Nav.Link href="/tour" style = {menuItem}>Tours</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            
        </>




    );



}