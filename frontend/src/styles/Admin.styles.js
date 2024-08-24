import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
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
  width: 180px;
  cursor: pointer;
`;

export const SectionTitle = styled.h2`
  font-size: 23px;
  margin: 50px 0;
  font-weight: bold;
`;

export const TableContainer = styled.div`
  flex-grow: 1;  // 메인 콘텐츠를 사이드바 옆으로 확장
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

export const Select = styled.select`
  margin-bottom: 20px;  // 드롭다운 아래 여백 추가
  padding: 8px;
  font-size: 16px;
  border: 1px solid #5fa446;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #186915;  // 포커스 시 색상 변경
  }
`;
