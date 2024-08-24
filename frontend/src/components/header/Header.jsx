import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMenuLink } from "../../utils";
import { BANKS } from "./header.const.js";
import * as S from "./header.styles.js";

export function Header() {
  const [bankName, setBankName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const isLogin = window.sessionStorage.getItem("token");

  const handleProductMenu = (e) => {
    const menuName = e.target.value;
    const link = getMenuLink(menuName);
    navigate(link);
  };

  const handleBankSelect = (event) => {
    const selectedBankName = event.target.value;
    setBankName(selectedBankName);
    const selectedBank = BANKS.find((bank) => bank.name === selectedBankName);
    if (selectedBank) {
      navigate(selectedBank.path);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("role");
    window.sessionStorage.removeItem("userId");
    window.sessionStorage.removeItem("userCode");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <>
      <S.LogoContainer>
        <Link to="/">
          <img src="/logo.png" alt="Ewha Logo" />
        </Link>
      </S.LogoContainer>
      <S.Divider />
      <S.Header>
        <S.SearchContainer>
          <S.SearchSelect value={bankName} onChange={handleBankSelect}>
            <option value="" disabled>
              은행을 선택해주세요
            </option>
            {BANKS.map((bank) => (
              <option key={bank.name} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </S.SearchSelect>
          {error && <S.ErrorMessage> 은행을 선택해 주세요.</S.ErrorMessage>}
        </S.SearchContainer>
        <S.Menu>
          <S.MenuItem value="예금" onClick={handleProductMenu}>
            예금
          </S.MenuItem>
          <S.MenuItem value="적금" onClick={handleProductMenu}>
            적금
          </S.MenuItem>
          <S.MenuItem value="대출" onClick={handleProductMenu}>
            대출
          </S.MenuItem>
          <S.MenuItem value="체크카드" onClick={handleProductMenu}>
            체크카드
          </S.MenuItem>
        </S.Menu>
        {isLogin ? (
          <S.ButtonContainer>
            <S.MyPageButton as={Link} to="/mypage">
              MY PAGE
            </S.MyPageButton>
            <S.LogoutLink as="button" onClick={handleLogout}>
              로그아웃
            </S.LogoutLink>
          </S.ButtonContainer>
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
