import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import '../CSS/NavBar.css';

const NavBar = (props) => {
    return (
      <div className="nav">
        
        <header className = 'nav'>
          <Link to="/">Home</Link> {' '}
          <Link to="/Projects">Projects</Link>{' '}
          <Link to="/about">About</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Link to="/days-of-code">Days Of Code</Link>{' '}
          <Button handleSwitch = {props.handleSwitch}/>
        </header>
  
     
      </div>
    );
  };
  export default NavBar;
  