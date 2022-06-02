import React from 'react'

const Footer = () => {

    let currYear = new Date();
    currYear = currYear.getFullYear();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <p>Portfolio Designed And Developed By AbdulRehman | {currYear}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;