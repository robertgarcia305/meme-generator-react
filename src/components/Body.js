import React from "react";
import ReactDOM from "react-dom";

const Body = () => {
    return (
        <section>
            <div className="meme-top">
                <div className="inputs">
                    <div>
                        <input placeholder="Top Text"></input>
                    </div>
                    <div>
                        <input placeholder="Bottom Text"></input>
                    </div>
                </div>
                <div className="button">
                    <button>Generate Meme</button>
                </div>
            </div>
            <div className="meme-img"></div>
        </section>
    );
}

export default Body;