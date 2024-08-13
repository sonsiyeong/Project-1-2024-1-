import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpPage,
  Header,
  SignUpBar,
  SignUpContainer,
  SignUpTitle,
  Form,
  FormGroup,
  Label,
  Input,
  EmailInput,
  Error,
  Button,
  DuplicateCheckButton,
  PopupOverlay,
  Popup,
  PopupContent,
} from "../styles/SignUp.styles";

export const SignUp = () => {
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
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const navigate = useNavigate();

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
      setIsUsernameValid(false);
    } else {
      setUsernameError("");
      setIsUsernameValid(true);
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

  const handleConfirmPopup = () => {
    setRegistrationComplete(false);
    navigate("/login");
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
    <SignUpPage>
      <Header>
        <img src="/logo.png" alt="EWHA Logo" className="logo" />
      </Header>
      <SignUpBar>SIGN UP</SignUpBar>
      <SignUpContainer>
        <SignUpTitle>회원가입</SignUpTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>이름</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>이메일 주소</Label>
            <EmailInput>
              <Input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                required
              />
              <span>@</span>
              <Input type="text" required />
            </EmailInput>
            {emailError && <Error>{emailError}</Error>}
          </FormGroup>
          <FormGroup>
            <Label>아이디</Label>
            <Input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                validateUsername(e.target.value);
              }}
              required
            />
            {usernameError && <Error>{usernameError}</Error>}
            <DuplicateCheckButton type="button" disabled={!isUsernameValid}>
              중복 확인
            </DuplicateCheckButton>
          </FormGroup>
          <FormGroup>
            <Label>비밀번호</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              required
            />
            {passwordError && <Error>{passwordError}</Error>}
          </FormGroup>
          <FormGroup>
            <Label>비밀번호 확인</Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                handleConfirmPassword(e.target.value);
              }}
              required
            />
            {confirmPasswordError && <Error>{confirmPasswordError}</Error>}
          </FormGroup>
          <Button type="submit" disabled={!formValid}>
            가입
          </Button>
        </Form>
        {registrationComplete && (
          <PopupOverlay>
            <Popup>
              <PopupContent>
                <p>가입이 완료되었습니다. 로그인해 주세요</p>
                <button onClick={handleConfirmPopup}>확인</button>
              </PopupContent>
            </Popup>
          </PopupOverlay>
        )}
      </SignUpContainer>
    </SignUpPage>
  );
};
