import React, { useState } from "react";
import * as S from "../styles/ReviewForm.styles";

export const ReviewForm = ({ bankName, productName }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {
    // 리뷰 제출 로직 추가
    console.log("리뷰 제출:", { rating, review });
  };

  return (
    <S.ReviewFormContainer>
      <S.FormHeader>
        <span>리뷰 쓰기</span>
        <S.CancelButton>취소</S.CancelButton>
      </S.FormHeader>
      <S.BankInfo>
        <img src={`${bankName}.png`} alt={`${bankName} 로고`} />
        <div>
          <p>상품명: {productName}</p>
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
        placeholder="자세하고 솔직한 리뷰 작성 부탁드립니다. (최소 20자 이상)"
      />
      <S.SubmitButton onClick={handleSubmit}>완료</S.SubmitButton>
    </S.ReviewFormContainer>
  );
};
