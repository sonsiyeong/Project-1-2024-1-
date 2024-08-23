import React, { useState, useEffect } from "react";
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
  const [userData, setUserData] = useState(null);

  // 하드코딩된 스크랩 데이터
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

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    const userCode = window.sessionStorage.getItem("userCode");

    if (token && userCode) {
      fetch(`http://43.202.58.11:8080/api/users/${userCode}`, { // 수정된 엔드포인트
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // 토큰을 Authorization 헤더에 추가
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data.data); // 응답에서 사용자 데이터를 상태에 저장
        })
        .catch((error) => {
          console.error("사용자 정보를 가져오는 중 오류 발생:", error);
        });
    } else {
      console.warn("토큰이나 userCode가 세션에 없습니다.");
    }
  }, []);
 
  const handleLogoClick = () => {
    navigate("/"); // Main 페이지로 이동
  };

  const handleItemClick = (url) => {
    window.open(url, "_blank"); // 상품명 클릭 시 새 탭에서 상품 홈페이지로 이동
  };

  if (!userData) {
    return <div>Loading...</div>; // 데이터 로드 전 로딩 표시
  }

  return (
    <MyPageContainer>
      <Sidebar>
        <img
          src={`${process.env.PUBLIC_URL}/logo.dark.png`}
          alt="Ewha Logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer", width: "100px" }}
        />
        <SectionTitle>MY PAGE</SectionTitle>
      </Sidebar>
      <Content>
        <SectionTitle>내 정보</SectionTitle>
        <UserInfo>
          <UserInfoRow>
            <UserInfoLabel>NAME</UserInfoLabel>
            <UserInfoValue>{userData.userName}</UserInfoValue>
          </UserInfoRow>
          <UserInfoRow>
            <UserInfoLabel>e-mail</UserInfoLabel>
            <UserInfoValue>{userData.email}</UserInfoValue>
          </UserInfoRow>
          <UserInfoRow>
            <UserInfoLabel>ID</UserInfoLabel>
            <UserInfoValue>{userData.userId}</UserInfoValue>
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

export default MyPage;
