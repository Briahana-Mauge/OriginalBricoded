import React from 'react'
import '../CSS/Home2.css';
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io'
import { DiPostgresql } from 'react-icons/di'
import logoYellow from '../logoYellow.svg';
import Nav2 from './NavBar2';

const Home2 = () => {
    return (
        <>

            <div id='right'>
                <div id='info'>
                    <div id='white_box'>
                        <div id='white_text'>
                            <h1> Hi, I'm Briahana! </h1>
                            <h2 id='join'> I am a full stack web developer.</h2>
                            <p>Some of my skills include:</p>
                            <FaHtml5 className='icon' />
                            <FaCss3Alt className='icon' />
                            <IoLogoJavascript className='icon' />
                            <FaNode className='icon' />
                            <FaReact className='icon' />
                            <FaGitAlt className='icon' />
                            <DiPostgresql className='icon' />
                        </div>
                    </div>
                </div>
            </div>

            <div id='left'>
                <Nav2 />
                <div id='blue_text'>
                    <img src = {logoYellow} alt='logo here' />
                    {/* <h1>BriCoded</h1> */}
                    {/* <p> We've added tons of cool features, including ...</p> */}

                </div>

            </div>
        </>
    )
}

export default Home2;





