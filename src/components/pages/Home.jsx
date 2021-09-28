import React from "react";
import { Button, Col, Jumbotron, Row } from "reactstrap";
import brushedMetal from "../images/brushed-metal.jpg";

import twrLogo from "../images/the-waxing-room.jpg";


import "./styles/Home.css";

export default function Home() {

  return (

    <>
    
    <div className="homepage-container"> 
      <Jumbotron className="jumbotron">
        <img className="twrLogo" src={twrLogo} alt="the waxing room logo"></img>
      </Jumbotron>
      
      <Row className="row" col="2">
        <Col className="home-col">
            <h3>Services</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>We have services for men & women.</p>
            <Button className="home-card-btn" href="/components/pages/services" style={{ backgroundImage: `url(${brushedMetal})` }}>View Services</Button>
        </Col>
        
        <Col className="home-col">
            <h3>Contact Us</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Make an appointment or need advice?</p>
            <Button className="home-card-btn" href="/components/pages/contact" style={{ backgroundImage: `url(${brushedMetal})` }}>Contact Us</Button>
        </Col>
       
        <Col className="home-col">
            <h3>About Us</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Opening hours, location, Elaine & Perron Rigot.</p>
            <Button className="home-card-btn" href="/components/pages/about" style={{ backgroundImage: `url(${brushedMetal})` }}>Find Out More</Button>
        </Col>
        
        <Col className="home-col">
            <h3>More</h3>
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Waxing etiquette, aftercare, our shop and reviews.</p>
            <Button className="home-card-btn" href="/components/pages/products" style={{ backgroundImage: `url(${brushedMetal})` }}>View More</Button>
        </Col>
      </Row>
    </div>
    </>
  )
}
