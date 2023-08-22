import React from "react";
import ReactDOM from "react-dom";

const Body = (props) => {
    return (
        <section>
            <div className="meme-top">
                <div className="inputs">
                    <div><input placeholder="Top Text"></input></div>
                    <div><input placeholder="Bottom Text"></input></div>
                </div>
                <div className="button-wrap">
                    <button onClick={props.function}>Generate Image</button>
                </div>
            </div>
            <div className="meme-img" >
                <img className="memeImg" src={props.image}></img>
            </div>
        </section>
    );
}

export default Body;