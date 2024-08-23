import React, { useState, useEffect } from "react";
import * as S from "../styles/Product.styles";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, index }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [scrapCode, setScrapCode] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const userCode = window.sessionStorage.getItem("userCode");
  const authToken = window.sessionStorage.getItem("token");

  const navigate = useNavigate();

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
            (item) => item.productCode === product.productCode
          );
          if (bookmark) {
            setBookmarked(true);
            setScrapCode(bookmark.scrapCode);
            storedBookmarks[product.productCode] = {
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
            delete storedBookmarks[product.productCode];
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
  }, [product.productCode, userCode, authToken]);

  const handleBookmarkToggle = async () => {
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
          delete storedBookmarks[product.productCode];
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
              productCode: product.productCode,
              userCode,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          setBookmarked(true);
          setScrapCode(result.data.scrapCode);
          setPopupMessage("MY 스크랩에 저장되었습니다.");
          storedBookmarks[product.productCode] = {
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

  return (
    <S.ProductCardWrapper>
      {showPopup && (
        <S.Popup>
          <p>{popupMessage}</p>
          <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
        </S.Popup>
      )}
      <S.ProductName>
        <S.BookmarkIcon onClick={handleBookmarkToggle}>
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
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
