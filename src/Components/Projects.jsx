import React from 'react'
import ProjectComp from './ProjectComp';
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className='projectHeader'>Projects</p>
                    </div>
                </div>
                <div className="row mt-3 projectBox">
                    <ProjectComp src="/videos/netflix_clone.mp4" projTitle="Netflix Clone" projDesc="this is netflix clone developed and designed with reactjs,html5,css3,bootstrap5 also in this project an API is used i.e TMDB to fetch all movies data and other movies info." />
                </div>
                <div className="row text-center">
                    <Link to="/Projects"><button className='projectBtn'>See All Projects</button></Link>
                </div>
            </div>
        </>
    )
}

export default Projects;