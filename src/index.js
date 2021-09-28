import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MenuProvider from "react-flexible-sliding-menu";
import App from "./App";
import SideMenu from './components/nav/SideMenu';

import "./styles.css";


ReactDOM.render(
<BrowserRouter>
<MenuProvider direction="right" MenuComponent={SideMenu}>
  <App />
</MenuProvider>
</BrowserRouter>, 
document.getElementById("root")
);
