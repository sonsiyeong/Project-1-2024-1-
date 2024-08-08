import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const LogoContainer = styled.div`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0 4px 2px -2px gray;
  text-align: center;

  img {
    height: 88px; /* Adjust as necessary */
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin: 0;
`;

export const Header = styled.header`
  background-color: #ffffff;
  padding: 10px 20px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 2px -2px gray;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  background-color: none;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  margin: 0 53px;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-family: "Pretendard", sans-serif;
  color: black;

  &:hover {
    color: #21a1f1;
  }
`;

export const MyPageButton = styled.a`
  text-decoration: none;
  background-color: #186915;
  color: white;
  border: none;
  padding: 5px 15px;
  font-size: 15px;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoutLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const MainContent = styled.main`
  width: 100%;
  height: auto;
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  max-height: calc(100vh - 80px); /* Subtract header height from viewport height */
  object-fit: cover;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-family: "Pretendard", sans-serif;
  margin-top: 11px;
`;
