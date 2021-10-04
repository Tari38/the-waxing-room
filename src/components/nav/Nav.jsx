import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";
import { Navbar, NavbarBrand } from "reactstrap";


import "./styles/NavBar.css";

function NavBar() {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <>
          
      <Navbar className="navbar justify-content-between" light expand="md" >
        <NavbarBrand className="nav-brand" href="/" style={{color: "rgb(253, 242, 228)"}}>
          The Waxing Room
        </NavbarBrand>
        
         <div className="nav-link">
          
          <Link className="nav-link" exact to="/" >Home</Link>
          
          <Link className="nav-link"  to="/components/pages/Services">Services</Link>
          
          <Link className="nav-link"  to="/components/pages/Contact">Contact Us</Link>
          
          <Link className="nav-link"  to="/components/pages/About">About</Link>
          
          <Link className="nav-link"  to="/components/pages/More">More</Link>
          
          
         </div>
         
          <button onClick={toggleMenu} className="menu-button">Menu</button>
         
      </Navbar>
     
    </>
  );
};

export default NavBar;
