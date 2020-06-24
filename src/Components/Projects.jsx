import React from 'react'
import Pokemon from '../images/Pokemon.png';
import Holding from '../images/holding.png';
import Twitter from '../images/twitter.png';
import Endeavor from '../images/endeavor.png';
import '../CSS/Projects.css';
const Projects = () => {
    return (
        <>
            <h1>Projects</h1>

            <div className='cards'>

                <div class="card">
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
                        <button>Live</button>
                        <button><a
                            target='_blank'
                            href='https://youtu.be/oaP1JNZTj6Q'
                            className='btn'

                            rel='noopener noreferrer'
                        >Demo</a></button>
                        <button>Github</button>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <br></br>

                <div class="card">
                    <img src={Pokemon} alt="Avatar" />
                    <div class="container">
                        <h4><b>Ethic Attire</b></h4>
                        <button>Live</button>
                        <button>Github</button>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <br></br>

                <div class="card">
                    <img src={Pokemon} alt="Avatar" />
                    <div class="container">
                        <h4><b>Bri's Views</b></h4>
                        <button>Live</button>
                        <button>Github</button>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <br></br>

                <div class="card">
                    <img src={Pokemon} alt="Screenshot of Pokémon project" />
                    <div class="container">
                        <h4><b>Bri's PokéBattles</b></h4>
                        <button>Live</button>
                        <button>Github</button>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <br></br>

                <div class="card">
                    <img src={Holding} alt="Screenshot of holDING project" />
                    <div class="container">
                        <h4><b>holDING</b></h4>
                        <button disabled>Live</button>
                        <button>Github</button>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <br></br>



                <div class="card">
                    <img src={Twitter} alt="ScreenShot of Twitter Project" />
                    <div class="container">
                        <h4><b>Twitter Clone</b></h4>
                        <button>Live</button>
                        <button>Github</button>
                        <p>Architect & Engineer</p>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Projects;
