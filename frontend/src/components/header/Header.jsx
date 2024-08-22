import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./header.style.js";

export function Header({ isLogin }) {
  const [bankName, setBankName] = useState("");
  const [error, setError] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 세션 스토리지에서 토큰이 있으면 로그인 상태로 설정
    const token = window.sessionStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
    setError(false);
  };

  const handleSearch = () => {
    const selectedBank = banks.find((bank) => bank.name === bankName);
    if (selectedBank) {
      navigate(selectedBank.path);
    } else {
      setError(true);
    }
  };

  const handleBankSelect = (bank) => {
    setBankName(bank.name);
    setShowDropdown(false);
    navigate(bank.path);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
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
            placeholder="검색할 은행 선택"
            value={bankName}
            onFocus={toggleDropdown}
            onChange={handleBankNameChange}
          />
          <S.SearchIcon onClick={handleSearch} />
          {showDropdown && (
            <S.Dropdown>
              {banks.map((bank) => (
                <S.DropdownItem
                  key={bank.name}
                  onClick={() => handleBankSelect(bank)}
                >
                  {bank.name}
                </S.DropdownItem>
              ))}
            </S.Dropdown>
          )}
          {error && (
            <S.ErrorMessage> 아래에서 은행을 선택해 주세요</S.ErrorMessage>
          )}
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
          <>
            <S.MyPageButton as={Link} to="/mypage">
              MY PAGE
            </S.MyPageButton>
            <S.LogoutLink href="/logout">로그아웃</S.LogoutLink>
          </>
        ) : (
          <S.LoginButton as={Link} to="/login">
            LOGIN / SIGN UP
          </S.LoginButton>
        )}
      </S.Header>
    </>
  );
}

export default Header;
