import React, { useState, useEffect } from 'react';
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
  Select,
} from "../styles/Admin.styles";
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('예금'); // 기본값을 '예금'으로 설정
  const [msg, setMsg] = useState(''); // 응답 메시지 상태
  const [products, setProducts] = useState([]); // 상품 목록을 저장할 상태

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // API 엔드포인트에 맞게 수정
        const result = await response.json();
        if (response.ok) {
          setMsg(result.msg); // 응답 메시지 저장
          const productData = result.data.map(product => ({
            productCode: product.productCode,
            productName: product.productName,
          }));
          setProducts(productData); // 상품 데이터를 상태에 저장
        } else {
          console.error('상품을 불러오는데 실패했습니다.');
        }
      } catch (error) {
        console.error('API 요청 중 오류가 발생했습니다:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]); // 선택된 카테고리가 변경될 때마다 데이터를 불러옴

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
        {msg && <p>{msg}</p>} {/* 응답 메시지를 화면에 표시 */}
        <Select value={selectedCategory} onChange={handleCategoryChange}>
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
            {products.map((product, index) => (
              <tr key={`product-${index}`}>
                <Td>{index + 1}</Td>
                <Td>{product.productCode}</Td> {/* 상품 코드 표시 */}
                <Td>{product.productName}</Td>
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

