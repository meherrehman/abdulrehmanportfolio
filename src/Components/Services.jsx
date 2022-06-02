import React from 'react'

const Services = () => {
    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className='ServiceHeader'>Services</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex servicesItemParent flex-md-row flex-column justify-content-around">
                        <div className='ServiceItemBox text-center'>
                            <img src="https://img.icons8.com/nolan/48/launchbox.png" alt='serviceIcon' />
                            <p className=' ServiceItemBoxHeader'>FrontEnd</p>
                            <ul>
                                <li className='text-start serviceItems'>Html5</li>
                                <li className='text-start serviceItems'>Css3</li>
                                <li className='text-start serviceItems'>Bootstrap 4/5</li>
                                <li className='text-start serviceItems'>JQuery</li>
                                <li className='text-start serviceItems'>JavaScript</li>
                                <li className='text-start serviceItems'>MaterialUi</li>
                                <li className='text-start serviceItems'>ReactJs</li>
                                <li className='text-start serviceItems'>NextJs</li>
                                <li className='text-start serviceItems'>Redux / Redux Toolkit</li>
                            </ul>
                        </div>
                        <div className='ServiceItemBox text-center'>
                            <img src="https://img.icons8.com/color/48/undefined/backend-development.png" alt='serviceIcon' />
                            <p className=' ServiceItemBoxHeader'>BackEnd</p>
                            <ul>
                                <li className='text-start serviceItems'>NodeJs</li>
                                <li className='text-start serviceItems'>ExpressJs</li>
                                <li className='text-start serviceItems'>Rest APIs</li>
                                <li className='text-start serviceItems'>SSR</li>
                            </ul>
                        </div>
                        <div className='ServiceItemBox text-center'>
                            <img src="https://img.icons8.com/ios-filled/48/undefined/database.png" alt='serviceIcon' />
                            <p className=' ServiceItemBoxHeader'>DataBases</p>
                            <ul>
                                <li className='text-start serviceItems'>MongoDb</li>
                                <li className='text-start serviceItems'>FireBase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;