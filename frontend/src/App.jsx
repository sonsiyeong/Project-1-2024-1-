import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  SignUp,
  Main,
  DetailedPage,
  CheckCardPage,
  DepositPage,
  SavingPage,
  LoanPage,
  MyPage,
} from "./pages";
// TODO: 글로벌 스타일 전역으로 옮기기
//import { GlobalStyle } from "./styles/ProductPage.styles";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/saving" element={<SavingPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/checkcard" element={<CheckCardPage />} />
        <Route path="/detailedpage" element={<DetailedPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
