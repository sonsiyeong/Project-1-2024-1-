import styled from "styled-components";
import { Link } from "react-router-dom";

export const BankSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin: 15px;
`;

export const BankLogo = styled.img`
  width: 252px;
  height: 42px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const ProductCategory = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 10px;
  gap: 40px;
`;

export const CategoryTitle = styled.h2`
  font-size: 20px;
  color: black;
  margin-bottom: 15px;
  text-align: center;
`;

export const CategoryColumn = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 280px;
  max-height: 540px;
  min-height: 540px;
  border: 2px solid green;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
`;

export const ProductItem = styled.div`
  margin-bottom: 30px;
  text-align: center;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  &:last-child {
    border-bottom: none;
  }
`;

export const ProductSeparator = styled.div`
  width: 100px;
  height: 1.5px;
  background-color: #186915;
  margin: 10px auto;
  margin-bottom: 30px;
`;

export const ProductName = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  margin-top: 10px;
  justify-content: center;
  font-size: 20px;
`;

export const ProductDescription = styled.ul`
  font-size: 15px;
  color: black;
  margin-bottom: 30px;
  text-align: left;
  list-style-type: disc;
  padding-left: 20px;

  & > li {
    margin-bottom: 20px;
  }
`;

export const BuyButton = styled(Link)`
  text-decoration: none;
  background-color: #549052;
  color: white;
  border: none;
  padding: 7px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: -5px;
  margin-top: 10px;

  &:hover {
    background-color: darkgreen;
  }
`;

export const BookmarkIcon = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: #186915;
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

  &:hover {
    background-color: darkgreen;
  }
`;

export const Separator = styled.div`
  width: 100px;
  height: 1.5px;
  background-color: #186915;
  margin: 40px;
  margin-bottom: 30px;
  margin-top: -5px;
`;
