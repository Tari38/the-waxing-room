import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/nav/Nav";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import More from "./components/pages/More";

import FemaleWaxing from "./components/subpages/FemaleWaxing";
import MaleWaxing from "./components/subpages/MaleWaxing";
import AboutMe from "./components/subpages/AboutMe";
import OpeningHours from "./components/subpages/OpeningHours";
import PRProducts from "./components/subpages/PRProducts";
import WaxingEtiquette from "./components/subpages/Etiquette";
import Aftercare from "./components/subpages/Aftercare";

import Footer from "./components/partials/Footer";

import "./styles.css";

function App() {
  
  return (
    <>
       <div>   
    <Router>
      <div className="App">
        <NavBar />
        {/* main pages */}
          <Route path="/" exact><Home /></Route>
          <Route path="/components/pages/home" exact><Home /></Route>
          <Route path="/components/pages/services" ><Services /></Route>
          <Route path="/components/pages/contact" ><Contact /></Route>
          <Route path="/components/pages/about" ><About /></Route>
          <Route path="/components/pages/more" ><More /></Route>
        {/* subpages */}
          <Route path="/components/subpages/femalewaxing" ><FemaleWaxing /></Route>
          <Route path="/components/subpages/malewaxing" ><MaleWaxing /></Route>
          <Route path="/components/subpages/prproducts" ><PRProducts /></Route>
          <Route path="/components/subpages/aboutme" ><AboutMe /></Route>
          <Route path="/components/subpages/openinghours" ><OpeningHours /></Route>
          <Route path="/components/subpages/etiquette" ><WaxingEtiquette /></Route>
          <Route path="/components/subpages/aftercare" ><Aftercare /></Route>
      </div>
    </Router>
      <div>
        <Footer />
      </div>
      </div>
    </>
    
  );
};

export default App;
