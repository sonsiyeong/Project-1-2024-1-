import {
  ProductCardWrapper,
  ProductName,
  ProductDescription,
  ProductButton,
  Separator,
} from "../ProductPage.styles";

const ProductCard = ({ product }) => {
  return (
    <ProductCardWrapper>
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductButton to="/detailedpage">자세히 보기</ProductButton>
      <Separator />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductButton to="/detailedpage">자세히 보기</ProductButton>
    </ProductCardWrapper>
  );
};

export default ProductCard;
