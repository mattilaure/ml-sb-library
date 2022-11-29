import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import TextField from "./components/textField/TextField";
import Home from "./components/home/Home";
import Leaderboard from "./components/leaderboard/Leaderboard"
import { View } from "react-native";


function App() {
  function logging() {
    console.log("click");
  }
  function loggingText(e) {
    console.log("e", e);
  }
  return (
   <div className="App">
      <Home />
   </div>
  );
}

export default App;
