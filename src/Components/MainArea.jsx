import React from 'react'

const MainArea = () => {
    return (
        <div className="container">
            <div className="row mainAreaRow flex-sm-row flex-column-reverse justify-content-center align-items-center">
                <div className="col-sm-6 col-12 text-sm-start text-center">
                    <p className='mainAreaContent'>Hi,</p>
                    <p className='mainAreaContent'>I Am <span className='mainAreaName'>Abdul Rehman</span></p>
                    <p className='mainAreaContent'>Full Stack Web Developer.</p>
                    {/* <button className='mainAreaBtn'>View Resume</button> */}
                    <a href="/Abdul Rehman Resume.pdf" download className='mainAreaBtn'>View Resume</a>
                </div>
                <div className="col-sm-6 col-12 mainAreaImgSection text-sm-start text-center">
                    <img src="/images/myImg.png" alt="myImg" className='mainAreaImg' />
                    <p className='mainAreaImgStyle1'></p>
                </div>
            </div>
        </div>
    )
}

export default MainArea;