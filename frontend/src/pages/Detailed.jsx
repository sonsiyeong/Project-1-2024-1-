import * as S from "../styles/Detailed.styles.js";
import { Header } from "../components/index.js";
import Information from "../components/Information.jsx";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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
        setProduct(data.data); // API 응답 데이터 구조에 맞게 수정
        setLoading(false);
      } catch (error) {
        setError("Error fetching product details.");
        setLoading(false);
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productCode]);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="ProductPage">
      <Header />
      <S.PageContainer>
        {product && (
          <Information
            bank={{
              name: product.productBank,
              imageUrl: product.bankImageUrl, // API에서 받아온 로고 URL 사용
            }}
            product={product} // 상품 데이터를 Information 컴포넌트에 전달
            reviewData={reviewData} // 리뷰 데이터를 전달
          />
        )}
      </S.PageContainer>
    </div>
  );
};
