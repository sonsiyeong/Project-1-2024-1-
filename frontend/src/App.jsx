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
  ReviewForm,
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
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/saving" element={<SavingPage />} />
          <Route path="/loan" element={<LoanPage />} />
          <Route path="/checkcard" element={<CheckCardPage />} />
          <Route path="/detailedpage" element={<DetailedPage />} />
          <Route path="/reviewform" element={<ReviewForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
