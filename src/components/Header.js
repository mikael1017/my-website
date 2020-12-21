import React from "react";

class Header extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <a href="home">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        <span className='navbar title'>>Jaewoo Cho</span>
                    </a>
                </nav>
            </div>
        )
    }
}

export default Header;