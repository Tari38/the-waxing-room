import React, { Component } from "react";
import { Jumbotron, Table } from "reactstrap";

import "./styles/MaleWaxing.css";

export default class MaleWaxing extends Component {

  render() {
  return(
    <>
    <div className="f-waxing-container">
      <Jumbotron className="jumbotron">
        
        <h1>Male Waxing Services</h1>
      
      </Jumbotron>
      <div className="container">

      <Table>
        </Table>
        </div>
    </div>
    </>
  )
  }
}