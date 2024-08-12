import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SignUpValidationSchema } from "./validation/SignUpValidationSchema";
import * as s from "./styles";

const SignUpForm = () => {
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
    <s.SignUpPage>
      <s.Header>
        <img src="/logo.png" alt="EWHA Logo" className="logo" />
      </s.Header>
      <s.SignUpBar>SIGN UP</s.SignUpBar>
      <s.SignUpContainer>
        <s.SignUpTitle>회원가입</s.SignUpTitle>
        <s.Form onSubmit={handleSubmit(onSubmit)}>
          <s.FormGroup>
            <s.Label>이름</s.Label>
            <s.Input type="text" {...register("name")} />
            {errors.name && <s.Error>{errors.name.message}</s.Error>}
          </s.FormGroup>
          <s.FormGroup>
            <s.Label>이메일 주소</s.Label>
            <s.Input type="email" {...register("email")} />
            {errors.email && <s.Error>{errors.email.message}</s.Error>}
          </s.FormGroup>
          <s.FormGroup>
            <s.Label>아이디</s.Label>
            <s.Input type="text" {...register("username")} />
            {errors.username && <s.Error>{errors.username.message}</s.Error>}
            <s.DuplicateCheckButton type="button" disabled={!isUsernameValid}>
              중복 확인
            </s.DuplicateCheckButton>
          </s.FormGroup>
          <s.FormGroup>
            <s.Label>비밀번호</s.Label>
            <s.Input type="password" {...register("password")} />
            {errors.password && <s.Error>{errors.password.message}</s.Error>}
          </s.FormGroup>
          <s.FormGroup>
            <s.Label>비밀번호 확인</s.Label>
            <s.Input type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <s.Error>{errors.confirmPassword.message}</s.Error>
            )}
          </s.FormGroup>
          <s.Button type="submit" disabled={!isValid}>
            가입
          </s.Button>
        </s.Form>
        {registrationComplete && (
          <s.PopupOverlay>
            <s.Popup>
              <s.PopupContent>
                <p>가입이 완료되었습니다. 로그인해주세요</p>
                <button onClick={handleConfirmPopup}>확인</button>
              </s.PopupContent>
            </s.Popup>
          </s.PopupOverlay>
        )}
      </s.SignUpContainer>
    </s.SignUpPage>
  );
};

export default SignUpForm;
