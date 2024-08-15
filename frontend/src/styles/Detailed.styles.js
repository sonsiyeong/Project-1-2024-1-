import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BankLogo = styled.img`
   {
    max-width: 150px;
    height: auto;
    display: block;
    margin: 0 auto 20px;
  }
`;

export const DetailContainer = styled.div`
  padding: 20px;
`;

export const DetailTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailTitle = styled.h2`
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
`;

export const DetailLinkButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
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
export const NoCommentMessage = styled.p`
  color: #888;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CommentButton = styled(Link)`
  background-color: #186915;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
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

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #d9d9d9;
  margin: 20px 0;
`;

export const BookmarkIcon = styled.div`
  cursor: pointer;
  font-size: 30px;
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
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
