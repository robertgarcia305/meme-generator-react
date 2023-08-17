import React from "react";
import ReactDOM from "react-dom";

const Body = () => {
    return (
        <section>
            <div className="top">
                <div>
                    <input placeholder="top text"></input>
                    <input placeholder="bottom text"></input>
                </div>
                <button>Click For A New Image</button>
            </div>
            <div className="meme-img">
                
            </div>
        </section>
    );
}

export default Body;