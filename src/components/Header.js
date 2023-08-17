import React from "react";
import ReactDOM from "react-dom";

// import image
import logo from "../img/meme-logo.png";

const Header = () => {
    return (
        <header>
            <div className="header-wrap">
                <img src={logo}></img>
                <h3>Meme Generator</h3>
            </div>
        </header>
    );
}

export default Header;