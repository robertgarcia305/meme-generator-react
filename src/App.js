// steps:
//go to your directory where you want to add the react app
//   my-app should be changed to whatever your name of the app
//   npx create-react-app my-app
//   cd my-app

//   npm start
// if npm start doesn't work do: 

// npm install react-scripts
// then react-scripts start

import logo from './logo.svg';
import './App.css';
import { React, useState } from "react";

// components
import Header from './components/Header';
import Body from './components/Body';

// data
import memesData from './memesData';

function App() {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1wz1x.jpg");

  const getImage = () => {
    // access array, random , result, set new image
    let memeArray = memesData.data.memes;
    let randomImage = Math.floor(Math.random() * memeArray.length);
    let result = memeArray[randomImage].url
    setMemeImage(result);
  }


  // test code
  // states for top and bottom text
  const [bottomText, setBottomText] = useState("");
  const [topText, setTopText] = useState("");

  const changeTop = (event) => {
    setTopText(event.target.value);
  }

  const changeBottom = (event) => {
    setBottomText(event.target.value);
  }

  return (
    <div className="app-wrap">
      <div className="app">
        <Header />
        <Body 
        function={getImage}
        image={memeImage}
        topTextChange={changeTop}
        bottomTextChange={changeBottom}
        top={topText}
        bottom={bottomText}
        />
      </div>
    </div>
  );
}

export default App;
