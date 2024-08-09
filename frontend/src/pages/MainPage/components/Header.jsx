import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './header.style.js';

export function Header() {
  const [bankName, setBankName] = useState('');
  // TODO: API 연결 후 로그인 상태 확인 로직 추가
  const [isLogin, setIsLogin] = useState('');
  const [error, setError] = useState(false);

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
    setError(false);
  };

  const handleSearch = () => {
    const validBanks = [
      'KB국민은행',
      'NH농협은행',
      '신한은행',
      '우리은행',
      '하나은행',
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
        <img src="logo.png" alt="Ewha Logo" />
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
          <S.SearchButton onClick={handleSearch}>🔍</S.SearchButton>
          {/* TODO: 오류메시지 길어지면 세로로 나오는 오류 수정 필요 */}
          {error && <S.ErrorMessage>오류 </S.ErrorMessage>}
        </S.SearchContainer>
        <S.Menu>
          <Link to="/deposit">
            <S.MenuButton>예금</S.MenuButton>
          </Link>
          <Link to="saving">
            <S.MenuButton>적금</S.MenuButton>
          </Link>
          <Link to="loan">
            <S.MenuButton>대출</S.MenuButton>
          </Link>
          <Link to="checkcard">
            <S.MenuButton>체크카드</S.MenuButton>
          </Link>
        </S.Menu>
        {isLogin ? (
          // TODO: react Fragment 공부하기
          // https://ko.react.dev/reference/react/Fragment
          <>
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
