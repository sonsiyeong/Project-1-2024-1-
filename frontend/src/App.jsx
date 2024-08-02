import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./feat/Login/Login";
import SignUp from "./feat/SignUp/SignUp";

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
