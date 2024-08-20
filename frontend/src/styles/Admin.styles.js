import styled from 'styled-components';
import { FaBookmark } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  padding: 20px;
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
  cursor: pointer;
`;

export const SectionTitle = styled.h2`
  font-size: 23px;
  margin: 50px 0;
  font-weight: bold;
`;

export const TableContainer = styled.div`
  flex-grow: 1;  // 이 부분이 메인 콘텐츠를 사이드바 옆으로 확장합니다.
  padding-left: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #5fa446;
  color: white;
  padding: 10px;
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export const Button = styled.button`
  background-color: white;
  border: 1px solid #5fa446;
  color: #5fa446;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  
    &:hover {
    background-color: #5fa446;
    color: white;
  }
`;
