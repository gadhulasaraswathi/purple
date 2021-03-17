import { Button } from 'react-bootstrap'
import React ,{useState} from 'react'
import { Col, Container, NavDropdown, Row, Table } from 'react-bootstrap'
import './TablePage.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import {useHistory} from "react-router-dom"









export default function TablePage() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
      setDateState(e)
    }
    const history = useHistory();

    const handleChange = ()=>{
        history.push('/AddPage')

    }
    return (
            <Container  className="table_page">
                <Row>
                   <Col>
                   <Button className="button_tablepage" onClick={handleChange} variant="primary">Add new lead</Button>
                   </Col>
               </Row>
                <Row>
                    
                    <Col>
                            <NavDropdown title="Dropdown"
                        menuAlign="right"
                        title="From date"
                        id="dropdown-menu-align-right"
                        id="basic-nav-dropdown"
                        >
                           <Calendar 
                                value={dateState}
                                onChange={changeDate}
                                />
                                <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
                    </NavDropdown>

                    </Col>
               
                    
                    <Col>
                            <NavDropdown title="Dropdown"
                        menuAlign="right"
                        title="to date"
                        id="dropdown-menu-align-right"
                        id="basic-nav-dropdown"
                        >
                           <Calendar 
                                value={dateState}
                                onChange={changeDate}
                                />
                                <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
                    </NavDropdown>

                    </Col>
                    <Col>
                            <NavDropdown title="Dropdown"
                        menuAlign="right"
                        title="Package"
                        id="dropdown-menu-align-right"
                        id="basic-nav-dropdown"
                        >
                           <Calendar 
                                value={dateState}
                                onChange={changeDate}
                                />
                                <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
                    </NavDropdown>

                    </Col>
                    <Col>
                            <NavDropdown title="Dropdown"
                        menuAlign="right"
                        title="Location"
                        id="dropdown-menu-align-right"
                        id="basic-nav-dropdown"
                        >
                           <Calendar 
                                value={dateState}
                                onChange={changeDate}
                                />
                                <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
                    </NavDropdown>

                    </Col>
                    <Col>
                            <NavDropdown title="Dropdown"
                        menuAlign="right"
                        title="Status"
                        id="dropdown-menu-align-right"
                        id="basic-nav-dropdown"
                        >
                           <Calendar 
                                value={dateState}
                                onChange={changeDate}
                                />
                                <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
                    </NavDropdown>

                    </Col>
                </Row>
                <Row >
                    <Col>
                    <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th> Name</th>
                        <th>Phone nuber</th>
                        <th>location</th>
                        <th>Status</th>
                        <th>Employee</th>
                        <th>Medium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>

                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                         <td>@mdo</td>
                        <td>@mdo</td>

                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>


                        </tr>
                    </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        
    )
}
