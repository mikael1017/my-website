import React from "react";
import {Link} from "react-scroll";

class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>
                    <a href="home">
                        <i class="fab fa-connectdevelop"></i>
                        <span className='navbar title'>Jaewoo Cho</span>
                    </a>
                    <span><Link to="about" spy={true} smooth={true}>About</Link></span>
                    <span><Link to="experience" spy={true} smooth={true}>Experience</Link></span>
                    <span><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link></span>
                    <span><Link to="contact" spy={true} smooth={true}>Contact</Link></span>
                </nav>
            </header>
        )
    }
}

export default Header;