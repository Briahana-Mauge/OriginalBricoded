import React from 'react'

import '../CSS/Home.css'
import logoBlack from '../logoBlack.svg';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
    return (
        <div id='content'>
            <img id='blackLogo' src={logoBlack} alt="logo in black" />

            <div> 
                {/* <h1>Hi, I'm Briahana!</h1>

                <p>I am a full-stack software engineer who enjoys working on cross functional teams. </p>
                <p>When I'm not building with React, you can find me snuggled in a corner reading or listening to my favorite podcasts.
                Keep scrolling to view some of my projects. I look forward to connecting with you.
                </p> */}
<About/>
<Skills/>
                
            </div>
            <br/> 
            <br/> 
            <br/>
            <Contact/>
        </div>
    )
}

export default Home;