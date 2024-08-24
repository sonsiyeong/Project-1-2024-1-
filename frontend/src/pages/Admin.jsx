import React, { useState } from 'react';

import {
  Container,
  Sidebar,
  Logo,
  SectionTitle,
  TableContainer,
  Table,
  Th,
  Td,
  Button,
  Select, // Select 스타일 추가
} from "../styles/Admin.styles";
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('예금'); // 기본값을 '예금'으로 설정

  const handleLogoClick = () => {
    navigate('/'); // 로고 클릭 시 메인 페이지로 이동
  };

  const handleSectionTitleClick = () => {
    navigate('/');
  };

  const handleEditClick = () => {
    navigate('/productmanagement'); // 수정 버튼 클릭 시 상품 관리 페이지로 이동
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // 선택한 카테고리로 상태 업데이트
  };

  // 상품명 배열
  const productNames = [
    "KBStar정기예금",
    "KB국민UP정기예금",
    "HeyYoung머니박스",
    "신한주거래저축예금",
    "WON플러스예금",
    "우리첫거래우대정기예금",
    "영하나플러스통장",
    "하나취업이룸통장",
    "정기예금",
    "NH 1934 우대통장"
  ];

  return (
    <Container>
      <Sidebar>
        <Logo 
          src={`${process.env.PUBLIC_URL}/logo.dark.png`} 
          alt="Ewha Logo" 
          onClick={handleLogoClick} 
        />
        <SectionTitle onClick={handleSectionTitleClick} style={{ cursor: 'pointer' }}>
          Admin
        </SectionTitle>
      </Sidebar>
      <TableContainer>
        <h1>상품 목록</h1>

        <Select value={selectedCategory} onChange={handleCategoryChange}> {/* 드롭다운 추가 */}
          <option value="예금">예금</option>
          <option value="적금">적금</option>
          <option value="대출">대출</option>
          <option value="체크카드">체크카드</option>
        </Select>
        <Table>
          <thead>
            <tr>
              <Th>번호</Th>
              <Th>상품 코드</Th> {/* 상품 코드 컬럼 추가 */}
              <Th>상품명</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {productNames.map((productName, index) => (
              <tr key={`product-${index}`}>
                <Td>{index + 1}</Td>
                <Td>{productName}</Td> {/* 상품명 표시 */}
                <Td>
                  <Button onClick={handleEditClick}>수정</Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Admin;
