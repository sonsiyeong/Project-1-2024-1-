import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./product_page/product_page";
import Login from "./Login&SignUp/Login";
import SignUp from "./Login&SignUp/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
