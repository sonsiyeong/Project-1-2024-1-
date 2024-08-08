import { useState } from "react";
import {
  ProductCardWrapper,
  ProductName,
  ProductDescription,
  ProductButton,
  Separator,
  BookmarkIcon,
  Popup,
  ConfirmButton,
} from "../styles";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { name } = product;
  const [bookmarked, setBookmarked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

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
  return (
    <ProductCardWrapper>
      {showPopup && (
        <Popup>
          <p>{popupMessage}</p>
          <ConfirmButton onClick={handleConfirmClick}>확인</ConfirmButton>
        </Popup>
      )}

      <ProductName>
        {" "}
        <BookmarkIcon onClick={handleBookmarkClick}>
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </BookmarkIcon>
        {name}
      </ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductButton to={product.link}>자세히 보기</ProductButton>
      <Separator />
      <ProductName>
        {" "}
        <BookmarkIcon onClick={handleBookmarkClick}>
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </BookmarkIcon>
        {name}
      </ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductButton to={product.link}>자세히 보기</ProductButton>
    </ProductCardWrapper>
  );
};

export default ProductCard;
