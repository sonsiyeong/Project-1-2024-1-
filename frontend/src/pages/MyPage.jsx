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
  const [scrapItems, setScrapItems] = useState([]); // 스크랩 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    const userCode = window.sessionStorage.getItem("userCode");

    if (token && userCode) {
      // 사용자 정보 가져오기
      fetch(`http://43.202.58.11:8080/api/users/${userCode}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data.data); // 사용자 데이터를 상태에 저장
        })
        .catch((error) => {
          console.error("사용자 정보를 가져오는 중 오류 발생:", error);
        });

      // 스크랩 목록 가져오기
      fetch(`http://43.202.58.11:8080/api/users/${userCode}/scraps`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setScrapItems(data.data); // 스크랩 데이터를 상태에 저장
        })
        .catch((error) => {
          console.error("스크랩 목록을 가져오는 중 오류 발생:", error);
          setError("스크랩 목록을 가져오는 중 오류가 발생했습니다.");
        })
        .finally(() => {
          setLoading(false); // 로딩 상태 해제
        });
    } else {
      console.warn("토큰이나 userCode가 세션에 없습니다.");
      setLoading(false);
    }
  }, []);

  const handleLogoClick = () => {
    navigate("/"); // 메인 페이지로 이동
  };

  const handleItemClick = (url) => {
    window.open(url, "_blank"); // 상품명 클릭 시 새 탭에서 상품 홈페이지로 이동
  };

  if (loading) {
    return <div>Loading...</div>; // 데이터 로드 전 로딩 표시
  }

  if (error) {
    return <div>Error: {error}</div>; // 에러 발생 시 표시할 내용
  }

  if (!userData) {
    return <div>Loading...</div>; // 사용자 데이터 로드 전 로딩 표시
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
                onClick={() => handleItemClick(`https://example.com/product/${item.productCode}`)}
                style={{ cursor: "pointer" }}
              >
                <ScrapItemIcon />
                <ScrapItemText>{item.scrapMemo}</ScrapItemText>
              </ScrapItem>
            ))}
          </ScrapItems>
        </ScrapSection>
      </Content>
    </MyPageContainer>
  );
};

export default MyPage;
