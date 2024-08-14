import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./header.style.js";

export function Header() {
  const [bankName, setBankName] = useState("");
  // TODO: API 연결 후 로그인 상태 확인 로직 추가
  const [isLogin, setIsLogin] = useState("");
  const [error, setError] = useState(false);

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
    setError(false);
  };

  const handleSearch = () => {
    const validBanks = [
      "KB국민은행",
      "NH농협은행",
      "신한은행",
      "우리은행",
      "하나은행",
    ];
    if (!validBanks.includes(bankName)) {
      setError(true);
    }
  };

  return (
    <>
      {/* TODO: 헤더 영역 공통 컴포넌트로 빼기 */}
      {/* TODO: 로고 누르면 홈으로 이동되게 */}
      <S.LogoContainer>
        <Link to="/">
          <img src="logo.png" alt="Ewha Logo" />
        </Link>
      </S.LogoContainer>
      <S.Divider />
      <S.Header>
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            placeholder="은행명 입력"
            value={bankName}
            onChange={handleBankNameChange}
          />
          <S.SearchIcon />
          {/* TODO: 오류메시지 길어지면 세로로 나오는 오류 수정 필요 */}
          {error && <S.ErrorMessage>오류 </S.ErrorMessage>}
        </S.SearchContainer>
        <S.Menu>
          <S.MenuItem exact to="/deposit">
            예금
          </S.MenuItem>
          <S.MenuItem exact to="/saving">
            적금
          </S.MenuItem>
          <S.MenuItem exact to="/loan">
            대출
          </S.MenuItem>
          <S.MenuItem exact to="/checkcard">
            체크카드
          </S.MenuItem>
        </S.Menu>
        {isLogin ? (
          // TODO: react Fragment 공부하기
          // https://ko.react.dev/reference/react/Fragment
          <>
            {/* TODO: react-router-dom의 Link로 수정하기 */}
            <S.MyPageButton href="/mypage">MY PAGE</S.MyPageButton>
            <S.LogoutLink href="/logout">로그아웃</S.LogoutLink>
          </>
        ) : (
          <S.LoginButton href="/login">LOGIN / SIGN UP</S.LoginButton>
        )}
      </S.Header>
    </>
  );
}
