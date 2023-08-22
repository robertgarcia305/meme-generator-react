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
            {/* HERE ADD THE TEXTS AS PROPS */}
            <div class="image-wrap">
                <img className="memeImg" src={props.image}></img>
                <div class="text-wrap">
                    <p className="top-text">{props.top}</p>
                    <p className="bottom-text">{props.bottom}</p>
                </div>
            </div>
        </section>

// .container {
//     border: 1px solid red;
//     position: alternative;
//     display: flex;
//     height: 200px;
//     justify-content: center;
//   }
  
//   img {
//     height: 200px;
//     position: absolute;
//   }
  
//   .text-wrap {
//     border: 1px solid blue;
//     height: auto;
//     z-index: 2;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//   }
  
//   .text-wrap p {
//     background-color: black;
//     font-family: sans-serif;
//     color: white;
//     padding: 7px;
//     border-radius: 10px;
//     margin: 3px 0px;
//   }
  
  
    );
}

export default Body;