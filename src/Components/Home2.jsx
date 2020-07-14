import React from 'react'
import '../CSS/Home2.css';
import logoYellow from '../logoYellow.svg';
import Nav2 from './NavBar2';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';

const Home2 = () => {
    return (
        <>

            <div id='right'>
                <div id='info'>
                    <div id='white_box'>
                        <div id='white_text'>
                           <About/>
                           <Skills/>
                           {/* <br/>
                           <br/>
                           <br/> */}
                    
                        </div>
                    </div>
                </div>
            </div>

            <div id='left'>
                <Nav2 />
                <div id='blue_text'>
                    <img src = {logoYellow} alt='logo here'/>
                    {/* <h1>BriCoded</h1> */}
                    {/* <p> We've added tons of cool features, including ...</p> */}

                </div>
<br/>
<Contact className = 'home'/>
            </div>
            
        </>
    )
}

export default Home2;





