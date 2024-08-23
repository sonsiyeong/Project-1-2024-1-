import ProductCard from "./ProductCard";
import kbLogo from "../assets/logos/kb.png";
import nhLogo from "../assets/logos/nh.png";
import shLogo from "../assets/logos/sh.png";
import wooriLogo from "../assets/logos/woori.png";
import hanaLogo from "../assets/logos/hana.png";
import * as S from "../styles/Product.styles";
import { useState } from "react";

const logoMap = {
  국민은행: kbLogo,
  농협은행: nhLogo,
  신한은행: shLogo,
  우리은행: wooriLogo,
  하나은행: hanaLogo,
};

export const BankSection = ({ bank }) => {
  const logoPath = logoMap[bank.name];
  const [bookmarkedProducts, setBookmarkedProducts] = useState({});

  const handleBookmarkToggle = (bookmarkKey) => {
    setBookmarkedProducts((prevBookmarks) => {
      return {
        ...prevBookmarks,
        [bookmarkKey]: !prevBookmarks[bookmarkKey],
      };
    });
  };

  return (
    <S.BankSectionContainer>
      <S.BankLogo src={logoPath} alt={`${bank.name} 로고`} />
      {bank.products.map((product, index) => (
        <ProductCard
          key={product.productCode}
          product={product}
          index={index}
          bookmarkedItems={bookmarkedProducts}
          handleBookmarkToggle={handleBookmarkToggle}
        />
      ))}
    </S.BankSectionContainer>
  );
};

export default BankSection;
