import React, { useState } from 'react'
import '../CSS/Home2.css';
import logoYellow from '../logoYellow.svg';
import emptyYellow from '../empty_yellow.PNG';
import Nav2 from './NavBar2';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';

const Home2 = () => {
    const [isShown, setIsShown] = useState(false);
    const [filler, setFiller] = useState(false);
    // const styles = {
    //     visibility: 'hidden'
    // }
    return (
        <>
            <div id='right'>
                <div id='info'>
                    <div id='white_box'>
                        <div id='white_text'>
                            <About />
                            <Skills />

                        </div>
                    </div>
                </div>
            </div>

            <div id='left'>
                <Nav2 />

                <div id='blue_text'>

                    {/* {   filler === '' ?
                    null: 
                        // <div className='filler' style={styles}><p>{filler}</p></div> : 
                        <div className='filler'><p>{filler}</p></div>
                    } */}

                    {   isShown ?
                        <><div className='filler'><p>{filler}</p></div><img src={emptyYellow} alt='logo here' /></> :
                        <img src={logoYellow} alt='logo here' />
                    }

                </div>

                <br />
                <Contact className='home' setIsShown={setIsShown}
                    setFiller={setFiller} />
            </div>
        </>
    )
}

export default Home2;





