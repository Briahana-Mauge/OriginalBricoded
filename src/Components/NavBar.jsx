import React from 'react';
import { Link } from "react-router-dom";
import '../CSS/NavBar.css';

const NavBar = () => {
    return (
      <div className="app">
        <header className = 'nav'>
          <Link to="/">Home</Link> {' '}
          <Link to="/Projects">Projects</Link>{' '}
          <Link to="/about">About</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Link to="/days-of-code">Days Of Code</Link>{' '}
        </header>
  
     
      </div>
    );
  };
  export default NavBar;
  