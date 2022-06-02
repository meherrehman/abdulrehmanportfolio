import React from 'react'

const ProjectComp = ({ src, projTitle, projDesc }) => {
    return (
        <>
            <div className="col-lg-8 col-12">
                <video src={src} controls className='projectVideo'></video>
            </div>
            <div className="col-lg-4 col-12">
                <p className='projectDescHeader'>{projTitle}</p>
                <p className='projectDesc'>{projDesc}</p>
            </div>
            <hr />
        </>
    )
}

export default ProjectComp;