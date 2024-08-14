import * as S from "../styles/Detailed.styles";
import kbLogo from "../assets/logos/kb.png";
import nhLogo from "../assets/logos/nh.png";
import shLogo from "../assets/logos/sh.png";
import wooriLogo from "../assets/logos/woori.png";
import hanaLogo from "../assets/logos/hana.png";

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
    <S.DetailContainer>
      <S.DetailTitle>상품명</S.DetailTitle>
      <S.DetailSection>
        <S.BankLogo src={logoPath} alt={`${bank.name} 로고`} />
        <S.DetailDescription>상품 설명</S.DetailDescription>
        <S.DetailImage>이미지</S.DetailImage>
      </S.DetailSection>
      <S.CommentSection>
        <h3>댓글</h3>
        <S.CommentInput placeholder="댓글을 작성해주세요" />
        <S.CommentButton>등록</S.CommentButton>
      </S.CommentSection>
      <S.BackButton to="/deposit">목록</S.BackButton>
    </S.DetailContainer>
  );
};

export default Information;
