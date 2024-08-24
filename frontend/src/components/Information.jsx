import * as S from "../styles/Detailed.styles";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMenuLink } from "../utils";

const Information = ({
  bank,
  product: {
    productCode,
    productAge,
    productAmount,
    productBenefit,
    productDescription,
    productInterestRate,
    productInterestTopRate,
    productName,
    productTerm,
    productType,
    productUrl,
  },
  reviewData,
}) => {
  const logoPath = bank.imageUrl;
  const [bookmarked, setBookmarked] = useState(false);
  const [scrapCode, setScrapCode] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [reviews, setReviews] = useState(reviewData ? [reviewData] : []);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);

  const navigate = useNavigate();
  const userCode = window.sessionStorage.getItem("userCode");
  const authToken = window.sessionStorage.getItem("token");

  useEffect(() => {
    const fetchBookmarkStatus = async () => {
      const storedBookmarks =
        JSON.parse(window.sessionStorage.getItem("bookmarkedItems")) || {};

      try {
        const response = await fetch(
          `http://43.202.58.11:8080/api/users/${userCode}/scraps`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status === 403) {
          console.error("접근 권한이 없습니다.");
          return;
        }

        const result = await response.json();
        if (result.data) {
          const bookmark = result.data.find(
            (item) => item.productCode === productCode
          );
          if (bookmark) {
            setBookmarked(true);
            setScrapCode(bookmark.scrapCode);
            storedBookmarks[productCode] = {
              scrapCode: bookmark.scrapCode,
              bookmarked: true,
            };
            window.sessionStorage.setItem(
              "bookmarkedItems",
              JSON.stringify(storedBookmarks)
            );
          } else {
            setBookmarked(false);
            setScrapCode(null);
            delete storedBookmarks[productCode];
            window.sessionStorage.setItem(
              "bookmarkedItems",
              JSON.stringify(storedBookmarks)
            );
          }
        }
      } catch (error) {
        console.error("Error fetching bookmark status:", error);
      }
    };

    if (authToken && userCode) {
      fetchBookmarkStatus();
    } else {
      console.error("유효한 인증 토큰 또는 사용자 코드가 없습니다.");
    }
  }, [productCode, userCode, authToken]);

  const handleBookmarkClick = async () => {
    if (!authToken) {
      setPopupMessage("로그인 후 사용 가능합니다.");
      setShowPopup(true);
      return;
    }

    const storedBookmarks =
      JSON.parse(window.sessionStorage.getItem("bookmarkedItems")) || {};

    if (bookmarked) {
      try {
        const response = await fetch(
          `http://43.202.58.11:8080/api/scraps/${scrapCode}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.ok) {
          setBookmarked(false);
          setScrapCode(null);
          setPopupMessage("MY 스크랩에서 삭제되었습니다.");
          delete storedBookmarks[productCode];
          window.sessionStorage.setItem(
            "bookmarkedItems",
            JSON.stringify(storedBookmarks)
          );
        } else {
          const result = await response.json();
          console.error("스크랩 삭제에 실패했습니다:", result.msg);
        }
      } catch (error) {
        console.error("스크랩 삭제 요청 중 오류 발생:", error);
      }
    } else {
      try {
        const response = await fetch(
          `http://43.202.58.11:8080/api/users/${userCode}/scraps`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
              productCode,
              userCode,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          setBookmarked(true);
          setScrapCode(result.data.scrapCode);
          setPopupMessage("MY 스크랩에 저장되었습니다.");
          storedBookmarks[productCode] = {
            scrapCode: result.data.scrapCode,
            bookmarked: true,
          };
          window.sessionStorage.setItem(
            "bookmarkedItems",
            JSON.stringify(storedBookmarks)
          );
        } else {
          console.error("스크랩 작업에 실패했습니다:", result.msg);
        }
      } catch (error) {
        console.error("북마크 추가 요청 중 오류 발생:", error);
      }
    }
    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
    if (popupMessage === "로그인 후 사용 가능합니다.") {
      navigate("/login");
    }
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
    navigate(`/detailed/${productCode}/reviewform`, {
      state: {
        rating: review.rating,
        review: review.review,
        bank,
      },
    });
  };

  const handleWriteReview = () => {
    if (!authToken) {
      setPopupMessage("로그인 후에 작성 가능합니다.");
      setShowPopup(true);
    } else {
      navigate(`/detailed/${productCode}/reviewform`);
    }
  };

  const backButtonLink = getMenuLink(productType);

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
        <S.DetailTitle>{productName}</S.DetailTitle>
        <S.DetailLinkButton href={productUrl} target="_blank">
          상세 링크
        </S.DetailLinkButton>
      </S.DetailTitleContainer>
      <S.Divider />
      <S.DetailSection>
        <S.BankLogo src={logoPath} alt={`${bank.name} 로고`} />
        <S.DetailDescriptionWrap>
          <S.DetailDescription>{productDescription}</S.DetailDescription>
          <S.DetailDescription>
            금리: {productInterestRate}% - {productInterestTopRate}%
          </S.DetailDescription>
          <S.DetailDescription>가입 금액: {productAmount}</S.DetailDescription>
          <S.DetailDescription>가입 연령: {productAge}</S.DetailDescription>
          <S.DetailDescription>가입 기간: {productTerm}</S.DetailDescription>
          <S.DetailDescription>상품 혜택: {productBenefit}</S.DetailDescription>
        </S.DetailDescriptionWrap>
      </S.DetailSection>
      <S.Divider />
      <S.CommentSection>
        <h3>상품 리뷰</h3>
        <S.ButtonContainer>
          <S.CommentButton onClick={handleWriteReview}>작성</S.CommentButton>
        </S.ButtonContainer>
      </S.CommentSection>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.review}>
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
        <S.BackButton to={backButtonLink}>목록</S.BackButton>
      </S.ButtonContainer>
    </S.DetailContainer>
  );
};

export default Information;
