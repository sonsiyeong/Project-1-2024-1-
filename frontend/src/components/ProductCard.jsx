import React, { useState } from "react";
import * as S from "../styles/Product.styles";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const ProductCard = ({ product, index }) => {
  // index prop 추가
  const [bookmarkedItems, setBookmarkedItems] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleBookmarkToggle = (bookmarkKey) => {
    setBookmarkedItems((prevBookmarks) => {
      const isBookmarked = prevBookmarks[bookmarkKey];
      setPopupMessage(
        isBookmarked
          ? "MY 스크랩에서 삭제되었습니다."
          : "MY 스크랩에 저장되었습니다."
      );
      return {
        ...prevBookmarks,
        [bookmarkKey]: !isBookmarked,
      };
    });
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
        <S.BookmarkIcon
          onClick={() =>
            handleBookmarkToggle(`product1-${product.productName}`)
          }
        >
          {bookmarkedItems[`product1-${product.productName}`] ? (
            <FaBookmark />
          ) : (
            <FaRegBookmark />
          )}
        </S.BookmarkIcon>
        {product.productName}
      </S.ProductName>
      <S.ProductDescription>
        {product.productFeat &&
          product.productFeat.map((feat, i) => <li key={i}>{feat}</li>)}
      </S.ProductDescription>
      <S.ProductButton to={`/detailed/${product.productCode}`}>
        자세히 보기
      </S.ProductButton>
      {index === 0 && <S.Separator />}
    </S.ProductCardWrapper>
  );
};

export default ProductCard;
