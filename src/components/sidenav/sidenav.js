import React from 'react'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import './sidenav.css'
import {Link} from 'react-router-dom'
import sideImage from '../../images/Vector1.svg'

import sideImage1 from '../../images/Vector.svg'
//import sideImage1 from '../../images/feather_users.svg'
import sideImage2 from '../../images/Vector2.svg'
import sideImage3 from '../../images/feather_users.svg'
import sideImage4 from '../../images/Vector3.svg'
import sideImage5 from '../../images/Vector4.svg'
import sideImage6 from '../../images/Vector5.svg'
import sideImage7 from '../../images/feather_log-out.svg'
import sideImage8 from '../../images/purple.svg'





export default function Sidenav() {
    return (
        <div>
            
            <Navbar fixed className="flex-column side_navbar" bg="primary" variant="dark">
            <Nav.Link as={Link} to="/homepage" >
                <img src={sideImage8} alt={sideImage8} ></img>
                </Nav.Link>
                <div className="side_div">
                <Nav className=" flex-column mr-auto">
                <Nav.Link as={Link} to="/homepage" >
                <img src={sideImage} alt={sideImage} className="side_image"></img>
                 Overview</Nav.Link>

                <Nav.Link as={Link} to="/Feature" >
                <img src={sideImage1} alt={sideImage1} className="side_image"></img>   
                Leads</Nav.Link>

                <Nav.Link as={Link} to="/Price">
                <img src={sideImage2} alt={sideImage2} className="side_image"></img>
                Subscribers</Nav.Link>

                <Nav.Link as={Link} to="/homepage" >
                <img src={sideImage3} alt={sideImage3} className="side_image"></img>
                 Employees</Nav.Link>

                 <Nav.Link as={Link} to="/homepage" >
                <img src={sideImage4} alt={sideImage4} className="side_image"></img>
                 Location</Nav.Link>

                 <Nav.Link as={Link} to="/homepage" >
                <img src={sideImage5} alt={sideImage5} className="side_image"></img>
                 Reports</Nav.Link>

                 <Nav.Link as={Link} to="/homepage" >
                <img src={sideImage6} alt={sideImage6} className="side_image"></img>
                 Settings</Nav.Link>
                 </Nav>
                <Nav className="log_nav">
                <Nav.Link as={Link} to="/homepage" >
                <img src={sideImage7} alt={sideImage7} className="log_image"></img>
                 Log out</Nav.Link>
                 </Nav>
                 
                 </div>

</Navbar>
        </div>
    )
}
