import React from "react";

import "./Footer.css";

const CURRENTYEAR = new Date().getFullYear();

function Footer() {
  return (
    <>
    <div className="footer">
    <footer>
    
      <p>© {CURRENTYEAR} by SD Web Development</p>
      
    </footer>
    </div>
    </>
  )
};

export default Footer;