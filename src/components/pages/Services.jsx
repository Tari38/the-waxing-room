import React from "react";
import { Button, Card, CardBody, CardDeck, CardHeader, Jumbotron } from "reactstrap";
import maleIcon from "../../../public/images/icons/male_edited_edited_edited.png";
import femaleIcon from "../../../public/images/icons/female_edited_edited.png";
import brushedMetal from "../../../public/images/brushed-metal.jpg";

import "./styles/Services.css";

export default function Services() {

  return (
    <>
    
      <div className="services-container">
        
        <Jumbotron className="serv-jumbotron">
          <h1>Waxing Services</h1>
        </Jumbotron>

        <CardDeck>   
          <Card className="card1">
            <CardHeader>
            <img src={maleIcon} alt="male symbol" className="icon"></img>
            </CardHeader>
            <CardBody>
              <h3>Male Waxing</h3>
              <hr />
              <p>Strip Wax, Hot Wax, Strip & Hot Wax combination.</p>
                         
              <Button className="services-button" href="/components/subpages/malewaxing" style={{ backgroundImage: `url(${brushedMetal})` }}>Show Me</Button>
            </CardBody>
          </Card>
       
          <Card className="card">
            <CardHeader>
            <img src={femaleIcon} alt="female symbol" className="icon2"></img>
            </CardHeader>
            <CardBody>
              <h3>Female Waxing</h3>
              <hr />
              <p>Strip Wax, Hot Wax & Strip & Hot Wax combination.</p>
                
              <Button className="services-button" href="/components/subpages/femalewaxing" style={{ backgroundImage: `url(${brushedMetal})` }}>Show Me</Button>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    
    </>
  )
}