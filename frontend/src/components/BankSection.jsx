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
  const [bookmarkedProducts, setBookmarkedProducts] = useState(() => {
    const storedBookmarks = JSON.parse(window.sessionStorage.getItem('bookmarkedItems')) || {};
    return storedBookmarks;
  });

  const handleBookmarkToggle = (bookmarkKey, productInfo) => {
    setBookmarkedProducts((prevBookmarks) => {
      const updatedBookmarks = {
        ...prevBookmarks,
        [bookmarkKey]: !prevBookmarks[bookmarkKey],
      };

      // 세션 스토리지에 저장
      const sessionData = JSON.parse(window.sessionStorage.getItem('bookmarkedItems')) || {};
      if (updatedBookmarks[bookmarkKey]) {
        sessionData[bookmarkKey] = productInfo;
      } else {
        delete sessionData[bookmarkKey];
      }
      window.sessionStorage.setItem('bookmarkedItems', JSON.stringify(sessionData));

      return updatedBookmarks;
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
