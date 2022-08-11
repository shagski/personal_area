import React from "react";
import "./App.css";
import { Main } from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
