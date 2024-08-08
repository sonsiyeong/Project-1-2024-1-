import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";

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

export const SearchIcon = styled.div`
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

export const BankSectionContainer = styled.div`
  border: 2px solid green;
  padding: 20px;
  border-radius: 15px;
  margin: 10px;
`;

export const BankLogo = styled.img`
  width: 210px;
  height: 35px;
`;

export const ProductCardWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProductName = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid #d6d6d6;
  width: 125px;
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 4px;
`;

export const ProductDescription = styled.p`
  font-size: 19px;
`;

export const ProductButton = styled(Link)`
  text-decoration: none;
  background-color: #549052;
  color: white;
  border: none;
  padding: 7px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

export const Separator = styled.div`
  width: 100px;
  height: 1.5px;
  background-color: #186915;
  margin: 40px;
  margin-bottom: 20px;
`;

export const Underline = styled.div`
  text-decoration: underline;
`;
