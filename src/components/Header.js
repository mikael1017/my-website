import React from "react";
import { useState } from 'react';
import {Link} from "react-scroll";
import "./header.css";

function Header() {
    const [click, setClick] = useState(false);

    const handleMenuClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a className="name" href="https://www.linkedin.com/in/chojaewoo/" target="_blank" rel="noopener noreferrer">
                        Jaewoo Cho
                        <i class="fab fa-linkedin"></i>
                    </a>

                    <div className='menu-icon' onClick={handleMenuClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <Link className='nav-links' to="about" spy={true} smooth={true} onClick={handleMenuClick}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links' to="experience" spy={true} smooth={true} onClick={handleMenuClick}>Experience</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links' to="portfolio" spy={true} smooth={true} onClick={handleMenuClick}>Portfolio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links' to="contact" spy={true} smooth={true} onClick={handleMenuClick}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>


            <div className="navbar-name">
                <h1 className="name">Jaewoo</h1>
                {/* <p className="my-description">Working as a QA Test Engineer</p>
                <p className="my-description">In a process of becoming a Software Developer</p> */}
            </div>
        </>
    )
}

export default Header;