import * as S from "../styles/Detailed.styles";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Information = ({ bank, product, reviewData }) => {
  const logoPath = bank.imageUrl;
  const [bookmarked, setBookmarked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [reviews, setReviews] = useState(reviewData ? [reviewData] : []);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);

  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    if (bookmarked) {
      setPopupMessage("MY 스크랩에서 삭제되었습니다.");
    } else {
      setPopupMessage("MY 스크랩에 저장되었습니다.");
    }
    setBookmarked(!bookmarked);
    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
  };

  const handleDeleteReview = () => {
    const updatedReviews = reviews.filter(
      (review) => review !== reviewToDelete
    );
    setReviews(updatedReviews);
    setShowDeletePopup(false);
  };
  const confirmDeleteReview = (review) => {
    setReviewToDelete(review);
    setShowDeletePopup(true);
  };

  const handleEditReview = (review) => {
    navigate("/reviewform", {
      state: {
        rating: review.rating,
        review: review.review,
        bank,
      },
    });
  };

  return (
    <S.DetailContainer>
      {showPopup && (
        <S.Popup>
          <p>{popupMessage}</p>
          <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
        </S.Popup>
      )}
      {showDeletePopup && (
        <S.Popup>
          <p>작성한 리뷰를 삭제하시겠습니까?</p>
          <S.DeleteButton onClick={() => setShowDeletePopup(false)}>
            취소
          </S.DeleteButton>
          <S.ConfirmButton onClick={handleDeleteReview}>삭제</S.ConfirmButton>
        </S.Popup>
      )}
      <S.DetailTitleContainer>
        <S.BookmarkIcon onClick={handleBookmarkClick}>
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </S.BookmarkIcon>
        <S.DetailTitle>{product.productName}</S.DetailTitle>
        <S.DetailLinkButton href={product.productUrl} target="_blank">
          상세 링크
        </S.DetailLinkButton>
      </S.DetailTitleContainer>
      <S.Divider />
      <S.DetailSection>
        <S.BankLogo src={logoPath} alt={`${bank.name} 로고`} />
        <S.DetailDescription>{product.productDescription}</S.DetailDescription>
        <S.DetailDescription>
          금리: {product.productInterestRate}% -{" "}
          {product.productInterestTopRate}%
        </S.DetailDescription>
        <S.DetailDescription>
          가입 금액: {product.productAmount}
        </S.DetailDescription>
        <S.DetailDescription>
          가입 연령: {product.productAge}
        </S.DetailDescription>
        <S.DetailDescription>
          가입 기간: {product.productTerm}
        </S.DetailDescription>
        <S.DetailDescription>
          상품 혜택: {product.productBenefit}
        </S.DetailDescription>
      </S.DetailSection>
      <S.Divider />
      <S.CommentSection>
        <h3>상품 리뷰</h3>
        <S.ButtonContainer>
          <S.CommentButton to="/reviewform">작성</S.CommentButton>
        </S.ButtonContainer>
      </S.CommentSection>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index}>
            <S.ProfileActions>
              <S.ProfileId>ID</S.ProfileId>
              <S.ActionLink onClick={() => handleEditReview(review)}>
                수정
              </S.ActionLink>
              <S.ActionLink onClick={() => confirmDeleteReview(review)}>
                삭제
              </S.ActionLink>
            </S.ProfileActions>
            <S.StarRatingContainer>
              <S.StarRating>
                {[...Array(5)].map((_, index) => (
                  <S.Star key={index} selected={index < review.rating}>
                    ★
                  </S.Star>
                ))}
              </S.StarRating>
              <S.ReviewDate>{new Date().toLocaleDateString()}</S.ReviewDate>
            </S.StarRatingContainer>

            <p>{review.review}</p>
          </div>
        ))
      ) : (
        <S.NoCommentMessage>작성된 리뷰가 없습니다.</S.NoCommentMessage>
      )}
      <S.Divider />
      <S.ButtonContainer>
        <S.BackButton to="/deposit">목록</S.BackButton>
      </S.ButtonContainer>
    </S.DetailContainer>
  );
};

export default Information;
