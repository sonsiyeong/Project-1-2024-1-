import ProductCard from "./ProductCard";
import kbLogo from "../assets/logos/kb.png";
import nhLogo from "../assets/logos/nh.png";
import shLogo from "../assets/logos/sh.png";
import wooriLogo from "../assets/logos/woori.png";
import hanaLogo from "../assets/logos/hana.png";
import { BankSectionContainer, BankLogo } from "../styles";
import { useState } from "react";

const logoMap = {
  kb: kbLogo,
  nh: nhLogo,
  sh: shLogo,
  woori: wooriLogo,
  hana: hanaLogo,
};

const BankSection = ({ bank }) => {
  const logoPath = logoMap[bank.logoKey];
  const [bookmarkedProducts, setBookmarkedProducts] = useState({});

  const handleBookmarkToggle = (productId, index) => {
    setBookmarkedProducts((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [index]: !prev[productId]?.[index],
      },
    }));
  };

  return (
    <BankSectionContainer>
      <BankLogo src={logoPath} alt={`${bank.name} 로고`} />
      {bank.products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          bookmarked1={bookmarkedProducts[product.id]?.[0]}
          bookmarked2={bookmarkedProducts[product.id]?.[1]}
          onBookmarkToggle1={() => handleBookmarkToggle(product.id, 0)}
          onBookmarkToggle2={() => handleBookmarkToggle(product.id, 1)}
        />
      ))}
    </BankSectionContainer>
  );
};

export default BankSection;
