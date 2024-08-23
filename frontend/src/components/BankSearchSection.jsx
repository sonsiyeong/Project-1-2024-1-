import React, { useState, useEffect } from "react";
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

  const userCode = window.sessionStorage.getItem("userCode");

  useEffect(() => {
    const storedBookmarks = window.sessionStorage.getItem("bookmarkedItems");
    if (storedBookmarks) {
      setBookmarkedItems(JSON.parse(storedBookmarks));
    } else {
      const fetchScrapList = async () => {
        try {
          const response = await fetch(
            `http://43.202.58.11:8080/api/users/${userCode}/scraps`
          );
          const result = await response.json();
          if (result.data) {
            const bookmarkState = {};
            result.data.forEach((item) => {
              bookmarkState[item.productCode] = {
                scrapCode: item.scrapCode,
                bookmarked: true,
              };
            });
            setBookmarkedItems(bookmarkState);
            window.sessionStorage.setItem(
              "bookmarkedItems",
              JSON.stringify(bookmarkState)
            );
          }
        } catch (error) {
          console.error("Error fetching scrap list:", error);
        }
      };

      fetchScrapList();
    }
  }, [userCode]);

  const handleBookmarkToggle = async (productCode) => {
    const authToken = window.sessionStorage.getItem("token");
    const item = bookmarkedItems[productCode];

    if (item && item.bookmarked) {
      const scrapCode = item.scrapCode;
      const url = `http://43.202.58.11:8080/api/scraps/${scrapCode}`;

      try {
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          const updatedBookmarks = {
            ...bookmarkedItems,
            [productCode]: {
              ...bookmarkedItems[productCode],
              bookmarked: false,
            },
          };
          setBookmarkedItems(updatedBookmarks);
          window.sessionStorage.setItem(
            "bookmarkedItems",
            JSON.stringify(updatedBookmarks)
          );
          setPopupMessage("MY 스크랩에서 삭제되었습니다.");
        } else {
          const result = await response.json();
          console.error("스크랩 삭제에 실패했습니다:", result.msg);
        }
      } catch (error) {
        console.error("스크랩 삭제 요청 중 오류 발생:", error);
      }
    } else {
      const url = `http://43.202.58.11:8080/api/users/${userCode}/scraps`;

      const requestBody = {
        productCode: productCode,
        userCode: parseInt(userCode),
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(requestBody),
        });

        const result = await response.json();

        if (response.ok) {
          const updatedBookmarks = {
            ...bookmarkedItems,
            [productCode]: {
              scrapCode: result.data.scrapCode,
              bookmarked: true,
            },
          };
          setBookmarkedItems(updatedBookmarks);
          window.sessionStorage.setItem(
            "bookmarkedItems",
            JSON.stringify(updatedBookmarks)
          );
          setPopupMessage("MY 스크랩에 저장되었습니다.");
        } else {
          console.error("스크랩 작업에 실패했습니다:", result.msg);
        }
      } catch (error) {
        console.error("북마크 요청 중 오류 발생:", error);
      }
    }

    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
  };

  const { data } = bank.products;

  const categoriesOrder = ["예금", "적금", "대출", "체크카드"];

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
        {categoriesOrder.map((category, index) => (
          <div key={index}>
            <S.CategoryTitle>{category}</S.CategoryTitle>
            <S.CategoryColumn>
              {data[category]?.map((product, idx) => (
                <React.Fragment key={idx}>
                  <S.ProductItem>
                    <S.ProductName>
                      <S.BookmarkIcon
                        onClick={() =>
                          handleBookmarkToggle(product.productCode)
                        }
                      >
                        {bookmarkedItems[product.productCode]?.bookmarked ? (
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
