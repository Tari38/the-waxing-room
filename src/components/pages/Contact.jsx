import React, { useState } from 'react';

import { Button, CardBody, Col, Collapse, Jumbotron } from 'reactstrap';
import twrLogo from "../../../public/images/the-waxing-room.jpg";
import phoneLogo from "../../../public/images/icons/phone-solid.svg";
import emailLogo from "../../../public/images/icons/envelope-solid.svg";
import facebookLogo from "../../../public/images/icons/facebook-square-brands.svg";
import Spin from 'react-reveal/Spin';
import Zoom from 'react-reveal/Zoom';

import "./styles/Contact.css";

const Contact = (props) => {;

  const [ isOpen, setIsOpen ] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

   
  return (
    <>
    <div className="contact-container" >
     
        <Jumbotron className="cont-jumbotron">
        <div className="contact-image">
          <h1>Contact Us <Spin><img src={twrLogo} alt="the waxing room logo" className="home-twrLogo"></img></Spin></h1>
        </div>
        </Jumbotron>
      
        
        <div className="icon-row">
          <Col className="col-phone">
            <Zoom>
              <Button className="button">
                <img onClick={toggle} className="contact-icon" src={phoneLogo} alt="phone icon"></img>
              </Button>
            </Zoom>
            <Collapse isOpen={isOpen}>
              <CardBody className="contact-card-body">
              <p>Call or Text on:</p>
              <p>07944 679592</p>
              </CardBody>
            </Collapse>
          </Col>

          <Col className="col-email">
            <Zoom>
              <Button className="button" href="mailto:thewaxingroomchorleywood@gmail.com">
                <img className="contact-icon" src={emailLogo} alt="email icon"></img>
              </Button>
            </Zoom>
          </Col>
          
          <Col className="col-facebook">
            <Zoom>
              <Button className="button" href="https://www.facebook.com/TheWaxingRoomChorleywood">
                <img className="contact-icon" src={facebookLogo} alt="facebook link"></img>
              </Button>
            </Zoom>
          </Col>
        
      </div>
      
     </div>
    </>
  )
}

export default Contact;