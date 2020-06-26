import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import '../CSS/Sidebar.css'
import Button from './Button';
import { connect } from 'react-redux';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { AiOutlineFilePdf, AiOutlineMail } from 'react-icons/ai'
import Contact from './Contact';

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <div>
        <Menu className = 'hamburger'
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Link onClick={() => this.closeMenu()} className='menu-item' to="/">Home</Link>
          {/* <Link onClick={() => this.closeMenu()} className="menu-item" to="/about">About</Link> */}
          {/* <Link onClick={() => this.closeMenu()} className="menu-item" to="/contact">Contact</Link> */}
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/skills">Skills</Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/projects">Projects</Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/days-of-code">Days of Code</Link>
          {/* <Button /> */}
          <Contact className = 'menu'/>
          {/* <div className = 'Contact-icons'>
            

            <a
                target='_blank'
                href='https://github.com/Briahana-Mauge'
                className='icon contact'
                rel='noopener noreferrer'>
                <FaGithub className='icon contact' />
            </a>

            <a
                target='_blank'
                href='https://www.linkedin.com/in/bmauge/'
                className='icon contact'
                rel='noopener noreferrer'>
                <FaLinkedinIn className='icon contact' />
            </a>

            <a
                target='_blank'
                href='https://docs.google.com/document/d/1xkq1KqpZ4ycZ17BtYJ6Jtu5AXyAslX9RXDLNcrjk7iM/edit?usp=sharing'
                className='icon contact'
                rel='noopener noreferrer'>
                <AiOutlineFilePdf className='icon contact' />
            </a>

            <a
                href='mailto:briahanamauge@pursuit.org'
                className='icon contact'>
                <AiOutlineMail className='icon contact' />
            </a>

        </div> */}
        </Menu>
      </div>
    )
  }
}
// export default HamburgerMenu
const mapStateToProps = (state) => {
  return state;

}

export default connect(mapStateToProps)(HamburgerMenu)