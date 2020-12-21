import React from "react";

class Header extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <a href="home">
                        <i class="fab fa-connectdevelop"></i>
                        <span className='navbar title'>Jaewoo Cho</span>
                    </a>
                </nav>
            </div>
        )
    }
}

export default Header;