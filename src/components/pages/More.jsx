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
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>What we expect.</p>
            <Button className="more-card-btn" href="/components/pages/subpages/etiquette" style={{ backgroundImage: `url(${brushedMetal})` }}>View Services</Button>
        </Col>
        
        <Col className="more-col">
            <h3>Waxing Aftercare</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>For help after your treatment.</p>
            <Button className="more-card-btn" href="/components/pages/subpages/aftercare" style={{ backgroundImage: `url(${brushedMetal})` }}>Contact Us</Button>
        </Col>
       
        <Col className="more-col">
            <h3>Our Shop</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>See what products we have for sale.</p>
            <Button className="more-card-btn" href="/components/pages/subpages/shop" style={{ backgroundImage: `url(${brushedMetal})` }}>View Shop</Button>
        </Col>
        
        <Col className="more-col">
            <h3>Testimonials</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Read our testimonials.</p>
            <Button className="more-card-btn" href="/components/pages/subpages/testimonials" style={{ backgroundImage: `url(${brushedMetal})` }}>View More</Button>
        </Col>
      </Row>
    </div>
    </>
  )
}
