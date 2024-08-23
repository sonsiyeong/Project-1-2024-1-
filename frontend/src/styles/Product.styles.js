import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  text-align: center;
`;

export const AppMain = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 5px;
`;

export const BankSectionContainer = styled.div`
  border: 2px solid green;
  padding: 20px;
  border-radius: 15px;
  margin: 10px;
  width: 300px;
  height: flex;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BankLogo = styled.img`
  width: 210px;
  height: 35px;
`;

export const ProductCardWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProductName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const DetailDescription = styled.div`
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
  padding-bottom: 4px;
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  margin: 15px;
`;

export const ProductButton = styled(Link)`
  text-decoration: none;
  background-color: #549052;
  color: white;
  border: none;
  padding: 7px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Separator = styled.div`
  width: 100px;
  height: 2px;
  background-color: #186915;
  margin: 60px;
  margin-bottom: 3px;
`;
export const BookmarkIcon = styled.div`
  cursor: pointer;
  font-size: 17px;
  color: #186915;
  align-self: flex-end;
  margin-right: 10px;
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
export const Underline = styled.div`
  text-decoration: underline;
`;
