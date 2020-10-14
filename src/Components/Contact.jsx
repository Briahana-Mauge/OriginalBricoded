import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineFilePdf, AiOutlineMail } from 'react-icons/ai'

const Contact = (props) => {
    console.log(props)
    if (props.className === 'main other-pages' || props.sidebar) {

        return (
            <div className={`contact-icons sidebar ${props.className}`}>
                <a
                    target='_blank'
                    href='https://github.com/Briahana-Mauge'
                    className={`icon contact otherIcon ${props.className}`}
                    rel='noopener noreferrer'
                    title='GitHub'>
                    <label><FaGithub className={`icon contact otherIcon sidebarIcon ${props.className}`} /><p className='label-name'>GitHub</p></label>
                </a>

                <a
                    target='_blank'
                    href='https://www.linkedin.com/in/bmauge/'
                    className={`icon contact otherIcon ${props.className}`}
                    rel='noopener noreferrer'>
                    <label><FaLinkedinIn className={`icon contact sidebarIcon ${props.className}`} /><p>LinkedIn</p></label>
                </a>

                <a
                    target='_blank'
                    href='https://docs.google.com/document/d/1mIMbMChCLFeGLR2leAZxgg0ArX7juJlKLCcp71IYJF0/edit?usp=sharing'
                    className={`icon contact otherIcon ${props.className}`}
                    rel='noopener noreferrer'>
                    <label><AiOutlineFilePdf className={`icon contact otherIcon sidebarIcon ${props.className}`} /><p>Resume</p></label>
                </a>

                <a
                    href='mailto:bricoded@gmail.com'
                    className={`icon contact otherIcon ${props.className}`}>
                    <label><AiOutlineMail className={`icon contact otherIcon sidebarIcon ${props.className}`} /><p>Email</p></label>
                </a>

            </div>
        )
    } else {
        return (
            <div className={`contact-icons ${props.className}`}>
                <a
                    target='_blank'
                    href='https://github.com/Briahana-Mauge'
                    className={`icon contact ${props.className}`}
                    rel='noopener noreferrer'
                    title='GitHub'
                     onMouseEnter={() => { return (props.setIsShown('Github'), props.setFiller('GitHub')) }}
                    onMouseLeave={() => { return (props.setIsShown(false), props.setFiller('')) }}>
                    <label ><FaGithub className={`icon contact ${props.className}`} /><p className='label-name'>GitHub</p></label>
                </a>

                <a
                    target='_blank'
                    href='https://www.linkedin.com/in/bmauge/'
                    className={`icon contact ${props.className}`}
                    rel='noopener noreferrer'
                    onMouseEnter={() => { return (props.setIsShown('Linked In'), props.setFiller('LinkedIn')) }}
                    onMouseLeave={() => { return (props.setIsShown(false), props.setFiller('')) }} >
                    <label><FaLinkedinIn className={`icon contact ${props.className}`} /><p>LinkedIn</p></label>
                </a>

                <a
                    target='_blank'
                    href='https://docs.google.com/document/d/1mIMbMChCLFeGLR2leAZxgg0ArX7juJlKLCcp71IYJF0/edit?usp=sharing'
                    className={`icon contact ${props.className}`}
                    rel='noopener noreferrer'
                    onMouseEnter={() => { return (props.setIsShown('Resume'), props.setFiller('Résumé')) }}
                    onMouseLeave={() => { return (props.setIsShown(false), props.setFiller('')) }} >
                    <label><AiOutlineFilePdf className={`icon contact ${props.className}`} /><p>Resume</p></label>
                </a>

                <a
                    href='mailto:bricoded@gmail.com'
                    className={`icon contact ${props.className}`}
                    onMouseEnter={() => { return (props.setIsShown('Email'), props.setFiller('Email')) }}
                    onMouseLeave={() => { return (props.setIsShown(false), props.setFiller('')) }} >
                    <label><AiOutlineMail className={`icon contact ${props.className}`} /><p>Email</p></label>
                </a>

            </div>
        )
    }
}

export default Contact;
