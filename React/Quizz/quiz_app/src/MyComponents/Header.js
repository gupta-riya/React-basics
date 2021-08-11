import React from 'react';
import { Navbar, Container} from 'react-bootstrap';

function Header() {

    const myStyle = {
        
        marginLeft : "40%"
    }


    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand style = {myStyle}>
               TEST YOUR KNOWLEDGE
            </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )
}

export default Header

