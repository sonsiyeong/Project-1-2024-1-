import styled from "styled-components";

export const SignUpPage = styled.div`
  text-align: center;
`;

export const Header = styled.div`
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    max-width: 150px;
    margin-bottom: 10px;
  }
`;

export const SignUpBar = styled.div`
  background-color: #336633;
  width: 100%;
  padding: 10px 0;
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const SignUpContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const SignUpTitle = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  color: #336633;
  font-weight: bold;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpFormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #336633;
  font-weight: bold;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  width: 100%;
  text-align: left;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #336633;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  font-weight: bold;
  &:disabled {
    background-color: #ccc;
  }
`;

export const DuplicateCheckButton = styled(Button)`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popup = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const PopupContent = styled.div`
  p {
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    background-color: #336633;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
`;
