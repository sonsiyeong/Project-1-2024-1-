import { useState, useEffect } from "react";
import "./SignUp.css"; // 별도의 CSS 파일을 사용합니다';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const validateEmail = (email) => {
    if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(email)) {
      setEmailError("유효한 이메일 주소가 아닙니다");
    } else {
      setEmailError("");
    }
  };

  const validateUsername = (username) => {
    if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(username)) {
      setUsernameError("사용할 수 없는 아이디입니다.");
    } else {
      setUsernameError("");
    }
  };

  const validatePassword = (password) => {
    if (password.length > 20) {
      setPasswordError("비밀번호가 너무 깁니다");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console
    console.log({
      name,
      email,
      username,
      password,
    });

    setRegistrationComplete(true);
  };

  useEffect(() => {
    if (
      name &&
      email &&
      !emailError &&
      username &&
      !usernameError &&
      password &&
      !passwordError &&
      confirmPassword &&
      !confirmPasswordError
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    name,
    email,
    emailError,
    username,
    usernameError,
    password,
    passwordError,
    confirmPassword,
    confirmPasswordError,
  ]);

  return (
    <div className="signup-page">
      <header className="header">
        <img src="/logo.png" alt="EWHA Logo" className="logo" />
        <div className="login-bar">LOGIN</div>
      </header>
      <div className="signup-container">
        <div className="signup-title">회원가입</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>이메일 주소</label>
            <div className="email-input">
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                required
              />
              <span>@</span>
              <input type="text" required />
            </div>
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className="form-group">
            <label>아이디</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                validateUsername(e.target.value);
              }}
              required
            />
            {usernameError && <span className="error">{usernameError}</span>}
            <button type="button" className="duplicate-check">
              중복 확인
            </button>
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              required
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <div className="form-group">
            <label>비밀번호 확인</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                handleConfirmPassword(e.target.value);
              }}
              required
            />
            {confirmPasswordError && (
              <span className="error">{confirmPasswordError}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={!formValid}
            className={formValid ? "button" : "button-disabled"}
          >
            가입
          </button>
        </form>
        {registrationComplete && (
          <div className="popup-overlay">
            <div className="popup">
              <div className="popup-content">
                <p>가입이 완료되었습니다. 로그인해 주세요</p>
                <button onClick={() => setRegistrationComplete(false)}>
                  확인
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
