import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import "./styles/DropDownMenu.css";

export default function DropDownMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (

    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        More
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Waxing Etiquette</DropdownItem>
        <DropdownItem>Read More</DropdownItem>
        <DropdownItem text>Advice</DropdownItem>
        <DropdownItem>Read More</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Waxing Aftercare</DropdownItem>
        <DropdownItem>Perron Rigot</DropdownItem>
        <DropdownItem>Terms & Conditions</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}