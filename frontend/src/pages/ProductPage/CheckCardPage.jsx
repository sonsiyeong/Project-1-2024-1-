import {
  GlobalStyle,
  AppHeader,
  LogoContainer,
  AppNav,
  SearchContainer,
  SearchInput,
  SearchIcon,
  AppNavList,
  AppNavItem,
  LoginButton,
  AppMain,
  BankSectionContainer,
} from "./styles";
import { Link } from "react-router-dom";
import BankSection from "./components/BankSection";

const bankData = [
  {
    name: "KB국민은행",
    products: [{ id: 1, name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "kb",
  },
  {
    name: "NH농협은행",
    products: [{ id: 2, name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "nh",
  },
  {
    name: "신한은행",
    products: [{ id: 3, name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "sh",
  },
  {
    name: "우리은행",
    products: [{ id: 4, name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "woori",
  },
  {
    name: "하나은행",
    products: [{ id: 5, name: "상품명", link: "#", description: "특징 한 눈에 보기" }],
    logoKey: "hana",
  },
];

export const CheckCardPage = () => {
  return (
    <>
      <GlobalStyle />
      <div className="ProductPage">
        <AppHeader>
          <LogoContainer>
            <img src="/logo.png" alt="EWHA Logo" className="logo" />
          </LogoContainer>
        </AppHeader>
        <AppNav>
          <SearchContainer>
            <SearchInput type="text" placeholder="은행 명 입력" />
            <SearchIcon />
          </SearchContainer>
          <AppNavList>
            <AppNavItem>
              <Link to="/deposit">예금</Link>
            </AppNavItem>
            <AppNavItem>
              <Link to="/saving">적금</Link>
            </AppNavItem>
            <AppNavItem>
              <Link to="/loan">대출</Link>
            </AppNavItem>
            <AppNavItem className="active">
              <Link to="/checkcard">체크카드</Link>
            </AppNavItem>
          </AppNavList>
          <LoginButton to="/login">LOGIN / SIGN UP</LoginButton>
        </AppNav>
        <AppMain>
          {bankData.map((bank, index) => (
            <BankSectionContainer key={index}>
              <BankSection bank={bank} />
            </BankSectionContainer>
          ))}
        </AppMain>
      </div>
    </>
  );
};
