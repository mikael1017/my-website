import React from "react";
import {Link} from "react-scroll";

class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>
                    <Link className="name" activeClass="active" to="home" spy={true} smooth={true}>
                        Jaewoo Cho
                        <i class="fab fa-linkedin"></i>
                    </Link>
                    <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                        <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                        <li><Link to="experience" spy={true} smooth={true}>Experience</Link></li>
                        <li><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
                        <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="navbar-name">
                    <h1 className="name">Jaewoo Cho</h1>
                    <div className="">
                        <p>QA Test Engineer</p>
                        <p>In the process of becoming a Software Developer</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;