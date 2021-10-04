import React from "react";
import { Button, Col, Jumbotron, Row } from "reactstrap";

import twrLogo from "../../../public/images/the-waxing-room.jpg";

import "./styles/More.css";

export default function More() {

  return (

    <>
    
    <div className="more-container"> 
      <Jumbotron className="jumbotron">
        <img className="twrLogo" src={twrLogo} alt="the waxing room logo"></img>
      </Jumbotron>
      
      <Row className="more-row" col="2">
        <Col className="more-col">
            <h3>Waxing Etiquette</h3>
            <hr />
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>What we expect from you and ourselves.</p>
            <Button className="more-button" href="/components/subpages/etiquette">View Services</Button>
        </Col>
        
        <Col className="more-col">
            <h3>Waxing Aftercare</h3>
            <hr />
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>For help & advice after your treatment.</p>
            <Button className="more-button" href="/components/subpages/aftercare">Contact Us</Button>
        </Col>
       
        <Col className="more-col">
            <h3>Our Shop</h3>
            <hr />
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>See what products we have for sale.</p>
            <Button className="more-button" href="/components/subpages/shop">View Shop</Button>
        </Col>
        
        <Col className="more-col">
            <h3>Testimonials</h3>
            <hr />
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Read testimonials from our clients.</p>
            <Button className="more-button" href="/components/subpages/testimonials">View More</Button>
        </Col>
      </Row>
    </div>
    </>
  )
}
