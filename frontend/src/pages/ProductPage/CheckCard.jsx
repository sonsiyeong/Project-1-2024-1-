import { Header } from "../../components/index.js";
import * as S from "../../styles/Product.styles.js";
import BankSection from "../../components/BankSection.jsx";
import { bankData } from "../../data/BankData.js";

export const CheckCard = () => {
  return (
    <>
      <Header />
      <S.AppMain>
        {bankData.map((bank) => (
          <BankSection key={bank.id} bank={bank} />
        ))}
      </S.AppMain>
    </>
  );
};
