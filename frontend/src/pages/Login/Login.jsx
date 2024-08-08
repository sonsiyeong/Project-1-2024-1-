import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./Login.styles";

const Login = () => {
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
      </s.Header>
      <s.LoginBar>LOGIN</s.LoginBar>
      <s.LoginContainer>
        <s.LoginForm onSubmit={handleLogin}>
          <s.LoginFormGroup>
            <s.Label>ID</s.Label>
            <s.Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </s.LoginFormGroup>
          <s.LoginFormGroup>
            <s.Label>PASSWORD</s.Label>
            <s.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </s.LoginFormGroup>
          <s.LoginButtonGroup>
            <s.LoginButton type="submit">LOGIN</s.LoginButton>
          </s.LoginButtonGroup>
        </s.LoginForm>
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

export default Login;
