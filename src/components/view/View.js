import { Button, NavDropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './View.css'
import {useHistory} from "react-router-dom"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default function View() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
      setDateState(e)
    }

    const history = useHistory();

    const handleChange = ()=>{
        history.push('/TablePage')

    }
    const [value, setValue] = useState()
   
   
    return (
      <Container>
          <Row className="form_addpage">
              <Col> 
              <Form>
              <Button  className="back_button" onClick={handleChange} variant="primary" type="submit">
                    Go back
                </Button>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                      Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="email"  />
                    </Col>
                </Form.Group>

                <Form.Group className="form_add" as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Phone number
                        </Form.Label>
                        <Col sm="10">
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}/>

                        </Col>
                    </Form.Group>
                 <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                          Location
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text"  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
               Conatct person
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text"  />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                 Type of business
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text"  />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Email address
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text"  />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                
                <Form.Label column sm="2">
                 Plane
                 
                </Form.Label>
                <Col sm="10">
                <Form.Control as="select" >
                    <option>Purple(Single salon)</option>
                    <option>Purple Plus(1 + upto 4 salons)</option>
                </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                 Medium of contact
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text"  />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Coupon code
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text"  />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Message
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text"  />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Status
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text"  />
                </Col>
            </Form.Group>
                <Button  className="add_button" variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
              </Col>
          </Row>
      </Container>
            
               
    )
}
