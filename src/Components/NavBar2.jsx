import React from 'react';
import { Link } from "react-router-dom";
// import Button from './Button';
import '../CSS/NavBar.css';
import { connect } from 'react-redux';
// import Contact from './Contact';
// import logoBlack from '../logoBlack.svg';
import crownYellow from '../crown_yellow.PNG';
import crownBlack from '../crown_black.PNG';
const NavBar = (props) => {
  if (props.contact) {
    return (
      <div className="nav">
        <header className= {`nav2 ${props.links}`}>

          {/* <div className='new-nav'> */}
          <Link to="/"><img className='crown' src={crownBlack} alt='small crown in B=black hovering over "home" button'></img><p>Home</p></Link> {' '}
          <Link to="/Projects"><img className='crown' src={crownBlack} alt='small crown in black hovering over "projects" button'></img><p>Projects</p></Link>{' '}
          <Link to="/days-of-code"><img className='crown' src={crownBlack} alt='small crown in black hovering over "days of code" button'></img><p>Days Of Code</p></Link>{' '}
            {/* <Button /> */}
          {/* </div> */}
        </header>

        {/* <div className='small_div'> */}
          {/* <img src={logoBlack} alt="logo in black" className='blackLogo' /> */}

          {/* <Contact className={`main ${props.contact}`} /> */}
        {/* </div> */}


      </div>
    );
  } else {
    return (

      <div className="nav">
        <header className='nav2 main-nav2'>

          <Link to="/"><img className='crown' src={crownYellow} alt='small crown in yellow hovering over "home" button'></img><p>Home</p></Link> {' '}
          <Link to="/Projects"><img className='crown' src={crownYellow} alt='small crown in yellow hovering over "projects" button'></img><p>Projects</p></Link>{' '}
          <Link to="/days-of-code"><img className='crown' src={crownYellow} alt='small crown in yellow hovering over "days of code" button'></img><p>Days Of Code</p></Link>{' '}
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
