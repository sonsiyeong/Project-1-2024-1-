import * as S from "../styles/Detailed.styles.js";
import { Header } from "../components/index.js";
import Information from "../components/Information.jsx";

const bankData = {
  name: "KB국민은행",
  logoKey: "kb",
};

export const Detailed = () => {
  return (
    <div className="ProductPage">
      <Header />
      <S.PageContainer>
        <Information bank={bankData} />
      </S.PageContainer>
    </div>
  );
};
