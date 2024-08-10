import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { DepositPage, SavingPage, LoanPage, CheckCardPage } from "./pages";
// TODO: 글로벌 스타일 전역으로 옮기기
import { GlobalStyle } from "./pages/ProductPage/ProductPage.styles";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/saving" element={<SavingPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/checkcard" element={<CheckCardPage />} />
        <Route path="/detailedpage" element={<DetailedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
