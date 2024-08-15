import { Header } from "../../components/index.js";
import * as S from "../../styles/Product.styles.js";
import BankSection from "../../components/BankSection.jsx";

const bankData = [
  {
    name: "KB국민은행",
    products: [
      { id: 1, name: "상품명", link: "#", description: "특징 한 눈에 보기" },
    ],
    logoKey: "kb",
  },
  {
    name: "NH농협은행",
    products: [
      { id: 2, name: "상품명", link: "#", description: "특징 한 눈에 보기" },
    ],
    logoKey: "nh",
  },
  {
    name: "신한은행",
    products: [
      { id: 3, name: "상품명", link: "#", description: "특징 한 눈에 보기" },
    ],
    logoKey: "sh",
  },
  {
    name: "우리은행",
    products: [
      { id: 4, name: "상품명", link: "#", description: "특징 한 눈에 보기" },
    ],
    logoKey: "woori",
  },
  {
    name: "하나은행",
    products: [
      { id: 5, name: "상품명", link: "#", description: "특징 한 눈에 보기" },
    ],
    logoKey: "hana",
  },
];

export const Loan = () => {
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
