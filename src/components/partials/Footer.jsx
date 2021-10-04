import React from "react";
import twrLogo from "../../../public/images/the-waxing-room.jpg";
import Spin from 'react-reveal/Spin';

import "./Footer.css";

const CURRENTYEAR = new Date().getFullYear();

function Footer() {
  return (
    <>
    <div className="footer">
    <footer>
    <Spin><img className="twrLogo" src={twrLogo} alt="the waxing room logo"></img></Spin>
    
      <p>© {CURRENTYEAR} by <span><a href="https://sd-web-development.business.site">SD Web Development</a></span></p>
      
    </footer>
    </div>
    </>
  )
};

export default Footer;