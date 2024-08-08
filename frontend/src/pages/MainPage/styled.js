import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 24px;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 5px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
`;

const LoginButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;
`;

const MainContent = styled.main`
  width: 100%;
  height: auto;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
  object-fit: cover;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Logo src="/logo.png" alt="EWHA Investigation Logo" />
        <Title>INVESTIGATION</Title>
        <SearchContainer>
          <SearchInput type="text" placeholder="은행명 입력" />
          <SearchButton>🔍</SearchButton>
        </SearchContainer>
        <Nav>
          <NavLink href="#deposit">예금</NavLink>
          <NavLink href="#savings">적금</NavLink>
          <NavLink href="#loan">대출</NavLink>
          <NavLink href="#card">체크카드</NavLink>
        </Nav>
        <LoginButton>LOGIN / SIGN UP</LoginButton>
      </Header>
      <MainContent>
        <MainImage src="/main-image" alt="Campus" />
      </MainContent>
    </Container>
  );
};

export default App;


