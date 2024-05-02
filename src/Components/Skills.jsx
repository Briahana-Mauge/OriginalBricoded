import React from 'react'
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io'
import { DiPostgresql } from 'react-icons/di'
import { SiMui } from 'react-icons/si'
// import logoBlack from '../logoBlack.svg';
// import Contact from './Contact';

const Skills = () => {
    return (
        <div>
            <h5>Here is a peek at some of my full stack developer skills: </h5>



            <div className='skills'>
                <label className='skill'><IoLogoJavascript className='icon ' /><p>Javascript</p></label>
                <label className='skill'><FaGolang className='icon ' /><p>Golang</p></label>
                <label className='skill'><FaReact className='icon ' /><p>React</p></label>
                <label className='skill'>< SiMui className='icon ' /><p>Material UI</p></label>
                <label className='skill'><FaHtml5 className='icon ' /><p>HTML 5</p></label>
                <label className='skill'><FaCss3Alt className='icon ' /><p>CSS 3</p></label>
                <label className='skill'><DiPostgresql className='icon ' /><p>PostgreSQL</p></label>
                <label className='skill'><FaNode className='icon ' /><p>NodeJS</p></label>
                <label className='skill'><FaGithub className='icon ' /><p>GitHub</p></label>
                <label className='skill'><FaGitAlt className='icon ' /><p>Git</p></label>
            </div>
        </div>
    )
}
export default Skills;