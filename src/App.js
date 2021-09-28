import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/nav/Nav";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import FemaleWaxing from "./components/pages/subpages/FemaleWaxing";
import MaleWaxing from "./components/pages/subpages/MaleWaxing";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import AboutMe from "./components/pages/subpages/AboutMe";
import OpeningHours from "./components/pages/subpages/OpeningHours";
import GoodToKnow from "./components/pages/Good-to-Know";
import Products from "./components/pages/Products";
import More from "./components/pages/More";

import Footer from "./components/partials/Footer";
import "./styles.css";


function App() {
  
  return (
    <>
          
    <Router>
      <div className="App">
        <NavBar />
        
          <Route path="/" exact><Home /></Route>
          <Route path="/components/pages/home" exact><Home /></Route>
          <Route path="/components/pages/services" ><Services /></Route>
          <Route path="/components/pages/contact" ><Contact /></Route>
          <Route path="/components/pages/about" ><About /></Route>
          <Route path="/components/pages/More" ><More /></Route>

          <Route path="/components/pages/subpages/femalewaxing" ><FemaleWaxing /></Route>
          <Route path="/components/pages/subpages/malewaxing" ><MaleWaxing /></Route>
          <Route path="/components/pages/subpages/aboutme" ><AboutMe /></Route>
          <Route path="/components/pages/subpages/opening-hours" ><OpeningHours /></Route>
          <Route path="/components/pages/good-to-know" ><GoodToKnow /></Route>
          <Route path="/components/pages/products" ><Products /></Route>
        
        
        
      </div>
    </Router>
    <Footer />
    </>
    
  );
};

export default App;
