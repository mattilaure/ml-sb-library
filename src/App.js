import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Registration from "./components/auth/registration/Registration";
import LoginScreen from "./components/auth/login/LoginScreen";
import Home from "./components/home/Home";
import Lobby from "./components/lobby/Lobby";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
