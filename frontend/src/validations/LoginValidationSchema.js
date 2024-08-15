import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  userId: yup.string().required("ID를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

export default LoginValidationSchema;
