import styled from 'styled-components';
import { FaBookmark } from 'react-icons/fa';

export const MyPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #186915;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 100px; 
  height: 100px;
  cursor: pointer;
  max-width: 100%; /* 부모 요소의 너비를 넘지 않도록 설정 */
`;

export const SectionTitle = styled.h2`
  font-size: 23px;
  margin: 50px 0;
  font-weight: bold;
`;

export const Content = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 40px;
`;

export const UserInfo = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const UserInfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserInfoLabel = styled.div`
  width: 100px;
  font-weight: bold;
  font-family: "Pretendard", sans-serif;
`;

export const UserInfoValue = styled.div`
  color: #333;
`;

export const ScrapSection = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

export const ScrapItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ScrapItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
`;

export const ScrapItemIcon = styled(FaBookmark)`
  color: #186915;
  margin-right: 10px;
`;

export const ScrapItemText = styled.div`
  font-size: 16px;
  color: #333;
  font-family: "Pretendard", sans-serif;
  font-weight: bold;
`;
