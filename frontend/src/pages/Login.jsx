import React, { useState } from "react";
import { Header } from "../components/index.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/Login.styles";
import LoginValidationSchema from "../validations/LoginValidationSchema";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }, // 수정된 부분: errors를 가져옵니다.
  } = useForm({
    resolver: yupResolver(LoginValidationSchema),
  });

  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("http://43.202.58.11:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: data.userId,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Success") {
          window.sessionStorage.setItem("token", result.token);
          window.sessionStorage.setItem("role", result.role);
          setIsLogin(true);

          if (data.userId === "admin" && data.password === "adminpassword") {
            alert("관리자 로그인 되었습니다");
          } else {
            alert("로그인 되었습니다");
          }

          navigate("/main");
        } else {
          alert("로그인 중 오류가 발생했습니다. 나중에 다시 시도하세요.");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setShowError(true);
      });
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <S.LoginPage>
      <Header />
      <img src="/logo.png" alt="EWHA Logo" className="logo" />
      {isLogin ? (
        <>
          <S.MyPageButton href="/mypage">MY PAGE</S.MyPageButton>
          <S.LogoutLink href="/logout">로그아웃</S.LogoutLink>
        </>
      ) : (
        <S.LoginButton href="/login">LOGIN / SIGN UP</S.LoginButton>
      )}
      <S.LoginBar>LOGIN</S.LoginBar>
      <S.LoginContainer>
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <S.LoginFormGroup>
            <S.Label>ID</S.Label>
            <S.Input type="text" {...register("userId")} />
            {errors.userId && (
              <S.ErrorMessage>{errors.userId.message}</S.ErrorMessage>
            )}{" "}
          </S.LoginFormGroup>
          <S.LoginFormGroup>
            <S.Label>PASSWORD</S.Label>
            <S.Input type="password" {...register("password")} />
            {errors.password && (
              <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
            )}{" "}
          </S.LoginFormGroup>
          <S.LoginButtonGroup>
            <S.LoginButton type="submit">LOGIN</S.LoginButton>
          </S.LoginButtonGroup>
        </S.LoginForm>
        <button onClick={handleSignUp} className="signup-link">
          SIGN UP
        </button>
      </S.LoginContainer>
      {showError && (
        <>
          <S.Dimmed />
          <S.Popup>
            <S.PopupContent>
              <p>회원 정보가 일치하지 않습니다.</p>
              <button onClick={handleCloseError}>확인</button>
            </S.PopupContent>
          </S.Popup>
        </>
      )}
    </S.LoginPage>
  );
};

export default Login;
