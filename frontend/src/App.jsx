import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
// import 경로 최적화하기
// import { Login , SignUp, DepositPage, SavingPage, LoanPage, CheckCardPage } from "./pages";
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import DepositPage from './pages/ProductPage/DepositPage';
import SavingPage from './pages/ProductPage/SavingPage';
import LoanPage from './pages/ProductPage/LoanPage';
import { CheckCardPage } from './pages/ProductPage';
// TODO: 글로벌 스타일 전역으로 옮기기
import { GlobalStyle } from './pages/ProductPage/styles';
//import DetailedPage from "./pages/DetailedPage/DetailedPage"; <Route path="/detailedpage" element={<DetailedPage />} />

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/saving" element={<SavingPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/checkcard" element={<CheckCardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
