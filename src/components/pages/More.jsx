import React from "react";
import { Button, Col, Jumbotron, Row } from "reactstrap";
import brushedMetal from "../images/brushed-metal.jpg";

import twrLogo from "../images/the-waxing-room.jpg";


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
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>We have services for men & women.</p>
            <Button className="more-card-btn" href="/components/pages/services" style={{ backgroundImage: `url(${brushedMetal})` }}>View Services</Button>
        </Col>
        
        <Col className="more-col">
            <h3>Waxing Aftercare</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Make an appointment or need advice?</p>
            <Button className="more-card-btn" href="/components/pages/contact" style={{ backgroundImage: `url(${brushedMetal})` }}>Contact Us</Button>
        </Col>
       
        <Col className="more-col">
            <h3>Our Shop</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Opening hours, location, Elaine & Perron Rigot.</p>
            <Button className="more-card-btn" href="/components/pages/about" style={{ backgroundImage: `url(${brushedMetal})` }}>Find Out More</Button>
        </Col>
        
        <Col className="more-col">
            <h3>Testimonials</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Waxing etiquette, aftercare, our shop and reviews.</p>
            <Button className="more-card-btn" href="/components/pages/products" style={{ backgroundImage: `url(${brushedMetal})` }}>View More</Button>
        </Col>
      </Row>
    </div>
    </>
  )
}
