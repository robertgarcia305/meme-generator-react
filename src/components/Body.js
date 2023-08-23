import React from "react";
import ReactDOM from "react-dom";

const Body = (props) => {
    return (
        <section>
            <div className="meme-top">
                <div className="inputs">
                    <div><input placeholder="Top Text" onChange={props.topTextChange}></input></div>
                    <div><input placeholder="Bottom Text" onChange={props.bottomTextChange}></input></div>
                </div>
                <div className="button-wrap">
                    <button onClick={props.function}>Generate Image</button>
                </div>
            </div>
            {/* HERE ADD THE TEXTS AS PROPS */}
            <div class="image-wrap">
                <img className="memeImg" src={props.image}></img>
                <div class="text-wrap">
                    <p className="top-text">{props.top}</p>
                    <p className="bottom-text">{props.bottom}</p>
                </div>
            </div>
        </section>
  
    );
}

export default Body;