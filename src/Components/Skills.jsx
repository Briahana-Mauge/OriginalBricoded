import React from 'react'
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io'
import { DiPostgresql } from 'react-icons/di'

const Skills = () => {
    return (
        <>
            <p>Some of my skills include: </p>
            <FaHtml5 className='icon' />
            <FaCss3Alt className='icon' />
            <IoLogoJavascript className='icon' />
            <FaNode className='icon' />
            <FaReact className='icon' />
            <FaGitAlt className='icon' />
            <DiPostgresql className='icon' />
        </>
    )
}
export default Skills;