import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SignUpValidationSchema } from "./SignUp/validation/SignUpValidationSchema";
import * as S from "../styles/SignUp.styles";

export const SignUp = () => {
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SignUpValidationSchema),
  });

  const watchUsername = watch("username");

  useEffect(() => {
    if (watchUsername && !errors.username) {
      setIsUsernameValid(true);
    } else {
      setIsUsernameValid(false);
    }
  }, [watchUsername, errors.username]);

  const onSubmit = (data) => {
    console.log(data);
    setRegistrationComplete(true);
  };

  const handleConfirmPopup = () => {
    setRegistrationComplete(false);
    navigate("/login");
  };

  return (
    <S.SignUpPage>
      <S.Header>
        <img src="/logo.png" alt="EWHA Logo" className="logo" />
      </S.Header>
      <S.SignUpBar>SIGN UP</S.SignUpBar>
      <S.SignUpContainer>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
        <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <S.SignUpFormGroup>
            <S.Label>이름</S.Label>
            <S.Input type="text" {...register("name")} />
            {errors.name && (
              <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
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
            <S.Input type="text" {...register("username")} />
            {errors.username && (
              <S.ErrorMessage>{errors.username.message}</S.ErrorMessage>
            )}
            <S.DuplicateCheckButton type="button" disabled={!isUsernameValid}>
              중복 확인
            </S.DuplicateCheckButton>
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
            <S.Input type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>
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
