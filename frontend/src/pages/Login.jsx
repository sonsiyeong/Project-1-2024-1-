import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginPage,
  Header,
  LoginBar,
  LoginContainer,
  Form,
  FormGroup,
  Label,
  Input,
  LoginButtonGroup,
  LoginButton,
  Popup,
  Dimmed,
} from "../styles/Login.styles";
// import * as S from "./Login.styles";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    //백엔드에서 API 제공 시 수정할 부분;
    if (id === "testuser" && password === "password123") {
      alert("로그인 성공");
    } else {
      setShowError(true);
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <s.LoginPage>
      <s.Header>
        <img src="/logo.png" alt="EWHA Logo" className="logo" />
      </Header>
      <LoginBar>LOGIN</LoginBar>
      <LoginContainer>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label>ID</Label>
            <Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>PASSWORD</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <LoginButtonGroup>
            <LoginButton type="submit">LOGIN</LoginButton>
          </LoginButtonGroup>
        </Form>
        <button onClick={handleSignUp} className="signup-link">
          SIGN UP
        </button>
      </s.LoginContainer>
      {showError && (
        <>
          <s.Dimmed />
          <s.Popup>
            <s.PopupContent>
              <p>회원 정보가 일치하지 않습니다.</p>
              <button onClick={handleCloseError}>확인</button>
            </s.PopupContent>
          </s.Popup>
        </>
      )}
    </s.LoginPage>
  );
};
