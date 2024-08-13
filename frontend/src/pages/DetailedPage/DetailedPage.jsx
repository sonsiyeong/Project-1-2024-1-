import {
  GlobalStyle,
  PageContainer,
  AppHeader,
  LogoContainer,
  AppNav,
  SearchContainer,
  SearchInput,
  SearchIcon,
  AppNavList,
  AppNavItem,
  LoginButton,
} from "./styles";
import { Link } from "react-router-dom";
import Information from "./components/Information";
const bankData = {
  name: "KB국민은행",
  logoKey: "kb",
};
const DetailedPage = () => {
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
            <AppNavItem className="active">
              <Link to="/deposit">예금</Link>
            </AppNavItem>
            <AppNavItem>
              <Link to="/saving">적금</Link>
            </AppNavItem>
            <AppNavItem>
              <Link to="/loan">대출</Link>
            </AppNavItem>
            <AppNavItem>
              <Link to="/checkcard">체크카드</Link>
            </AppNavItem>
          </AppNavList>
          <LoginButton to="/login">LOGIN / SIGN UP</LoginButton>
        </AppNav>
        <Information bank={bankData} />
        <PageContainer>
          <Information bank={bankData} />
        </PageContainer>
      </div>
    </>
  );
};
export default DetailedPage;
