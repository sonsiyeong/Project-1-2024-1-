import React, { useState } from "react";
import "./Login.css"; // 별도의 CSS 파일을 사용합니다

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // 예시를 위한 하드코딩된 유효성 검사 (실제에서는 서버와의 통신 필요)
    if (id === "testuser" && password === "password123") {
      alert("로그인 성공");
      // 로그인 성공 후의 동작을 여기에 추가
    } else {
      setShowError(true);
    }
  };

  const handleSignUp = () => {
    alert("회원가입 페이지로 이동"); // 라우터가 없으므로 임시로 alert 사용
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <div className="login-page">
      <header className="header">
        <img src="/logo.png" alt="EWHA Logo" className="logo" />
      </header>
      <div className="login-bar">LOGIN</div>
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group login-button-group">
            <button type="submit" className="login-button">
              LOGIN
            </button>
          </div>
        </form>
        <button onClick={handleSignUp} className="signup-link">
          SIGN UP
        </button>
      </div>
      {showError && (
        <div className="popup">
          <div className="popup-content">
            <p>회원 정보가 일치하지 않습니다.</p>
            <button onClick={handleCloseError}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
