import { useState } from 'react';
import {
  Container,
  LogoContainer,
  Divider,
  Header,
  SearchContainer,
  SearchInput,
  SearchButton,
  Menu,
  MenuButton,
  MyPageButton, 
  LogoutLink, 
  MainContent,
  MainImage,
  ErrorMessage,
} from './styled.js';

const MainPage = () => {
  const [bankName, setBankName] = useState('');
  const [error, setError] = useState(false);

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
    setError(false);
  };

  const handleSearch = () => {
    const validBanks = ['KB국민은행', 'NH농협은행', '신한은행', '우리은행', '하나은행'];
    if (!validBanks.includes(bankName)) {
      setError(true);
    }
  };

  return (
    <Container>
      <LogoContainer>
        <img src="logo.png" alt="Ewha Logo" />
      </LogoContainer>
      <Divider />
      <Header>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="은행명 입력"
            value={bankName}
            onChange={handleBankNameChange}
          />
          <SearchButton onClick={handleSearch}>🔍</SearchButton>
          {error && <ErrorMessage>오류 </ErrorMessage>}
        </SearchContainer>
        <Menu>
          <MenuButton onClick={() => alert('예금')}>예금</MenuButton>
          <MenuButton onClick={() => alert('적금')}>적금</MenuButton>
          <MenuButton onClick={() => alert('대출')}>대출</MenuButton>
          <MenuButton onClick={() => alert('체크카드')}>체크카드</MenuButton>
        </Menu>
        <div>
          <MyPageButton href="/mypage">MY PAGE</MyPageButton>
          <LogoutLink href="/logout">로그아웃</LogoutLink>
        </div>
      </Header>
      <MainContent>
        <MainImage src="Campus.jpg.jpeg" alt="Campus" />
      </MainContent>
    </Container>
  );
};

export default MainPage;
