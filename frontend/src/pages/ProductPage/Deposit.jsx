import React, { useState, useEffect } from "react";
import { Header } from "../../components/index.js";
import * as S from "../../styles/Product.styles.js";
import BankSection from "../../components/BankSection.jsx";

export const Deposit = () => {
  const [bankData, setBankData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBankData = async () => {
      try {
        const productType = "예금";
        const response = await fetch(
          `http://43.202.58.11:8080/api/products/productType/${productType}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bank data");
        }
        const result = await response.json();

        if (result.data && typeof result.data === "object") {
          const transformedData = Object.keys(result.data).map((bankName) => ({
            id: bankName,
            name: bankName,
            logoKey: bankName.toLowerCase(),
            products: result.data[bankName],
          }));
          setBankData(transformedData);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (err) {
        setError("데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchBankData();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <S.AppMain>
        {bankData.length > 0 ? (
          bankData.map((bank) => <BankSection key={bank.id} bank={bank} />)
        ) : (
          <p>표시할 데이터가 없습니다.</p>
        )}
      </S.AppMain>
    </>
  );
};

export default Deposit;
