import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

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
  height: 1.5px;
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
  position: relative; /* 드롭다운이 검색창 바로 아래에 뜨도록 설정 */
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  font-size: 1.5em;
  color: #186915;
`;

export const SearchButton = styled.button`
  background-color: none;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
`;

export const MenuButton = styled.button`
  text-decoration: none;
  color: black;
  margin: 0 53px;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-family: "Pretendard", sans-serif;
`;

export const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 0 53px;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-family: "Pretendard", sans-serif;

  &.active {
    font-weight: bold;
    color: #186915;
    border-bottom: 2px solid #186915;
  }
`;

export const LoginButton = styled.a`
  text-decoration: none;
  background-color: #186915;
  color: white;
  border: none;
  padding: 5px 15px;
  font-size: 15px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-family: "Pretendard", sans-serif;
  margin-top: 11px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
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
  margin-right: 15px; /* 여백 제거 */

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoutLink = styled.a`
  text-decoration: none;
  background-color: #186915; /* MyPageButton과 동일하게 설정 */
  color: white; /* MyPageButton과 동일하게 설정 */
  border: none; /* MyPageButton과 동일하게 설정 */
  padding: 5px 15px; /* MyPageButton과 동일하게 설정 */
  font-size: 15px; /* MyPageButton과 동일하게 설정 */
  border-radius: 20px; /* MyPageButton과 동일하게 설정 */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 85%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SearchSelect = styled.select`
  width: 220px;
  padding: 10px; /* 높이를 늘리기 위해 padding 조정 */
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15px; /* 글씨 크기 조정 */
`;
