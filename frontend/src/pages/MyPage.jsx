import React from "react";
import {
  MyPageContainer,
  Sidebar,
  Content,
  SectionTitle,
  UserInfo,
  UserInfoRow,
  UserInfoLabel,
  UserInfoValue,
  ScrapSection,
  ScrapItems,
  ScrapItem,
  ScrapItemIcon,
  ScrapItemText,
} from "../styles/MyPage.styles";
import { useNavigate } from "react-router-dom";

export const MyPage = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // Main 페이지로 이동
  };

  // 스크랩된 상품의 링크 데이터 예시: 상품 상세 페이지 추가 필요
  const scrapItems = [
    {
      bank: "은행명1",
      product: "상품명1",
      url: "https://example.com/product1",
    },
    {
      bank: "은행명2",
      product: "상품명2",
      url: "https://example.com/product2",
    },
    {
      bank: "은행명3",
      product: "상품명3",
      url: "https://example.com/product3",
    },
    {
      bank: "은행명4",
      product: "상품명4",
      url: "https://example.com/product4",
    },
  ];

  const handleItemClick = (url) => {
    window.open(url, "_blank"); // 상품명 클릭 시 새 탭에서 상품 홈페이지로 이동
  };

  return (
    <MyPageContainer>
      <Sidebar>
        <img
          src={`${process.env.PUBLIC_URL}/logo.dark.png`} // 이미지 소스를 logo.dark.png로 변경
          alt="Ewha Logo"
          onClick={handleLogoClick} // 로고 클릭 시 메인 페이지로 이동
          style={{ cursor: "pointer", width: "100px" }} // 스타일을 인라인으로 추가
        />
        <SectionTitle>MY PAGE</SectionTitle>
      </Sidebar>
      <Content>
        <SectionTitle>내 정보</SectionTitle>
        <UserInfo>
          <UserInfoRow>
            <UserInfoLabel>NAME</UserInfoLabel>
            <UserInfoValue>김이화</UserInfoValue>
          </UserInfoRow>
          <UserInfoRow>
            <UserInfoLabel>e-mail</UserInfoLabel>
            <UserInfoValue>myname@ewha.ac.kr</UserInfoValue>
          </UserInfoRow>
          <UserInfoRow>
            <UserInfoLabel>ID</UserInfoLabel>
            <UserInfoValue>makemoney</UserInfoValue>
          </UserInfoRow>
        </UserInfo>
        <SectionTitle>MY 스크랩</SectionTitle>
        <ScrapSection>
          <ScrapItems>
            {scrapItems.map((item, index) => (
              <ScrapItem
                key={index}
                onClick={() => handleItemClick(item.url)}
                style={{ cursor: "pointer" }}
              >
                <ScrapItemIcon />
                <ScrapItemText>
                  {item.bank} {item.product}
                </ScrapItemText>
              </ScrapItem>
            ))}
          </ScrapItems>
        </ScrapSection>
      </Content>
    </MyPageContainer>
  );
};
