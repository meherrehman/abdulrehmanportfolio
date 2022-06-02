import React from 'react'

const About = () => {
    return (
        <>
            <div className="container-sm container-fluid my-5">
                {/* <div className="row">
                    <div className="col-12 text-center">
                        <p className='AboutHeader'>About Me</p>
                    </div>
                </div> */}
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-12 text-center">
                        <img src="/images/about.png" alt="aboutSideImg" className='aboutSideImg' />
                    </div>
                    <div className="col-md-6 col-12 ">
                        <span className='AboutContentHeader'>Hi There !</span>
                        <p className='AboutContentDesc'>my name is abdulrehman and i am currently a student of bsit having more than 1 year of experience in web development and designing.</p>
                        <div className="row">
                            <div className="col-sm-6 col-12">
                                <p className='aboutInfoHeader'>Phone No.</p>
                                <p className='aboutInfoDesc'>+92 307 6008905</p>
                                <p className='aboutInfoHeader'>Email</p>
                                <p className='aboutInfoDesc'>mianrehman7495@gmail.com</p>
                            </div>
                            <div className="col-sm-6 col-12">
                                <p className='aboutInfoHeader'>LinkdeIn</p>
                                <p className='aboutInfoDesc'>mianrehman7495@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;