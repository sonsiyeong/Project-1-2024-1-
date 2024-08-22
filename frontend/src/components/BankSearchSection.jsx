import React, { useState } from "react";
import * as S from "../styles/BankSearchSection.styles.js";
import kbLogo from "../assets/logos/kb.png";
import nhLogo from "../assets/logos/nh.png";
import shLogo from "../assets/logos/sh.png";
import wooriLogo from "../assets/logos/woori.png";
import hanaLogo from "../assets/logos/hana.png";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const logoMap = {
  kb: kbLogo,
  nh: nhLogo,
  sh: shLogo,
  woori: wooriLogo,
  hana: hanaLogo,
};

const BankSearchSection = ({ bank }) => {
  const [bookmarkedItems, setBookmarkedItems] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const logoPath = logoMap[bank.logokey];

  const handleBookmarkToggle = (category, productName) => {
    const key = `${category}-${productName}`;
    setBookmarkedItems((prevBookmarks) => {
      const isBookmarked = prevBookmarks[key];
      setPopupMessage(
        isBookmarked
          ? "MY 스크랩에서 삭제되었습니다."
          : "MY 스크랩에 저장되었습니다."
      );
      return {
        ...prevBookmarks,
        [key]: !isBookmarked,
      };
    });
    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
  };

  const { data } = bank.products;

  return (
    <S.BankSectionContainer>
      {showPopup && (
        <S.Popup>
          <p>{popupMessage}</p>
          <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
        </S.Popup>
      )}
      <S.BankLogo src={logoPath} alt={`${bank.name} 로고`} />
      <S.ProductCategory>
        {Object.keys(data).map((category, index) => (
          <div key={index}>
            <S.CategoryTitle>{category}</S.CategoryTitle>
            <S.CategoryColumn>
              {data[category].map((product, idx) => (
                <React.Fragment key={idx}>
                  <S.ProductItem>
                    <S.ProductName>
                      <S.BookmarkIcon
                        onClick={() =>
                          handleBookmarkToggle(category, product.productName)
                        }
                      >
                        {bookmarkedItems[
                          `${category}-${product.productName}`
                        ] ? (
                          <FaBookmark />
                        ) : (
                          <FaRegBookmark />
                        )}
                      </S.BookmarkIcon>
                      {product.productName}
                    </S.ProductName>
                    <S.ProductDescription>
                      {product.productFeat.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </S.ProductDescription>
                    <S.BuyButton to={`/detailed/${product.productCode}`}>
                      자세히 보기
                    </S.BuyButton>
                  </S.ProductItem>
                  {idx < data[category].length - 1 && <S.ProductSeparator />}
                </React.Fragment>
              ))}
            </S.CategoryColumn>
          </div>
        ))}
      </S.ProductCategory>
    </S.BankSectionContainer>
  );
};

export default BankSearchSection;
