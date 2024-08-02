import "./product_page.css";
import BankSection from "../product_page/components/BankSection";

const bankData = [
  {
    name: "KB국민은행",
    products: [
      { name: "상품명1", link: "#", description: "특징 한눈에 보기" },
      { name: "상품명2", link: "#", description: "특징 한눈에 보기" },
    ],
    logoKey: "kb",
  },
  {
    name: "NH농협은행",
    products: [
      { name: "상품명1", link: "#", description: "특징 한눈에 보기" },
      { name: "상품명2", link: "#", description: "특징 한눈에 보기" },
    ],
    logoKey: "nh",
  },
  {
    name: "신한은행",
    products: [
      { name: "상품명1", link: "#", description: "특징 한눈에 보기" },
      { name: "상품명2", link: "#", description: "특징 한눈에 보기" },
    ],
    logoKey: "sh",
  },
  {
    name: "우리은행",
    products: [
      { name: "상품명1", link: "#", description: "특징 한눈에 보기" },
      { name: "상품명2", link: "#", description: "특징 한눈에 보기" },
    ],
    logoKey: "woori",
  },
  {
    name: "하나은행",
    products: [
      { name: "상품명1", link: "#", description: "특징 한눈에 보기" },
      { name: "상품명2", link: "#", description: "특징 한눈에 보기" },
    ],
    logoKey: "hana",
  },
];

const ProductPage = () => {
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
          <button className="search-button">검색</button>
        </div>
        <ul>
          <li className="active">예금</li>
          <li>적금</li>
          <li>대출</li>
          <li>체크카드</li>
        </ul>
        <div>
          <button>MY PAGE</button>
          <button>로그아웃</button>
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

export default ProductPage;
