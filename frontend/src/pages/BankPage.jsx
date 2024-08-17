import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/index.js";
import * as S from "../styles/Product.styles.js";
import BankSearchSection from "../components/BankSearchSection.jsx";

const BankPage = () => {
  const { bankId } = useParams();

  const bankInfo = {
    "kb-bank": { name: "KB국민은행", logokey: "kb" },
    "nh-bank": { name: "NH농협은행", logokey: "nh" },
    "shinhan-bank": { name: "신한은행", logokey: "sh" },
    "woori-bank": { name: "우리은행", logokey: "woori" },
    "hana-bank": { name: "하나은행", logokey: "hana" },
  };

  const bank = bankInfo[bankId];

  if (!bank) {
    return <p>존재하지 않는 은행입니다.</p>;
  }

  const bankData = [
    {
      name: "KB국민은행",
      logokey: "kb",
      products: [
        {
          id: 1,
          name: "KB 예금상품1",
          link: "#",
          description: "KB 예금상품1의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 2,
          name: "KB 예금상품2",
          link: "#",
          description: "KB 예금상품2의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 3,
          name: "KB 적금상품1",
          link: "#",
          description: "KB 적금상품1의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 4,
          name: "KB 적금상품2",
          link: "#",
          description: "KB 적금상품2의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 5,
          name: "KB 대출상품1",
          link: "#",
          description: "KB 대출상품1의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 6,
          name: "KB 대출상품2",
          link: "#",
          description: "KB 대출상품2의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 7,
          name: "KB 체크카드1",
          link: "#",
          description: "KB 체크카드1의 특징을 한 눈에 보기",
          category: "체크카드",
        },
        {
          id: 8,
          name: "KB 체크카드2",
          link: "#",
          description: "KB 체크카드2의 특징을 한 눈에 보기",
          category: "체크카드",
        },
      ],
    },
    {
      name: "NH농협은행",
      logokey: "nh",
      products: [
        {
          id: 9,
          name: "NH 예금상품1",
          link: "#",
          description: "NH 예금상품1의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 10,
          name: "NH 예금상품2",
          link: "#",
          description: "NH 예금상품2의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 11,
          name: "NH 적금상품1",
          link: "#",
          description: "NH 적금상품1의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 12,
          name: "NH 적금상품2",
          link: "#",
          description: "NH 적금상품2의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 13,
          name: "NH 대출상품1",
          link: "#",
          description: "NH 대출상품1의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 14,
          name: "NH 대출상품2",
          link: "#",
          description: "NH 대출상품2의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 15,
          name: "NH 체크카드1",
          link: "#",
          description: "NH 체크카드1의 특징을 한 눈에 보기",
          category: "체크카드",
        },
        {
          id: 16,
          name: "NH 체크카드2",
          link: "#",
          description: "NH 체크카드2의 특징을 한 눈에 보기",
          category: "체크카드",
        },
      ],
    },
    {
      name: "신한은행",
      logokey: "sh",
      products: [
        {
          id: 17,
          name: "신한 예금상품1",
          link: "#",
          description: "신한 예금상품1의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 18,
          name: "신한 예금상품2",
          link: "#",
          description: "신한 예금상품2의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 19,
          name: "신한 적금상품1",
          link: "#",
          description: "신한 적금상품1의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 20,
          name: "신한 적금상품2",
          link: "#",
          description: "신한 적금상품2의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 21,
          name: "신한 대출상품1",
          link: "#",
          description: "신한 대출상품1의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 22,
          name: "신한 대출상품2",
          link: "#",
          description: "신한 대출상품2의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 23,
          name: "신한 체크카드1",
          link: "#",
          description: "신한 체크카드1의 특징을 한 눈에 보기",
          category: "체크카드",
        },
        {
          id: 24,
          name: "신한 체크카드2",
          link: "#",
          description: "신한 체크카드2의 특징을 한 눈에 보기",
          category: "체크카드",
        },
      ],
    },
    {
      name: "우리은행",
      logokey: "woori",
      products: [
        {
          id: 25,
          name: "우리 예금상품1",
          link: "#",
          description: "우리 예금상품1의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 26,
          name: "우리 예금상품2",
          link: "#",
          description: "우리 예금상품2의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 27,
          name: "우리 적금상품1",
          link: "#",
          description: "우리 적금상품1의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 28,
          name: "우리 적금상품2",
          link: "#",
          description: "우리 적금상품2의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 29,
          name: "우리 대출상품1",
          link: "#",
          description: "우리 대출상품1의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 30,
          name: "우리 대출상품2",
          link: "#",
          description: "우리 대출상품2의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 31,
          name: "우리 체크카드1",
          link: "#",
          description: "우리 체크카드1의 특징을 한 눈에 보기",
          category: "체크카드",
        },
        {
          id: 32,
          name: "우리 체크카드2",
          link: "#",
          description: "우리 체크카드2의 특징을 한 눈에 보기",
          category: "체크카드",
        },
      ],
    },
    {
      name: "하나은행",
      logokey: "hana",
      products: [
        {
          id: 33,
          name: "하나 예금상품1",
          link: "#",
          description: "하나 예금상품1의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 34,
          name: "하나 예금상품2",
          link: "#",
          description: "하나 예금상품2의 특징을 한 눈에 보기",
          category: "예금",
        },
        {
          id: 35,
          name: "하나 적금상품1",
          link: "#",
          description: "하나 적금상품1의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 36,
          name: "하나 적금상품2",
          link: "#",
          description: "하나 적금상품2의 특징을 한 눈에 보기",
          category: "적금",
        },
        {
          id: 37,
          name: "하나 대출상품1",
          link: "#",
          description: "하나 대출상품1의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 38,
          name: "하나 대출상품2",
          link: "#",
          description: "하나 대출상품2의 특징을 한 눈에 보기",
          category: "대출",
        },
        {
          id: 39,
          name: "하나 체크카드1",
          link: "#",
          description: "하나 체크카드1의 특징을 한 눈에 보기",
          category: "체크카드",
        },
        {
          id: 40,
          name: "하나 체크카드2",
          link: "#",
          description: "하나 체크카드2의 특징을 한 눈에 보기",
          category: "체크카드",
        },
      ],
    },
  ];

  const selectedBankData = bankData.find((data) => data.name === bank.name);

  return (
    <>
      <div className="BankPage">
        <Header />
        <S.AppMain>
          {selectedBankData && <BankSearchSection bank={selectedBankData} />}
        </S.AppMain>
      </div>
    </>
  );
};

export default BankPage;
