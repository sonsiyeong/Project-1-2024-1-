import styled from "styled-components";

export const Container = styled.div`
  display: flex; /* 사이드바와 폼을 수평으로 배치 */
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #186915;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const SectionTitle = styled.h2`
  font-size: 23px;
  margin: 50px 0;
  font-weight: bold;
  cursor: pointer; /* 클릭 가능하도록 스타일 추가 */
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  flex: 1; /* 남은 공간을 폼이 차지하도록 */
  background-color: #f9f9f9;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3d8a3e;
  color: white;
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
`;

export const FormTitle = styled.h2`
  margin: 0;
`;

export const ResetButton = styled.button`
  background-color: #f5f5f5;
  color: #186915;
  padding: 10px;
  border: 1px solid #186915;
  border-radius: 5px;
  cursor: pointer;
`;

export const FormBody = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #5fa446;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px; /* 폼의 마지막 요소와 여백 추가 */
`;

export const ResetButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
