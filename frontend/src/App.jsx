import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  SignUp,
  Main,
  Detailed,
  ReviewForm,
  MyPage,
  BankPage,
  Admin,
  Product,
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
          <Route path="/deposit" element={<Product type="예금" />} />
          <Route path="/saving" element={<Product type="적금" />} />
          <Route path="/loan" element={<Product type="대출" />} />
          <Route path="/checkcard" element={<Product type="체크카드" />} />
          <Route path="/detailed/:productCode" element={<Detailed />} />
          <Route
            path="/detailed/:productCode/reviewform"
            element={<ReviewForm />}
          />
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
