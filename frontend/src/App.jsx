import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MyPage from './pages/MyPage/MyPage'; // MyPage 컴포넌트
import Main from './pages/Main/Main'; // Main 컴포넌트
import Login from './pages/Login/Login'; // Login 컴포넌트
import SignUp from './pages/SignUp/SignUp'; // SignUp 컴포넌트
import DepositPage from './pages/ProductPage/DepositPage'; // DepositPage 컴포넌트
import SavingPage from './pages/ProductPage/SavingPage'; // SavingPage 컴포넌트
import LoanPage from './pages/ProductPage/LoanPage'; // LoanPage 컴포넌트
import CheckCardPage from './pages/ProductPage/CheckCardPage'; // CheckCardPage 컴포넌트

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/mypage" />} /> {/* 기본 경로를 MyPage로 리다이렉트 */}
        <Route path="/mypage" element={<MyPage />} /> {/* MyPage 페이지 */}
        <Route path="/main" element={<Main />} /> {/* Main 페이지 */}
        <Route path="/login" element={<Login />} /> {/* Login 페이지 */}
        <Route path="/signup" element={<SignUp />} /> {/* SignUp 페이지 */}
        <Route path="/deposit" element={<DepositPage />} /> {/* DepositPage 페이지 */}
        <Route path="/saving" element={<SavingPage />} /> {/* SavingPage 페이지 */}
        <Route path="/loan" element={<LoanPage />} /> {/* LoanPage 페이지 */}
        <Route path="/checkcard" element={<CheckCardPage />} /> {/* CheckCardPage 페이지 */}
      </Routes>
    </Router>
  );
};

export default App;

