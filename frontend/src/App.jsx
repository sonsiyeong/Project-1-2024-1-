import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepositPage from "./product_page/DepositPage";
import SavingPage from "./product_page/SavingPage";
import LoanPage from "./product_page/LoanPage";
import CheckCardPage from "./product_page/CheckCardPage";
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
