import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Pretendard", sans-serif;
  }
`;

export const PageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BankLogo = styled.img`
   {
    max-width: 150px;
    height: 20px;
    display: block;
    margin: 0 auto 20px;
  }
`;

export const DetailContainer = styled.div`
  padding: 5px;
`;

export const DetailTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const DetailSection = styled.section`
  margin-bottom: 40px;
`;

export const DetailImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const DetailDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const CommentSection = styled.div`
  margin-top: 40px;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CommentButton = styled.button`
  background-color: #186915;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  background-color: #186915;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  margin-top: 20px;
`;
