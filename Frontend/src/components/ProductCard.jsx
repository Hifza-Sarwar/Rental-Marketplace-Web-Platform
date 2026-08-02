import { Link } from "react-router-dom";

function ProductCard({ product }) {
  
  return (
    <div className="card">
      <img
  src={
    product.image?.startsWith("http")
      ? product.image
      : product._id
      ? `http://localhost:5000/uploads/${product.image}`
      : product.image
  }
  alt={product.name || product.title}
/>

      <div className="content">
        <h3>{product.name || product.title}</h3>

        <p>
  {product.price ||
    `Rs ${product.pricePerDay} / day`}
</p>
<Link to={`/product/${product._id || product.id}`}>
  <button>View Detail</button>
</Link>
      </div>
    </div>
  );
}

export default ProductCard;