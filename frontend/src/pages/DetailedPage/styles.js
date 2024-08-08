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

export const BankLogo = styled.img`
   {
    width: 100px;
    height: 20px;
    display: block;
    margin: 0 auto 20px;
  }
`;
export const DetailContainer = styled.div`
  padding: 5px;
`;

export const DetailTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const DetailSection = styled.section`
  margin-bottom: 40px;
`;

export const DetailImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const DetailDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const CommentSection = styled.div`
  margin-top: 40px;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CommentButton = styled.button`
  background-color: #186915;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  background-color: #186915;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  margin-top: 20px;
`;
