import React, { useState } from 'react';
import './navbar.css'
import Logo from '../../components/images/no-pyramid-logo-new.png';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)


    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)

        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <section className="section" id="header">
            <div className={navbar ? 'container scrolled-header' : 'container'}>
                <div className='nav-container grid'>
                    <img src={Logo} height="70px" width='150px' alt="" />
                    <nav className='nav--bar'>
                        <ul className='list-of-items'>
                            <li><a href="#">Home  <i className="icon-home"></i></a></li>
                            <li><a href="#">Packages <i className="icon-social-dropbox"></i></a></li>
                            <li><a href="#">Single Trips <i className="icon-location-pin"></i></a></li>
                            <li><a href="#">About <i className="icon-book-open"></i></a></li>
                        </ul>
                    </nav>
                    <button className='btn book-trip'>customize your trip</button>
                </div>
            </div>
        </section>
    )
}

export default Navbar
