import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  SignUp,
  Main,
  Detailed,
  CheckCard,
  Deposit,
  Saving,
  Loan,
  ReviewForm,
  MyPage,
  BankPage,
  Admin,
  ProductManagement,
} from "./pages";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/saving" element={<Saving />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/checkcard" element={<CheckCard />} />
          <Route path="/detailed/:productCode" element={<Detailed />} />
          <Route path="/reviewform" element={<ReviewForm />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/:bankId" element={<BankPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/productmanagement" element={<ProductManagement />} />
        </Routes>
      </Router>
    </>
  );
};

// 파일의 마지막에 export 문을 위치시킴
export default App;
