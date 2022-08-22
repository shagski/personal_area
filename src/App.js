import React from "react";
import "./App.css";
import { Main } from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
