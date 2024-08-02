const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => (window.location.href = product.link)}>
        바로가기
      </button>
    </div>
  );
};

export default ProductCard;
