import {
  ProductCardWrapper,
  ProductName,
  ProductDescription,
  ProductButton,
  Separator,
  BookmarkIcon,
  Popup,
  ConfirmButton,
} from "../styles/ProductPage.styles";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <ProductCardWrapper>
      {showPopup && (
        <Popup>
          <p>{popupMessage}</p>
          <ConfirmButton onClick={handleConfirmClick}>확인</ConfirmButton>
        </Popup>
      )}
      <ProductName>
        <BookmarkIcon onClick={handleBookmarkClick1}>
          {bookmarked1 ? <FaBookmark /> : <FaRegBookmark />}
        </BookmarkIcon>
        {name}
      </ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductButton to="/detailedpage">자세히 보기</ProductButton>
      <Separator />
      <ProductName>
        <BookmarkIcon onClick={handleBookmarkClick2}>
          {bookmarked2 ? <FaBookmark /> : <FaRegBookmark />}
        </BookmarkIcon>
        {name}
      </ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductButton to="/detailedpage">자세히 보기</ProductButton>
    </ProductCardWrapper>
  );
};

export default ProductCard;
