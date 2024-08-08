import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Pretendard", sans-serif;
  }
`;
export const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  text-align: center;
`;

export const AppNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: none;
  border-top: 1px solid #d9d9d9;
  border-bottom: 3px solid green;
  margin-bottom: 50px;
`;

export const LoginButton = styled(Link)`
  text-decoration: none;
  background-color: #186915;
  color: white;
  border: none;
  padding: 5px 20px;
  font-size: 22px;
  border-radius: 20px;
`;

export const AppNavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const AppNavItem = styled.li`
  margin: 0 130px;
  cursor: pointer;
  font-size: 30px;

  & > a {
    text-decoration: none;
    color: black;
    padding: 5px;
  }

  &.active > a {
    font-weight: bold;
    color: #186915;
    border-bottom: 2px solid #186915;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
  margin-right: 5px;
  font-size: 1em;
`;

export const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  font-size: 1.5em;
  color: #186915;
`;

export const AppMain = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 5px;
`;
