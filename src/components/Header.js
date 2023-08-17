import React from "react";
import ReactDOM from "react-dom";

// import image
import logo from "../img/meme-logo.png";

const Header = () => {
    return (
        <header>
            <div className="left-header-wrap">
                <img src={logo}></img>
            </div>
            <div></div>
        </header>
    );
}

export default Header;