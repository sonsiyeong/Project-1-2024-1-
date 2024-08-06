import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name } = product;

  return (
    <div className="product-card">
      <p className="product-name">{name}</p>
      <p className="product-description">{product.description}</p>
      <Link to={product.link} className="product-button">
        자세히 보기
      </Link>
      <div className="separator"></div>
      <p className="product-name">{product.name}</p>
      <p className="product-description">{product.description}</p>
      <Link to={product.link} className="product-button">
        자세히 보기
      </Link>
    </div>
  );
};

export default ProductCard;
