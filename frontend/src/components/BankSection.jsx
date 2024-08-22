import ProductCard from "./ProductCard";
import kbLogo from "../assets/logos/kb.png";
import nhLogo from "../assets/logos/nh.png";
import shLogo from "../assets/logos/sh.png";
import wooriLogo from "../assets/logos/woori.png";
import hanaLogo from "../assets/logos/hana.png";
import * as S from "../styles/Product.styles";
import { useState } from "react";

const logoMap = {
  kb: kbLogo,
  nh: nhLogo,
  sh: shLogo,
  woori: wooriLogo,
  hana: hanaLogo,
};

export const BankSection = ({ bank }) => {
  const logoPath = logoMap[bank.logoKey];
  const [bookmarkedProducts, setBookmarkedProducts] = useState({});
  const [bankData, setBankData] = useState(null);

  const handleBookmarkToggle = (productId, index) => {
    setBookmarkedProducts((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [index]: !prev[productId]?.[index],
      },
    }));
  };

  // TODO: API 데이터 '국민'말고 다 불러오는지 확인 필요
  const productType = "예금";

  const fetchBankData = async () => {
    try {
      const response = await fetch(
        `http://43.202.58.11:8080/api/products/productType/${productType}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch bank data");
      }
      const data = await response.json();

      return data;
    } catch (err) {
      // setError("데이터를 불러오는데 실패했습니다.");
    } finally {
      // setLoading(false);
    }
  };
  const data = fetchBankData();
  console.log(data);

  return (
    <S.BankSectionContainer>
      <S.BankLogo src={logoPath} alt={`${bank.name} 로고`} />
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
    </S.BankSectionContainer>
  );
};

export default BankSection;
