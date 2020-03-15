import React from 'react'
import Pokemon from '../images/Pokemon.png';
import '../CSS/Projects.css';
const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
            <div class="card">
                <img src= {Pokemon} alt="Avatar" />
                    <div class="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
</div>
        </>
            )
        }
        
        export default Projects;
