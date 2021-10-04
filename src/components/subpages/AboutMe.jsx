import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import vtctLogo from "../../../../public/images/icons/vtct-logo-new.png";
import elaine from "../../../../public/images/elaine.jpg";

import "./styles/AboutMe.css";

class AboutMe extends Component {

  render() {
  return(
    <>
    <div className="about-me-container">
      <Jumbotron className="jumbotron">
        <img src={elaine} alt="Elaine" className="about-img"></img>
        <h2>Hello, I'm Elaine ...</h2>
          <h4>I am a VTCT Qualified – Level 2 in Wax Depilation and Level 3 in Advanced Intimate Waxing.</h4>
          <img src={vtctLogo} alt="vtct qualification" className="about-img"></img>
        </Jumbotron>
        <div>
          <p>I have been trained at The Rooms, Stotfold in partnership with North Hertfordshire College as well as Omni Academy of Beauty, Walton on Thames.</p>
          <p>As an Intimate Waxing Specialist for all, I am fully insured as a Member of the Guild of Beauty Therapists (MGBT).</p>
          </div>

        <div>
          <h4>Why Waxing?</h4>
          <p>I am fortunate to be able to do a job I am passionate about.
            For me, it’s not just about what I remove, it is what I leave behind; healthy skin.  
            As I offer treatments from my home, this helps me to give the highest service possible as well as provide a friendly and comfortable environment.</p>
        </div>
      </div>
      </>
  )
  }
}

export default AboutMe;