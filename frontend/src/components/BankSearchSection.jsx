import React, { useState } from "react";
import * as S from "../styles/BankSearchSection.styles.js";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const BankSearchSection = ({ bank }) => {
  const [bookmarkedItems, setBookmarkedItems] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleBookmarkToggle = (productId) => {
    setBookmarkedItems((prevBookmarks) => {
      const isBookmarked = prevBookmarks[productId];
      setPopupMessage(
        isBookmarked
          ? "MY 스크랩에서 삭제되었습니다."
          : "MY 스크랩에 저장되었습니다."
      );
      return {
        ...prevBookmarks,
        [productId]: !isBookmarked,
      };
    });
    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
  };

  return (
    <S.BankSectionContainer>
      {showPopup && (
        <S.Popup>
          <p>{popupMessage}</p>
          <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
        </S.Popup>
      )}
      <S.BankLogo src={bank.logo} alt={bank.name} />
      <S.ProductCategory>
        {["예금", "적금", "대출", "체크카드"].map((category, index) => (
          <div key={index}>
            <S.CategoryTitle>{category}</S.CategoryTitle>
            <S.CategoryColumn>
              {bank.products
                .filter((product) => product.category === category)
                .map((product) => (
                  <S.ProductItem key={product.id}>
                    <S.ProductName>
                      <S.BookmarkIcon
                        onClick={() => handleBookmarkToggle(product.id)}
                      >
                        {bookmarkedItems[product.id] ? (
                          <FaBookmark />
                        ) : (
                          <FaRegBookmark />
                        )}
                      </S.BookmarkIcon>
                      {product.name}
                    </S.ProductName>
                    <S.ProductImage />
                    <S.ProductDescription>
                      특징 <span>한 눈</span>에 보기
                    </S.ProductDescription>
                    <S.BuyButton to="/detailedpage">자세히 보기</S.BuyButton>
                  </S.ProductItem>
                ))}
            </S.CategoryColumn>
          </div>
        ))}
      </S.ProductCategory>
    </S.BankSectionContainer>
  );
};

export default BankSearchSection;
