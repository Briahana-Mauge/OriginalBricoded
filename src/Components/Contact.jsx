import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineFilePdf, AiOutlineMail } from 'react-icons/ai'

const Contact = (props) => {
    return (
        <div className = 'Contact-icons'>
            {/* <h1>Contact</h1> */}

            <a
                target='_blank'
                href='https://github.com/Briahana-Mauge'
                className={`icon contact ${props.className}`}
                rel='noopener noreferrer'>
                <FaGithub className={`icon contact ${props.className}`} />
            </a>

            <a
                target='_blank'
                href='https://www.linkedin.com/in/bmauge/'
                className={`icon contact ${props.className}`}
                rel='noopener noreferrer'>
                <FaLinkedinIn className={`icon contact ${props.className}`} />
            </a>

            <a
                target='_blank'
                href='https://drive.google.com/file/d/1XX9OyRoHK7nzdmlKs1A0Zn0pqLa7bUKK/view?usp=sharing'
                className={`icon contact ${props.className}`}
                rel='noopener noreferrer'>
                <AiOutlineFilePdf className={`icon contact ${props.className}`} />
            </a>

            <a
                href='mailto:briahanamauge@pursuit.org'
                className={`icon contact ${props.className}`}>
                <AiOutlineMail className={`icon contact ${props.className}`} />
            </a>

        </div>
    )
}

export default Contact;
