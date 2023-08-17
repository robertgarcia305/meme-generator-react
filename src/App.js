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

import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <h3>this is a test</h3>
      <Header />
    </div>
  );
}

export default App;
