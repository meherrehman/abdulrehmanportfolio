import React from 'react'
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";
import ProjectComp from "./Components/ProjectComp";

const AllProjects = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <div className="row">
                    <ProjectComp src="/videos/netflix_clone.mp4" projTitle="Netflix Clone" projDesc="this is netflix clone developed and designed with reactjs,html5,css3,bootstrap5 also in this project an API is used i.e TMDB to fetch all movies data and other movies info." />

                    <ProjectComp src="/videos/restaurantapp.mp4" projTitle="Restaurant App" projDesc="this is restaurant app developed and designed with reactjs,html5,css3,bootstrap5 and at the backend nodejs , expressJs and mongoose is used to connect Database.MongoDb is used as DataBase in this project. * Not Focused On the UI part *" />

                    <ProjectComp src="/videos/weatherapp.mp4" projTitle="Weather App" projDesc="this is weather website app developed and designed with reactjs,html5,css3,bootstrap5 also in this project an API is used i.e open weather map api to fetch all current weather status" />

                    <ProjectComp src="/videos/signup1.mp4" projTitle="SignUp Form" projDesc="this is sign up form developed and designed with reactjs,html5,css3,bootstrap5,javascript" />

                    <ProjectComp src="/videos/chat app.mp4" projTitle="Real Time Chat App" projDesc="this real time chat application developed and designed with reactjs,html5,css3,bootstrap5,javascript,socket-io client and at the backend nodejs and expressjs is used." />

                    <ProjectComp src="/videos/template3.mp4" projTitle="PSD To ReactJs" projDesc="this is a Psd template developed , designed and converted with reactjs,html5,css3,bootstrap5,javascript" />

                    <ProjectComp src="/videos/social media app.mp4" projTitle="Simple Social Media App" projDesc="this is a social media app developed and designed with reactjs,html5,css3,bootstrap5,javascript,redux/redux toolkit." />

                    <ProjectComp src="/videos/template1.mp4" projTitle="Website Template" projDesc="this is a Psd template developed , designed and converted with html5,css3,bootstrap5,javascript" />

                    <ProjectComp src="/videos/psd2.mp4" projTitle="PSD To Html" projDesc="this is a Psd template developed , designed and converted with html5,css3,bootstrap5,javascript,jQuery" />

                    <ProjectComp src="/videos/login3(insta).mp4" projTitle="Instagram Login Page Clone" projDesc="this is a Psd template developed , designed and converted with html5,css3,bootstrap5,javascript" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllProjects;