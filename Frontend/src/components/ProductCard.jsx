import { Link } from "react-router-dom";

function ProductCard({ product }) {
  
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <div className="content">
        <h3>{product.name}</h3>

        <p>{product.price}</p>

        <Link to={`/product/${product.id}`} target="_blank">
  <button>View Detail</button>
</Link>
      </div>
    </div>
  );
}

export default ProductCard;