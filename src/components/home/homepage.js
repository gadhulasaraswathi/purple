import React from 'react'
import homeImage from '../../images/image1.jpg'
import {Card, Col, Container, Nav, Row} from 'react-bootstrap'
import './homepage.css'
import Product from '../products/Product'
import { Button } from 'react-bootstrap'


export default function homepage() {
    return (
       <Container className="container_homepage">
           <Row>
               <Col>
               <img src={homeImage} alt={homeImage} className="home_image"></img>
              
               </Col>
               </Row>
               <Row>
                   <Col>
                   <Button className="button_homepage" variant="primary">Add new lead</Button>
                   </Col>
               </Row>
       </Container>
    )
}
       
           
