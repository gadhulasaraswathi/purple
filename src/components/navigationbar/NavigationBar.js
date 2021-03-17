import React from 'react'
import {Navbar,NavDropdown,Form,Button,FormControl,Nav, } from 'react-bootstrap'
import './NavigationBar.css'
import userlogo from '../../assets/images/user.JPG'
import belllogo from '../../assets/images/feather_bell.svg'




export default function NavigationBar() {

    
    return (
        <div>
           <Navbar fixed="top" className="top_nav_navbar" bg="light" variant="light">
            <Navbar.Brand></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Form className="top_navbar_form" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <img src={belllogo} alt={belllogo} className="top_nav_belllogo"/>

            <img src={userlogo} alt={userlogo} className="top_nav_userlogo"/>
            <NavDropdown title="Dropdown"
                menuAlign="right"
                title="Dropdown"
                id="dropdown-menu-align-right"
                id="basic-nav-dropdown"
                >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            
           
        </Navbar>

       
       
        </div>
    )
}
