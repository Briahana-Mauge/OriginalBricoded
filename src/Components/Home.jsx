import React from 'react'
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaGitAlt } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io'
import {DiPostgresql} from 'react-icons/di'
import '../CSS/Home.css'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
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
