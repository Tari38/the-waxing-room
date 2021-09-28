import React from "react";
import { Button, Col, Row } from "reactstrap";
import maleIcon from "../images/icons/male_edited_edited_edited.png";
import femaleIcon from "../images/icons/female_edited_edited.png";
import brushedMetal from "../images/brushed-metal.jpg";

import "./styles/Services.css";

export default function Services() {

  return (
    <>
     
        <div className="services-container">
        
        <Row className="services-row" col="2">
          <Col className="services-col1">
            <img src={maleIcon} alt="male symbol" className="card-icon"></img>
              <h3>Male Waxing</h3>
                <p>Strip Wax, Hot Wax, Strip & Hot Wax combination.</p>
                  <Button className="card-btn" href="/components/pages/subpages/malewaxing" style={{ backgroundImage: `url(${brushedMetal})` }}>Show Me</Button>
          
          </Col>
       
          <Col className="services-col">
            <img src={femaleIcon} alt="female symbol" className="card-icon2"></img>
              <h3>Female Waxing</h3>
                <p>Strip Wax, Hot Wax & Strip & Hot Wax combination.</p>
                 <Button className="card-btn" href="/components/pages/subpages/femalewaxing" style={{ backgroundImage: `url(${brushedMetal})` }}>Show Me</Button>
          
          </Col>
        </Row>
        
        </div>
    </>
  )
}