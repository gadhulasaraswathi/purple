import React from 'react'
import { NavDropdown } from 'react-bootstrap'

export default function Edit() {
    return (
        <div className="leads">
             <NavDropdown title="LEADS"
                menuAlign="right"
                title="LEADS"
                id="dropdown-menu-align-right"
                id="basic-nav-dropdown"
                >
                <NavDropdown.Item href="/AddPage">Add new lead</NavDropdown.Item>
                <NavDropdown.Item href="/View">view information</NavDropdown.Item>
                <NavDropdown.Item href="/dark">edit information</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
}
