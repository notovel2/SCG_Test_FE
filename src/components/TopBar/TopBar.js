import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap';
class TopBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg='dark' variant='dark'>
                    <Navbar.Brand href='/'>Home</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/cv'>CV</Nav.Link>
                        <Nav.Link>Search Places</Nav.Link>
                        <Nav.Link href='/scg'>SCG</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default TopBar