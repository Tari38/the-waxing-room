import React from "react";
import { Jumbotron, Table } from "reactstrap";
import "./styles/OpeningHours.css";

import twrLogo from "../../../../public/images/the-waxing-room.jpg";

export default function OpeningHours() {

  return(
    <>
    <div className="container">
      <Jumbotron className="jumbotron">
        <img src={twrLogo} alt="the waxing room logo"></img>
      </Jumbotron>
      
      <div className="table-container">
      <Table className="table" bordered>
      <thead>
        <tr>
          <th>DAY</th>
          <th>TIME</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MONDAY</td>
          <td>10am - 6pm</td>
        </tr>
        <tr>
          <td>TUESDAY</td>
          <td>10am - 6pm</td>
        </tr>
        <tr>
          <td>WEDNESDAY</td>
          <td>Closed</td>
        </tr>
        <tr>
          <td>THURSDAY</td>
          <td>10am - 6pm</td>
        </tr>
        <tr>
          <td>FRIDAY</td>
          <td>10am- 6pm</td>
        </tr>
        <tr>
          <td>SATURDAY</td>
          <td>10am - 2pm</td>
        <tr>
          <td>SUNDAY</td>
          <td>Closed</td>
        </tr>
        </tr>
      </tbody>
    </Table>
   </div>
   </div>
   </>
  )
}