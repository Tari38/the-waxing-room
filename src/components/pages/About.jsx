import React from "react";
import { Jumbotron, Card, CardImg, Row, Col } from 'reactstrap';
import perronRigot from "../../../public/images/sw-PerronRigot-logo.png";
import elaine from "../../../public/images/elaine.jpg";

// import map from "../../../public/images/map";

import "./styles/About.css";

export default function About() {

  return (
    <>
      <div className="about-container">
        <Jumbotron className="jumbotron">
          <h1>Salon Information</h1>
        </Jumbotron>

      <Row className="row" col="4">
        <Col className="col">
        <Card className="card">
          <h3>Opening Hours</h3>
          <a href="/components/subpages/OpeningHours">
            Opening Hours
          </a>
        </Card>
        </Col>

        <Col className="col">
        <Card className="card">
          <h3>Our Location</h3>
          <a href="/components/subpages/AboutMe">
            <CardImg className="map"  alt="map"></CardImg>
          </a>
        </Card>
        </Col>

        <Col className="col">
        <Card className="card">
          <h3>Perron Rigot Products</h3>
          <a href="/components/subpages/PRProducts">
            <CardImg className="perronRigot" src={perronRigot} alt="Perron Rigot logo"></CardImg>
          </a>
        </Card>
        </Col>
        
        <Col className="col">
        <Card className="card">
          <h3>About Me</h3>
          <a href="/components/subpages/AboutMe">
            <CardImg className="elaine" src={elaine} alt="Elaine"></CardImg>
          </a>
        </Card>
        </Col>
       </Row>   
          
        
       
        </div>
    </>
  )
}