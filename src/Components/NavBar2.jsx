import React from 'react';
import { Link } from "react-router-dom";
// import Button from './Button';
import '../CSS/NavBar.css';
import { connect } from 'react-redux';
import Contact from './Contact';
import logoBlack from '../logoBlack.svg';

const NavBar = (props) => {
  if(props.contact){
  return (
    <div className="nav">
      <div className = 'small_div'>
        <img src={logoBlack} alt="logo in black" className='blackLogo' />
        
      <Contact className={`main ${props.contact}`} />
      </div>
      <header className= {`nav2 ${props.links}`}>
        <div className = 'new-nav'>
        <Link to="/">Home</Link> {' '}
        <Link to="/Projects">Projects</Link>{' '}
        <Link to="/days-of-code">Days Of Code</Link>{' '}
        {/* <Button /> */}
       </div>
       </header> 
       
    </div>
  );
} else{
  return (
    <div className="nav">
      <header className='nav2'>

        <Link to="/">Home</Link> {' '}
        <Link to="/Projects">Projects</Link>{' '}
        <Link to="/days-of-code">Days Of Code</Link>{' '}
        {/* <Button /> */}
      </header>


    </div>
  );
}
};
// export default NavBar;
const mapStateToProps = (state) => {
  return state;

}

export default connect(mapStateToProps)(NavBar)
