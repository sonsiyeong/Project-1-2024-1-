import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./header.styles.js";

export function Header() {
  const [bankName, setBankName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const banks = [
    { name: "KB국민은행", path: "/kb-bank" },
    { name: "NH농협은행", path: "/nh-bank" },
    { name: "신한은행", path: "/shinhan-bank" },
    { name: "우리은행", path: "/woori-bank" },
    { name: "하나은행", path: "/hana-bank" },
  ];

  const isLogin = window.sessionStorage.getItem("token");

  const handleBankSelect = (event) => {
    const selectedBankName = event.target.value;
    setBankName(selectedBankName);
    const selectedBank = banks.find((bank) => bank.name === selectedBankName);
    if (selectedBank) {
      navigate(selectedBank.path);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem("token");
    alert("로그아웃 되었습니다.");
    navigate("/");
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
          <S.SearchSelect value={bankName} onChange={handleBankSelect}>
            <option value="" disabled>
              은행을 선택해주세요
            </option>
            {banks.map((bank) => (
              <option key={bank.name} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </S.SearchSelect>
          {error && <S.ErrorMessage> 은행을 선택해 주세요.</S.ErrorMessage>}
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
