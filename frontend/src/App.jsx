import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepositPage from "./ProductPage/DepositPage";
import SavingPage from "./ProductPage/SavingPage";
import LoanPage from "./ProductPage/LoanPage";
import CheckCardPage from "./ProductPage/CheckCardPage";
import Login from "./feat/Login/Login";
import SignUp from "./feat/SignUp/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DepositPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/saving" element={<SavingPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/checkcard" element={<CheckCardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
