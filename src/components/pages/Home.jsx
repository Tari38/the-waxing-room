import React from "react";
import { Button, Col, Jumbotron, Row } from "reactstrap";
import Spin from 'react-reveal/Spin';

import twrLogo from "../../../public/images/the-waxing-room.jpg";

import "./styles/Home.css";

export default function Home() {

  return (

    <>
    
    <div className="homepage-container"> 
      <Jumbotron className="home-jumbotron">
        <div className="home-image">
          <h1>Welcome to...<Spin><img src={twrLogo} alt="the waxing room logo" className="home-twrLogo"></img></Spin></h1>
        </div>
        </Jumbotron>
        
      
      
      <Row className="home-row" col="2">
        <Col className="home-col">
            <h3>Services</h3>
            <hr />
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>We have services for men & women.</p>
            <Button className="home-button" href="/components/pages/services">View Services</Button>
        </Col>
        
        <Col className="home-col">
            <h3>Contact Us</h3>
            <hr />
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Make an appointment or need advice?</p>
            <Button className="home-button" href="/components/pages/contact">Contact Us</Button>
        </Col>
       
        <Col className="home-col">
            <h3>About Us</h3>
            <hr />
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Opening hours, location, Elaine & Perron Rigot.</p>
            <Button className="home-button" href="/components/pages/about">Find Out More</Button>
        </Col>
        
        <Col className="home-col">
            <h3>More</h3>
            <hr />
            <p style={{ fontFamily: `"Montserrat", sans-serif`}}>Waxing etiquette, aftercare, our shop and reviews.</p>
            <Button className="home-button" href="/components/pages/more">View More</Button>
        </Col>
      </Row>
    </div>
    </>
  )
}
