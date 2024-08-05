import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import DepositPage from "./pages/ProductPage/DepositPage";
import SavingPage from "./pages/ProductPage/SavingPage";
import LoanPage from "./pages/ProductPage/LoanPage";
import CheckCardPage from "./pages/ProductPage/CheckCardPage";
//import Mainpage from "./pages/Mainpage/Mainpage";

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


// 메인페이지 App 컴포넌트
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header onNavigate={handleNavigation} />
      {currentPage === "home" && <BankSearch />}
      {currentPage === "login" && <Auth />}
      {/* Add more pages as needed */}
    </div>
  );
}
