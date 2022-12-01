import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import TextField from './components/textField/TextField';
import Registration from './components/auth/registration/Registration';
import LoginScreen from './components/auth/login/LoginScreen';
import Home from './components/home/Home';
import { Lobby } from './components';
import React, {useState} from "react"
import Game from './components/game/Game';


function App() {
  return (

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button callback={logging} label="classifica"/>
        <TextField placeholder="placeholder" callback={loggingText}/>
      </header> */}

<<<<<<< HEAD
      <Home />
=======
      <Game />
>>>>>>> 4ba05d930088fff37cbdd6fa27469d5b6ba48ba7
    </div>
  );
}

export default App;
