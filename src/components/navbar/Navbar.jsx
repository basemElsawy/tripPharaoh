import React from 'react';
import './navbar.css'
import Logo from '../../components/images/no-pyramid-logo-new.png';
const Navbar = () => {
    return (
        <section className="section" id="header">
            <div className="container">
                <div className='nav-container grid'>
                    <img src={Logo} height="50px" width='200px' alt="" />
                    <nav className='nav--bar'>
                        <ul className='list-of-items'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Packages</a></li>
                            <li><a href="#">Single Trips</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                    <button className='btn book-trip'>Book your trip</button>
                </div>
            </div>
        </section>
    )
}

export default Navbar
