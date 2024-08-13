import * as yup from "yup";

const SignUpValidationSchema = yup.object().shape({
  name: yup.string().required("이름은 필수항목입니다."),
  email: yup
    .string()
    .matches(
      /^\w+([-]?\w+)*@\w+([-.]?\w+)*(\.\w{2,3})+$/,
      "올바른 이메일 형식을 입력하세요"
    ),
  username: yup
    .string()
    .matches(
      /^[a-z0-9]+$/,
      "아이디는 소문자 알파벳과 숫자만 사용할 수 있습니다."
    ),
  password: yup
    .string()
    .min(8, "8자 이상의 비밀번호를 입력해 주세요")
    .max(20, "20자 이하의 비밀번호를 입력해 주세요"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않아요."),
});

export default SignUpValidationSchema;
