import React from 'react'
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaGitAlt } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io'
import {DiPostgresql} from 'react-icons/di'
import '../CSS/Home.css'

const Home = () => {
    return (
        <>
        
            <h1>Hi, I'm Briahana!</h1>
            
            <p>This YouTube clone was built by Briahana as part of her unit 4 assessment.</p>
            <p>Technologies used for this project include Youtube's API, React, CSS and several npm packages, like 'react-youtube'. </p>
            <p> On the home page, you can search for video and select your pick from the first 8 choices from your search. </p>
            

            <p>Some of my skills include: </p>
             <FaHtml5 className = 'icon' />
             <FaCss3Alt className = 'icon' />
             <IoLogoJavascript className = 'icon' />
             <FaNode className = 'icon' />
             <FaReact className = 'icon' /> 
             <FaGitAlt className = 'icon' />
             <DiPostgresql className = 'icon' />

        </>
    )
}

export default Home;