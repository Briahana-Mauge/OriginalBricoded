import React from 'react'
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io'
import { DiPostgresql } from 'react-icons/di'
import logoBlack from '../logoBlack.svg';
import Contact from './Contact';

const Skills = () => {
    return (
        <div>
            <h5>Here is a peek at some of my full stack developer skills: </h5>

           
      
            <div className='skills'>
                <label><IoLogoJavascript className='icon' /><p>CSS 3</p></label>
                <label><FaHtml5 className='icon' /><p>HTML 5</p></label>
                <label><FaCss3Alt className='icon' /><p>CSS 3</p></label>
                <label><DiPostgresql className='icon' /><p>PostgreSQL</p></label>
                <label><FaReact className='icon' /><p>React</p></label>
                <label><FaNode className='icon' /><p>NodeJS</p></label>
                <label><FaGithub className='icon' /><p>GitHub</p></label>
                <label><FaGitAlt className='icon' /><p>Git</p></label>
            </div>
         </div>   
    )
}
export default Skills;