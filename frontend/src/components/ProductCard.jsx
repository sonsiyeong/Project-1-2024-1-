import * as S from "../styles/Product.styles";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({
  product,
  onBookmarkToggle1,
  onBookmarkToggle2,
  bookmarked1,
  bookmarked2,
}) => {
  const { name } = product;
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleBookmarkClick1 = () => {
    if (bookmarked1) {
      setPopupMessage("MY 스크랩에서 삭제되었습니다.");
    } else {
      setPopupMessage("MY 스크랩에 저장되었습니다.");
    }
    onBookmarkToggle1();
    setShowPopup(true);
  };

  const handleBookmarkClick2 = () => {
    if (bookmarked2) {
      setPopupMessage("MY 스크랩에서 삭제되었습니다.");
    } else {
      setPopupMessage("MY 스크랩에 저장되었습니다.");
    }
    onBookmarkToggle2();
    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
  };

  return (
    <S.ProductCardWrapper>
      {showPopup && (
        <S.Popup>
          <p>{popupMessage}</p>
          <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
        </S.Popup>
      )}
      <S.ProductName>
        <S.BookmarkIcon onClick={handleBookmarkClick1}>
          {bookmarked1 ? <FaBookmark /> : <FaRegBookmark />}
        </S.BookmarkIcon>
        {name}
      </S.ProductName>
      <S.ProductDescription>{product.description}</S.ProductDescription>
      <S.ProductButton to="/detailedpage">자세히 보기</S.ProductButton>
      <S.Separator />
      <S.ProductName>
        <S.BookmarkIcon onClick={handleBookmarkClick2}>
          {bookmarked2 ? <FaBookmark /> : <FaRegBookmark />}
        </S.BookmarkIcon>
        {name}
      </S.ProductName>
      <S.ProductDescription>{product.description}</S.ProductDescription>
      <S.ProductButton to="/detailedpage">자세히 보기</S.ProductButton>
    </S.ProductCardWrapper>
  );
};

export default ProductCard;
