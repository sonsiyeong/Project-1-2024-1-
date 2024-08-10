import {
  DetailContainer,
  DetailTitle,
  DetailSection,
  DetailImage,
  BankLogo,
  DetailDescription,
  CommentSection,
  CommentInput,
  CommentButton,
  BackButton,
} from "../DetailedPage.styles";
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
  return (
    <DetailContainer>
      <DetailTitle>상품명</DetailTitle>
      <DetailSection>
        <BankLogo src={logoPath} alt={`${bank.name} 로고`} />
        <DetailDescription>상품 설명</DetailDescription>
        <DetailImage>이미지</DetailImage>
      </DetailSection>
      <CommentSection>
        <h3>댓글</h3>
        <CommentInput placeholder="댓글을 작성해주세요" />
        <CommentButton>등록</CommentButton>
      </CommentSection>
      <BackButton to="/deposit">목록</BackButton>
    </DetailContainer>
  );
};

export default Information;
