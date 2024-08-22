import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./header.style.js";

export function Header({ isLogin }) {
  const [bankName, setBankName] = useState("");
  const [error, setError] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // banks 배열 추가
  const banks = [
    { name: "KB국민은행", path: "/kb-bank" },
    { name: "NH농협은행", path: "/nh-bank" },
    { name: "신한은행", path: "/shinhan-bank" },
    { name: "우리은행", path: "/woori-bank" },
    { name: "하나은행", path: "/hana-bank" },
  ];

  // useEffect 내의 setIsLogin 제거
  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      // 부모 컴포넌트에서 isLogin을 제어하므로 여기서 직접 setIsLogin을 호출하지 않음
      // setIsLogin(true); 이 부분은 제거
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
