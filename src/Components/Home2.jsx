import React, { useState } from 'react'
import '../CSS/Home2.css';
import emptyYellow from '../empty_yellow.PNG';
import Nav2 from './NavBar2';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
// import { Img } from 'react-image'
import ImageLoad from './ImageLoader';


const Home2 = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [filler, setFiller] = useState(false);
    console.log(props.src);
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
                    <div className='filler'>

                        {
                            filler ?
                                <p>{filler}</p> :
                                (<>{setFiller('www.')},
                                <p>{filler}</p> </>)
                        }
                    </div>
                    <ImageLoad src={emptyYellow} placeholder={emptyYellow} alt="testing" />
                </div>

                <br />
                <Contact className='home' setIsShown={setIsShown} isShown={isShown}
                    setFiller={setFiller} />
            </div>
        </>
    )
}

export default Home2;




