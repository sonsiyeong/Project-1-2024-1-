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
  const [scrapData, setScrapData] = useState([]);

  useEffect(() => {
    const userCode = window.sessionStorage.getItem("userCode"); // 세션에서 userCode를 가져옴

    if (userCode) {
      // 사용자 정보 가져오기
      fetch(`/api/users/${userCode}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data.data); // 응답 데이터에서 필요한 부분을 상태에 저장
        })
        .catch((error) => {
          console.error("사용자 정보를 가져오는 중 오류 발생:", error);
        });

      // 스크랩 목록 가져오기
      fetch(`/api/scraps/${userCode}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setScrapData(data.data); // 스크랩 데이터 상태에 저장
        })
        .catch((error) => {
          console.error("스크랩 목록을 가져오는 중 오류 발생:", error);
        });
    } else {
      console.error("userCode가 세션에 없습니다.");
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
            {scrapData.map((item, index) => (
              <ScrapItem
                key={index}
                onClick={() => handleItemClick(`/product/${item.productCode}`)}
                style={{ cursor: "pointer" }}
              >
                <ScrapItemIcon />
                <ScrapItemText>
                  {item.scrapMemo}
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
