import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

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

const Menu = styled.div`
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
`;

const App = () => {
  return (
    <AppContainer>
      <Header>
        <Logo>
          <img src="/logo.png" alt="Logo" />
          <h1>My App</h1>
        </Logo>
        <Menu>
          <button>예금</button>
          <button>적금</button>
          <button>대출</button>
          <button>체크카드</button>
        </Menu>
        <AuthSection>
          <input type="text" placeholder="은행 명 입력" />
          <button className="search-button">
            <FaSearch />
          </button>
          <a href="/login" className="auth-link">로그인/회원가입</a>
        </AuthSection>
      </Header>
      <MainImage src="/main-image.jpg" alt="Main" />
    </AppContainer>
  );
}

export default App;
