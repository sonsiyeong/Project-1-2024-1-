import { GlobalStyle, PageContainer } from "../styles/DetailedPage.styles";
import { Header } from "../components/index.js";
import Information from "../components/Information";

const bankData = {
  name: "KB국민은행",
  logoKey: "kb",
};

export const DetailedPage = () => {
  return (
    <>
      <GlobalStyle />
      <div className="ProductPage">
        <Header />
        <PageContainer>
          <Information bank={bankData} />
        </PageContainer>
      </div>
    </>
  );
};
