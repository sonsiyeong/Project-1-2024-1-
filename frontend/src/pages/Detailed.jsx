import * as S from "../styles/Detailed.styles.js";
import { Header } from "../components/index.js";
import Information from "../components/Information.jsx";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const bankData = {
  name: "KB국민은행",
  logoKey: "kb",
};

export const Detailed = () => {
  const { productCode } = useParams();
  const location = useLocation();
  const { reviewData } = location.state || {};
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://43.202.58.11:8080/api/products/${productCode}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data); // 상품 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productCode]);

  return (
    <div className="ProductPage">
      <Header />
      <S.PageContainer>
        <Information bank={bankData} reviewData={reviewData} />
      </S.PageContainer>
    </div>
  );
};
