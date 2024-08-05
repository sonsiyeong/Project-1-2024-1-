import "./product_page.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import BankSection from "./components/BankSection";

const bankData = [
  {
    name: "KB국민은행",
    products: [{ name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "kb",
  },
  {
    name: "NH농협은행",
    products: [{ name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "nh",
  },
  {
    name: "신한은행",
    products: [{ name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "sh",
  },
  {
    name: "우리은행",
    products: [{ name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "woori",
  },
  {
    name: "하나은행",
    products: [{ name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "hana",
  },
];

const CheckCardPage = () => {
  return (
    <div className="ProductPage">
      <header className="App-header">
        <div className="logo-container">
          <img src="/logo.png" alt="EWHA Logo" className="logo" />
        </div>
      </header>
      <nav className="App-nav">
        <div className="search-container">
          <input
            type="text"
            placeholder="은행 명 입력"
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        <ul>
          <li>
            <Link to="/deposit">예금</Link>
          </li>
          <li>
            <Link to="/saving">적금</Link>
          </li>
          <li>
            <Link to="/loan">대출</Link>
          </li>
          <li className="active">
            <Link to="/checkcard">체크카드</Link>
          </li>
        </ul>
        <div className="login-button">
          <Link to="/login">LOGIN / SIGN UP</Link>
        </div>
      </nav>
      <main className="App-main">
        {bankData.map((bank, index) => (
          <BankSection key={index} bank={bank} />
        ))}
      </main>
    </div>
  );
};

export default CheckCardPage;
