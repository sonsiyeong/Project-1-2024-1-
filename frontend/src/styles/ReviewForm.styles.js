import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReviewFormContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  width: 50%;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
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
`;

export const SubmitButton = styled.button`
  background-color: #186915;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  width: 100%;
`;
