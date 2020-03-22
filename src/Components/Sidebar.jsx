import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import '../CSS/Sidebar.css'
import Button from './Button';

export default props => {
  return (
    <Menu className = 'menu'>
      <Link className = 'menu-item' to = "/">Home</Link>

      <Link className="menu-item" to="/projects">Projects</Link>

      <Link className="menu-item" to="/about">
        About
      </Link>

      <Link className="menu-item" to="/contact">
        Contact
      </Link>
      <Link className="menu-item" to="/days-of-code">
        Days of Code
      </Link>
      {/* <Button handleSwitch = {props.handleSwitch} switched =  {true} /> */}
      {/* <label className="switch" >
                <input type="checkbox"  onChange= {props.handleSwitch} checked = {true}/>
                <span className="slider round"></span>
            </label> */}
    </Menu>
  );
};