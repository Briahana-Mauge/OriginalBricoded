import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineFilePdf, AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className = 'Contact-icons'>
            {/* <h1>Contact</h1> */}

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

        </div>
    )
}

export default Contact;
