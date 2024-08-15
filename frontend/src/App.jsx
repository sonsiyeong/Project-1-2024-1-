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
          <Route path="/detailed" element={<Detailed />} />
          <Route path="/reviewform" element={<ReviewForm />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
