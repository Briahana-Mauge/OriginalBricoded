import React from 'react'
import Pokemon from '../images/Pokemon.png';
import Holding from '../images/holding.png';
import Twitter from '../images/twitter.png';
import Endeavor from '../images/endeavor.png';
import BriFlix from '../images/BriFlix.png';
import '../CSS/Projects.css';
// import Contact from './Contact';
// import logoBlack from '../logoBlack.svg';
import NavBar2 from './NavBar2';
// import BackToTop from "react-back-to-top-button";
import { FaArrowUp } from 'react-icons/fa';
import BackToTop from './BackToTop';


const Projects = () => {
    return (
        <div className='projects'>
            <NavBar2 contact='other-pages' links='link' />

            <div className='cards'>
                <div className="card">
                    {/* <img src={Endeavor} alt="Avatar" />
                    <iframe src='https://www.youtube.com/embed/oaP1JNZTj6Q'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        width='100%'
                    height='209%'
                    /> */}
                    <img src={Endeavor} alt="Avatar" />
                    <div class="container">
                        <h4><b>Endeavor</b></h4>
                        <button><a
                            target='_blank'
                            href='https://endeavor-app.herokuapp.com/login'
                            className='btn'
                            rel='noopener noreferrer'
                        >Live</a></button>
                        <button><a
                            target='_blank'
                            href='https://youtu.be/oaP1JNZTj6Q'
                            className='btn'
                            rel='noopener noreferrer'
                        >Demo</a></button>
                        <button><a
                            target='_blank'
                            href='https://github.com/Briahana-Mauge/Endeavor'
                            className='btn'
                            rel='noopener noreferrer'>
                            Github</a></button>
                        <p>
                            A volunteer management full-stack app.
                        </p>
                    </div>
                </div>
                <br></br>

                <div class="card">
                    <img src={Holding} alt="Screenshot of holDING project" />
                    <div class="container">
                        <h4><b>holDING</b></h4>
                        <button disabled>Live</button>
                        <button><a
                            target='_blank'
                            href='https://github.com/Briahana-Mauge/holDING'
                            className='btn'
                            rel='noopener noreferrer'>
                            Github</a></button>

                        <p>
                            A social network consisting of micro social networks.
                        </p>
                    </div>
                </div>
                <br></br>

                <div class="card">
                    <img src={BriFlix} alt="Screenshot of BriFlix project" />
                    <div class="container">
                        <h4><b>BriFlix</b></h4>
                        <button disabled>Live</button>
                        <button><a
                            target='_blank'
                            href='https://github.com/Briahana-Mauge/BriFlix'
                            className='btn'
                            rel='noopener noreferrer'>
                            Github</a></button>

                        <p>
                            Track and comment on your favorite TV shows and movies.
                        </p>
                    </div>
                </div>
                <br></br>

                {/* <div class="card">
                    <img src={Pokemon} alt="Avatar" />
                    <div class="container">
                        <h4><b>Ethic Attire</b></h4>
                        <button>Live</button>
                        <button>Github</button>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <br></br> */}

                {/* <div class="card">
                    <img src={BrisViews} alt="Avatar" />
                    <div class="container">
                        <h4><b>Bri's Views</b></h4>
                        <button><a
                            target='_blank'
                            href='http://bris-views.herokuapp.com/'
                            className='btn'
                            rel='noopener noreferrer'>
                            Live</a></button>

                        <button><a
                            target='_blank'
                            href='https://github.com/Briahana-Mauge/YouTube-Clone'
                            className='btn'
                            rel='noopener noreferrer'>
                            Github</a></button>


                        <p>A simple cloned YouTube application.</p>
                    </div>
                </div> */}
                <br></br>

                <div class="card">
                    <img src={Pokemon} alt="Screenshot of Pokémon project" />
                    <div class="container">
                        <h4><b>Bri's PokéBattles</b></h4>
                        <button><a
                            target='_blank'
                            href='https://bris-pokebattles.netlify.app/'
                            className='btn'
                            rel='noopener noreferrer'>
                            Live</a></button>

                        <button><a
                            target='_blank'
                            href='https://github.com/Briahana-Mauge/Pokemon-Simulator'
                            className='btn'
                            rel='noopener noreferrer'>
                            Github</a></button>

                        <p>An app that simulates Pokemon battles.</p>
                    </div>
                </div>
                <br></br>


                <div class="card">
                    <img src={Twitter} alt="ScreenShot of Twitter Project" />
                    <div class="container">
                        <h4><b>Twitter Clone</b></h4>
                        <button><a
                            target='_blank'
                            href='https://briahana-mauge.github.io/Twitter-Clone/'
                            className='btn'
                            rel='noopener noreferrer'>
                            Live</a></button>
                        <button><a
                            target='_blank'
                            href='https://github.com/Briahana-Mauge/Twitter-Clone'
                            className='btn'
                            rel='noopener noreferrer'>
                            Github</a></button>

                        <p>A recreation the homepage of Twitter.</p>
                    </div>
                </div>
            </div>
            <BackToTop page={'project'} />
        </div >
    )
}

export default Projects;
