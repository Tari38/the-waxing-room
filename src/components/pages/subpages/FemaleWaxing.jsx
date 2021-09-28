import React, { Component } from "react";
import { Jumbotron, Table } from "reactstrap";

import "./styles/FemaleWaxing.css";

export default class FemaleWaxing extends Component {

  render() {
  return(
    <>
    <div className="f-waxing-container">
      <Jumbotron className="jumbotron">
        
        <h1>Female Waxing Services</h1>
      
      </Jumbotron>
      <div className="container">

        <Table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Wax Type</th>
              <th>Price (£)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">F01</th>
              <td>Lower Legs including Knees & Feet </td>
              <td>Strip Wax</td>
              <td>25.00</td>
            </tr>
            <tr>
              <th scope="row">F02</th>
              <td>Upper Legs including Knees only	</td>
              <td>Strip Wax</td>
              <td>25.00</td>
            </tr>
            <tr>
              <th scope="row">F03</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F04</th>
              <td>Full Legs including Knees & Feet </td>
              <td>Strip Wax</td>
              <td>40.00</td>
            </tr>
            <tr>
              <th scope="row">F05</th>
              <td>Back of Thighs only	</td>
              <td>Strip Wax</td>
              <td>15.00</td>
            </tr>
            <tr>
              <th scope="row">F06</th>
              <td>Feet and Toes	</td>
              <td>Strip Wax</td>
              <td>5.00</td>
            </tr>
            <tr>
              <th scope="row">F07</th>
              <td>Small/Base/Lower Back	</td>
              <td>Strip Wax</td>
              <td>10.00</td>
            </tr>
            <tr>
              <th scope="row">F08</th>
              <td>Half Stomach </td>
              <td>Strip Wax</td>
              <td>10.00</td>
            </tr>
            <tr>
              <th scope="row">F09</th>
              <td>Full Stomach	</td>
              <td>Strip Wax</td>
              <td>16.00</td>
            </tr>
            <tr>
              <th scope="row">F10</th>
              <td>Navel Line </td>
              <td>Strip Wax</td>
              <td>5.00</td>
            </tr>
            <tr>
              <th scope="row">F10A</th>
              <td>Navel Line - [All visible hair outside the knicker line] </td>
              <td>Hot Wax</td>
              <td>8.00</td>
            </tr>
            <tr>
              <th scope="row">F11</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F12</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F13</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F14</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F15</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F16</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F17</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F18</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F19</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
            <tr>
              <th scope="row">F20</th>
              <td>¾ Legs including Knees & Feet	</td>
              <td>Strip Wax</td>
              <td>30.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
      </>
  )
}
}