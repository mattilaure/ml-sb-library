import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import TextField from "./components/textField/TextField";
import Home from "./components/home/Home";
import Leaderboard from "./components/leaderboard/Leaderboard"
import { View } from "react-native";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  function logging() {
    console.log("click");
  }
  function loggingText(e) {
    console.log("e", e);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
