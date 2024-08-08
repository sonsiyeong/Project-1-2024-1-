import ProductCard from "./ProductCard";
import kbLogo from "../assets/logos/kb.png";
import nhLogo from "../assets/logos/nh.png";
import shLogo from "../assets/logos/sh.png";
import wooriLogo from "../assets/logos/woori.png";
import hanaLogo from "../assets/logos/hana.png";
import { BankSectionContainer, BankLogo } from "../styles";

const logoMap = {
  kb: kbLogo,
  nh: nhLogo,
  sh: shLogo,
  woori: wooriLogo,
  hana: hanaLogo,
};

const BankSection = ({ bank }) => {
  const logoPath = logoMap[bank.logoKey];
  return (
    <BankSectionContainer>
      <BankLogo src={logoPath} alt={`${bank.name} 로고`} />
      {bank.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </BankSectionContainer>
  );
};

export default BankSection;
