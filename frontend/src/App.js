import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login&SignUp/Login";
import SignUp from "./Login&SignUp/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
