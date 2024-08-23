import { useState, useEffect } from "react";
import * as S from "../styles/ReviewForm.styles";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Header } from "../components/index.js";

export const ReviewForm = () => {
  const { productCode } = useParams(); // productCode를 URL 파라미터로부터 가져옴
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [bank, setBank] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const existingReview = location.state?.review || "";
  const existingRating = location.state?.rating || 0;

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
        setBank({
          name: data.data.productBank,
          imageUrl: data.data.bankImageUrl,
        }); // Bank 정보를 설정
        setLoading(false);
      } catch (error) {
        setError("Error fetching product details.");
        setLoading(false);
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productCode]);

  const [rating, setRating] = useState(existingRating);
  const [review, setReview] = useState(existingReview);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(-1);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {
    navigate(`/detailed/${product.productCode}`, {
      state: {
        reviewData: { rating, review },
        bank: { name: bank.name, imageUrl: bank.imageUrl },
      },
    });
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="ProductPage">
      <Header />
      <S.ReviewFormContainer>
        {showPopup && (
          <S.Popup>
            <p>{popupMessage}</p>
            <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
          </S.Popup>
        )}
        <S.FormHeader>
          <span>리뷰 쓰기</span>
          <S.CancelButton onClick={handleCancelClick}>취소</S.CancelButton>
        </S.FormHeader>
        <S.BankInfo>
          <img src={bank.imageUrl} alt={`${bank.name} 로고`} />
          <div>
            <p>상품명: {product.productName}</p>
            <p>별점 평가</p>
            <S.StarRating>
              {[...Array(5)].map((_, index) => (
                <S.Star
                  key={index}
                  selected={index < rating}
                  onClick={() => handleRatingChange(index + 1)}
                >
                  ★
                </S.Star>
              ))}
            </S.StarRating>
          </div>
        </S.BankInfo>
        <S.ReviewTextArea
          value={review}
          onChange={handleReviewChange}
          placeholder="자세하고 솔직한 리뷰 작성 부탁드립니다."
        />
        <S.SubmitButton onClick={handleSubmit}>완료</S.SubmitButton>
      </S.ReviewFormContainer>
    </div>
  );
};
