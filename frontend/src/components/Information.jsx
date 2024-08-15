import * as S from "../styles/Detailed.styles";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";
import kbLogo from "../assets/logos/kb.png";
import nhLogo from "../assets/logos/nh.png";
import shLogo from "../assets/logos/sh.png";
import wooriLogo from "../assets/logos/woori.png";
import hanaLogo from "../assets/logos/hana.png";
import { Link } from "react-router-dom";

const logoMap = {
  kb: kbLogo,
  nh: nhLogo,
  sh: shLogo,
  woori: wooriLogo,
  hana: hanaLogo,
};

const Information = ({ bank }) => {
  const logoPath = logoMap[bank.logoKey];
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
    <S.DetailContainer>
      {showPopup && (
        <S.Popup>
          <p>{popupMessage}</p>
          <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
        </S.Popup>
      )}
      <S.DetailTitleContainer>
        <S.BookmarkIcon onClick={handleBookmarkClick}>
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </S.BookmarkIcon>
        <S.DetailTitle>상품명</S.DetailTitle>
        <S.DetailLinkButton>상세 링크</S.DetailLinkButton>
      </S.DetailTitleContainer>
      <S.Divider />
      <S.DetailSection>
        <S.BankLogo src={logoPath} alt={`${bank.name} 로고`} />
        <S.DetailDescription>상품 설명</S.DetailDescription>
        <S.DetailImage>이미지</S.DetailImage>
      </S.DetailSection>
      <S.Divider />
      <S.CommentSection>
        <h3>상품 리뷰</h3>
        <S.NoCommentMessage>작성된 리뷰가 없습니다.</S.NoCommentMessage>
        <S.ButtonContainer>
          <S.CommentButton to="/reviewform">작성</S.CommentButton>
        </S.ButtonContainer>
      </S.CommentSection>
      <S.Divider />
      <S.ButtonContainer>
        <S.BackButton to="/deposit">목록</S.BackButton>
      </S.ButtonContainer>
    </S.DetailContainer>
  );
};

export default Information;
