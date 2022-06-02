import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row p-2">
                <div className="col-12 text-center">
                    <Link to="/" className='navItem'>Home</Link>
                    <Link to="/Projects" className='navItem'>Projects</Link>
                    {/* <Link to="/" className='navItem'>Contact</Link> */}
                    <a href="https://api.WhatsApp.com/send?phone=03487330058" className='navItem'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;