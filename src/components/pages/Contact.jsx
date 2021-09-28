import React from "react";
import { Col, Container, Jumbotron, Row } from "reactstrap";
import twrLogo from "../images/the-waxing-room.jpg";
import phoneLogo from "../images/icons/phone-solid.svg";
import emailLogo from "../images/icons/envelope-solid.svg";
import facebookLogo from "../images/icons/facebook-square-brands.svg";
import mapLogo from "../images/icons/map-marker-solid.svg";

import "./styles/Contact.css";

export default function Contact() {

  return (
    <>
    <div className="contact-container" >
     
        <Jumbotron className="jumbotron">
          <Col>
           <img className="twrLogo" src={twrLogo} alt="the waxing room logo"></img>
          </Col>
        </Jumbotron>
      
      <Container className="icon-container">
        <Row>
          <Col>
            <img src={phoneLogo} alt="phone icon" className="contact-icons"></img>
          </Col>
          <Col>
            <img src={emailLogo} alt="email icon" className="contact-icons"></img>
          </Col>
          <Col>
            <img src={facebookLogo} alt="facebook icon" className="contact-icons"></img>
          </Col>
          <Col>
            <img src={mapLogo} alt="map logo" className="contact-icons"></img>
          </Col>
        </Row>
      
      </Container>
     </div>
    </>
  )
}