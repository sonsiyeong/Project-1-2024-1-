import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #ffffff;
  padding: 10px 20px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 2px -2px gray;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }

  h1 {
    font-size: 24px;
    margin: 0;
  }
`;

const Menu = styled.nav`
  display: flex;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: black;

    &:hover {
      color: #21a1f1;
    }
  }
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .search-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }

  .error {
    color: red;
    margin-top: 10px;
  }

  .auth-link {
    margin-left: 20px;
    color: #21a1f1;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  max-height: calc(100vh - 70px); /* 헤더 높이를 뺀 화면 높이 */
  object-fit: cover;
`;

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
    <AppContainer>
      <Header>
        <Logo>
          <img src="logo.png" alt="Ewha Logo" />
          <h1>EWHA INVESTIGATION</h1>
        </Logo>
        <Menu>
          <button onClick={() => alert('예금')}>예금</button>
          <button onClick={() => alert('적금')}>적금</button>
          <button onClick={() => alert('대출')}>대출</button>
          <button onClick={() => alert('체크카드')}>체크카드</button>
        </Menu>
        <AuthSection>
          <input
            type="text"
            placeholder="은행명 입력"
            value={bankName}
            onChange={handleBankNameChange}
          />
          <button className="search-button" onClick={handleSearch}>🔍</button>
          {error && <div className="error">없는 은행명이거나 오타가 있습니다</div>}
          <a className="auth-link" href="/login">LOGIN / SIGN UP</a>
        </AuthSection>
      </Header>
      <main>
        <MainImage src="/mnt/data/image.png" alt="Campus" />
      </main>
    </AppContainer>
  );
};

export default MainPage;

