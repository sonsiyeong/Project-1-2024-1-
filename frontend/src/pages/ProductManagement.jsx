import React from "react";
import {
  Container,
  Sidebar,
  Logo,
  SectionTitle,
  Form,
  Input,
  Textarea,
  Select,
  Button,
  FormContainer,
  FormHeader,
  FormTitle,
  ResetButton,
  FormBody,
} from "../styles/ProductManagement.styles"; // 필요한 모든 styled component를 import
import { useNavigate } from "react-router-dom";

export const ProductManagement = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // 로고 클릭 시 메인 페이지로 이동
  };

  const resetForm = () => {
    document.getElementById("productForm").reset();
  };

  return (
    <Container>
      <Sidebar>
        <Logo src={`${process.env.PUBLIC_URL}/logo.dark.png`} alt="Ewha Logo" onClick={handleLogoClick} />
        <SectionTitle style={{ cursor: "pointer" }}>Admin</SectionTitle>
      </Sidebar>

      <FormContainer>
        <FormHeader>
          <FormTitle>상품 관리</FormTitle>
          <ResetButton onClick={resetForm}>RESET</ResetButton>
        </FormHeader>
        <FormBody>
          <form id="productForm">
            <Input type="text" placeholder="상품명" />
            <Select>
              <option value="예금">예금</option>
              <option value="적금">적금</option>
              <option value="대출">대출</option>
              <option value="체크카드">체크카드</option>
            </Select>
            <Select>
              <option value="KB국민은행">KB국민은행</option>
              <option value="NH농협은행">NH농협은행</option>
              <option value="신한은행">신한은행</option>
              <option value="우리은행">우리은행</option>
              <option value="하나은행">하나은행</option>
            </Select>
            <Input type="text" placeholder="가입 금액" />
            <Input type="text" placeholder="가입 기간" />
            <Input type="text" placeholder="상품 링크" />
            <Textarea placeholder="상품 혜택" />
            <Input type="text" placeholder="상품 특징" />
            <Textarea placeholder="상세 설명" />
            <Button type="submit">등록</Button>
          </form>
        </FormBody>
      </FormContainer>
    </Container>
  );
};
