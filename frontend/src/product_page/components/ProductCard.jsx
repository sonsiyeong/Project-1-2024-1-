const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <p className="product-name">{product.name}</p>
      <p className="product-description">{product.description}</p>
      <button onClick={() => (window.location.href = product.link)}>
        바로가기
      </button>
      <div className="separator"></div>
      <p className="product-name">{product.name}</p>
      <p className="product-description">{product.description}</p>
      <button onClick={() => (window.location.href = product.link)}>
        바로가기
      </button>
    </div>
  );
};

export default ProductCard;
