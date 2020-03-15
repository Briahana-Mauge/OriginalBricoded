import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {AiOutlineFilePdf, AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
    return (
        <>
            <h1>Contact</h1>
             <FaGithub className = 'icon contact' />
             <FaLinkedinIn className = 'icon contact' />
             <AiOutlineFilePdf className = 'icon contact' />
             <AiOutlineMail className = 'icon contact' />

        </>
    )
}

export default Contact;
