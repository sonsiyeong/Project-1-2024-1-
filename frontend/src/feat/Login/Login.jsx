import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  // const navigate = useNavigate();

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
    // navigate("/signup");
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
        <>
          <div className="dimmed"></div>
          <div className="popup">
            <div className="popup-content">
              <p>회원 정보가 일치하지 않습니다.</p>
              <button onClick={handleCloseError}>확인</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
