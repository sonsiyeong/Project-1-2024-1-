import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/index.js";
import * as S from "../styles/Product.styles.js";
import BankSearchSection from "../components/BankSearchSection.jsx";

const BankPage = () => {
  const { bankId } = useParams();
  const [bankData, setBankData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const bankInfo = {
    "kb-bank": { name: "국민은행", logokey: "kb" },
    "nh-bank": { name: "농협은행", logokey: "nh" },
    "shinhan-bank": { name: "신한은행", logokey: "sh" },
    "woori-bank": { name: "우리은행", logokey: "woori" },
    "hana-bank": { name: "하나은행", logokey: "hana" },
  };

  const bank = bankInfo[bankId];

  useEffect(() => {
    if (!bank) {
      setError("존재하지 않는 은행입니다.");
      setLoading(false);
      return;
    }

    const fetchBankData = async () => {
      try {
        const encodedBankName = encodeURIComponent(bank.name);
        const response = await fetch(
          `http://43.202.58.11:8080/api/products/searchByBank?productBank=${encodedBankName}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bank data");
        }
        const data = await response.json();
        setBankData({ ...bank, products: data });
      } catch (err) {
        setError("데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchBankData();
  }, [bankId]);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="BankPage">
      <Header />
      <S.AppMain>{bankData && <BankSearchSection bank={bankData} />}</S.AppMain>
    </div>
  );
};

export default BankPage;
