import React from "react";
import {Link} from "react-scroll";

class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>
                    <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                        <li>
                            <Link activeClass="active" to="home" spy={true} smooth={true}>
                                <i class="fas fa-futbol"></i>
                                Jaewoo Cho
                            </Link>
                            </li>
                        <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                        <li><Link to="experience" spy={true} smooth={true}>Experience</Link></li>
                        <li><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
                        <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;