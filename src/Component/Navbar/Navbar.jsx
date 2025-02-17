import React, { useState } from 'react';
import '../Navbar/Navbar.scss';
import { NavLink } from 'react-router-dom';
import logoimg from '../../assets/logo.png';
import livepeople from '../../assets/livepeople.png';
import popupbutton from '../../assets/popupbutton.png';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='header'>
            <nav className='nav'>

                <div className='logo'>
                    <img
                        src={logoimg}
                        alt="Logo"
                        id='websitelogo'
                    />
                </div>
                <div className={`fullscreen ${isOpen ? "open" : ""}`}>

                    <ul>
                        <li><NavLink to="/" style={{ fontWeight: "600" }} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                        <li><NavLink to="/Services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink></li>
                        <li><NavLink to="/Blogs" className={({ isActive }) => (isActive ? "active" : "")}>Blogs</NavLink></li>
                        <li><NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
                        <li><NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
                    </ul>

                    <div className='container'>
                        <img
                            src={livepeople}
                            alt="Live People"
                            className='livenow'
                        />
                        <button className='btn'>Book Now</button>
                    </div>
                </div>
                <div className='popup' onClick={handleClick}>
                    <img
                        src={popupbutton}
                        alt="Popupbutton"
                        id='popupimg'
                    />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;