import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Header } from "../components/index.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import SignUpValidationSchema from "../validations/SignUpValidationSchema";
import * as S from "../styles/SignUp.styles";

export const SignUp = () => {
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SignUpValidationSchema),
  });

  const onSubmit = (data) => {
    fetch("http://43.202.58.11:8080/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: data.userId,
        userName: data.userName,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      }),
    })
      .then((res) => {
        if (res.headers.get("content-type")?.includes("application/json")) {
          return res.json();
        } else {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((result) => {
        if (result.message === "Success") {
          alert("회원가입이 완료되었습니다. 로그인해주세요");
          navigate("/login");
        } else {
          alert(result.message || "회원가입 양식이 틀립니다.");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        alert("회원가입 중 오류가 발생했습니다. 나중에 다시 시도하세요.");
      });
  };

  const handleConfirmPopup = () => {
    setRegistrationComplete(false);
    navigate("/login");
  };

  return (
    <S.SignUpPage>
      <Header />
      <S.SignUpBar>SIGN UP</S.SignUpBar>
      <S.SignUpContainer>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
        <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <S.SignUpFormGroup>
            <S.Label>이름</S.Label>
            <S.Input type="text" {...register("userName")} />
            {errors.userName && (
              <S.ErrorMessage>{errors.userName.message}</S.ErrorMessage>
            )}
          </S.SignUpFormGroup>
          <S.SignUpFormGroup>
            <S.Label>이메일 주소</S.Label>
            <S.Input type="email" {...register("email")} />
            {errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
          </S.SignUpFormGroup>
          <S.SignUpFormGroup>
            <S.Label>아이디</S.Label>
            <S.Input type="text" {...register("userId")} />
            {errors.userId && (
              <S.ErrorMessage>{errors.userId.message}</S.ErrorMessage>
            )}
          </S.SignUpFormGroup>
          <S.SignUpFormGroup>
            <S.Label>비밀번호</S.Label>
            <S.Input type="password" {...register("password")} />
            {errors.password && (
              <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
            )}
          </S.SignUpFormGroup>
          <S.SignUpFormGroup>
            <S.Label>비밀번호 확인</S.Label>
            <S.Input type="password" {...register("passwordConfirm")} />{" "}
            {errors.passwordConfirm && (
              <S.ErrorMessage>{errors.passwordConfirm.message}</S.ErrorMessage>
            )}
          </S.SignUpFormGroup>
          <S.Button type="submit" disabled={!isValid}>
            가입
          </S.Button>
        </S.SignUpForm>
        {registrationComplete && (
          <S.PopupOverlay>
            <S.Popup>
              <S.PopupContent>
                <p>가입이 완료되었습니다. 로그인해주세요</p>
                <button onClick={handleConfirmPopup}>확인</button>
              </S.PopupContent>
            </S.Popup>
          </S.PopupOverlay>
        )}
      </S.SignUpContainer>
    </S.SignUpPage>
  );
};

export default SignUp;
