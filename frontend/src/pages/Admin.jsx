import React from 'react';
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
} from "./styles/Admin.styles.js"
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/main'); // 로고 클릭 시 메인 페이지로 이동
  };

  const handleSectionTitleClick = () => {
    navigate('/main'); // MY PAGE 클릭 시 메인 페이지로 이동
  };

  const handleEditClick = () => {
    navigate('/product-management'); // 수정 버튼 클릭 시 상품 관리 페이지로 이동
  };

  return (
    <Container>
      <Sidebar>
        <Logo src="/path/to/logo.png" alt="Ewha Logo" onClick={handleLogoClick} />  {/* src 경로 확인 */}
        <SectionTitle onClick={handleSectionTitleClick} style={{ cursor: 'pointer' }}>
          MY PAGE
        </SectionTitle>
      </Sidebar>
      <TableContainer>
        <h1>상품 목록</h1>
        <Table>
          <thead>
            <tr>
              <Th>번호</Th>
              <Th>상품명</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={`product-${index}`}>  {/* key 값에 고유한 값 사용 */}
                <Td>{index + 1}</Td>
                <Td>상품명</Td>
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

