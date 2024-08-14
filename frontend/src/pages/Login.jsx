import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as s from "./Login.styles";
import LoginValidationSchema from "./validation/LoginValidationSchema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidationSchema),
  });

  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    //백엔드에서 API 제공 시 수정할 부분;
    if (data.id === "testuser" && data.password === "password123") {
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
    <LoginPage>
      <Header>
        <img src="/logo.png" alt="EWHA Logo" className="logo" />
      </s.Header>
      <s.LoginBar>LOGIN</s.LoginBar>
      <s.LoginContainer>
        <s.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <s.LoginFormGroup>
            <s.Label>ID</s.Label>
            <s.Input type="text" {...register("id")} />
            {errors.id && <s.ErrorMessage>{errors.id.message}</s.ErrorMessage>}
          </s.LoginFormGroup>
          <s.LoginFormGroup>
            <s.Label>PASSWORD</s.Label>
            <s.Input type="password" {...register("password")} />
            {errors.password && (
              <s.ErrorMessage>{errors.password.message}</s.ErrorMessage>
            )}
          </s.LoginFormGroup>
          <s.LoginButtonGroup>
            <s.LoginButton type="submit">LOGIN</s.LoginButton>
          </s.LoginButtonGroup>
        </s.LoginForm>
        <button onClick={handleSignUp} className="signup-link">
          SIGN UP
        </button>
      </LoginContainer>
      {showError && (
        <>
          <Dimmed />
          <Popup>
            <div className="popup-content">
              <p>회원 정보가 일치하지 않습니다.</p>
              <button onClick={handleCloseError}>확인</button>
            </div>
          </Popup>
        </>
      )}
    </LoginPage>
  );
};
