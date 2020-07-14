import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineFilePdf, AiOutlineMail } from 'react-icons/ai'

const Contact = (props) => {
    return (
        <div className = {`contact-icons ${props.className}`}>
            {/* <h1>Contact</h1> */}

            <a
                target='_blank'
                href='https://github.com/Briahana-Mauge'
                className={`icon contact ${props.className}`}
                rel='noopener noreferrer'
                title = 'GitHub'>
                <label><FaGithub className={`icon contact ${props.className}`} /><p className = 'label-name'>GitHub</p></label>
            </a>

            <a
                target='_blank'
                href='https://www.linkedin.com/in/bmauge/'
                className={`icon contact ${props.className}`}
                rel='noopener noreferrer'>
                <label><FaLinkedinIn className={`icon contact ${props.className}`} /><p>Linked In</p></label>
            </a>

            <a
                target='_blank'
                href='https://drive.google.com/file/d/1XX9OyRoHK7nzdmlKs1A0Zn0pqLa7bUKK/view?usp=sharing'
                className={`icon contact ${props.className}`}
                rel='noopener noreferrer'>
                <label><AiOutlineFilePdf className={`icon contact ${props.className}`} /><p>Resume</p></label>
            </a>

            <a
                href='mailto:briahanamauge@pursuit.org'
                className={`icon contact ${props.className}`}>
                <label><AiOutlineMail className={`icon contact ${props.className}`} /><p>Email</p></label>
            </a>

        </div>
    )
}

export default Contact;
