import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReviewFormContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  width: 50%;
  margin: 50px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;

  span {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    flex: 1;
  }

  a {
    position: absolute;
    right: 0;
    font-weight: normal;
  }
`;

export const CancelButton = styled(Link)`
  background-color: transparent;
  border: none;
  color: #186915;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
`;

export const BankInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  img {
    max-width: 100px;
    margin-right: 10px;
  }

  div {
    p {
      margin: 0;
      font-size: 1rem;
      color: #333;
    }
  }
`;

export const StarRating = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const Star = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => (props.selected ? "#186915" : "#ccc")};
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const SubmitButton = styled(Link)`
  background-color: #186915;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
`;

export const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #d9d9d9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
`;
export const ConfirmButton = styled.button`
  background-color: #549052;
  color: white;
  border: none;
  padding: 7px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
`;
