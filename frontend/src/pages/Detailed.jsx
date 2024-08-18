import * as S from "../styles/Detailed.styles.js";
import { Header } from "../components/index.js";
import Information from "../components/Information.jsx";
import { useLocation } from "react-router-dom";

const bankData = {
  name: "KB국민은행",
  logoKey: "kb",
};

export const Detailed = () => {
  const location = useLocation();
  const { reviewData } = location.state || {};
  return (
    <div className="ProductPage">
      <Header />
      <S.PageContainer>
        <Information bank={bankData} reviewData={reviewData} />
      </S.PageContainer>
    </div>
  );
};
