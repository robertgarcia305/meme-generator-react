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
  const [memeImage, setMemeImage] = useState("");

  const getImage = () => {
    // access array
    let memeArray = memesData.data.memes;
    // random 
    let randomImage = Math.floor(Math.random() * memeArray.length);
    // result 
    let result = memeArray[randomImage].url
    // set the new 
    setMemeImage(result);
  }

  return (
    <div className="App">
      <Header />
      <Body 
      function={getImage}
      image={memeImage}
      />
    </div>
  );
}

export default App;
