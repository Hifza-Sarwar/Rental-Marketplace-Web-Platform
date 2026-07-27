import { Link } from "react-router-dom";
function RentalCard({
    id,
    image,
    title,
    category,
    location,
    price,
  }) {
    return (
      <div className="arr-col">
  
        <div className="image">
          <img src={image} alt={title} />
        </div>
  
        <span className="category-badge">
          {category}
        </span>
  
        <h5>{title}</h5>
  
        <div className="features">
  
          <span>
            <i className="fa-solid fa-location-dot"></i>
            {location}
          </span>
  
          <span>
            <i className="fa-solid fa-circle-check"></i>
            Available
          </span>
  
        </div>
  
        <div className="price">
  <p>{price}</p>
</div>

<Link to={`/product/${id}`} target="_blank"> 
  <button>View Detail</button>
</Link>  
      </div>
    );
  }
  
  export default RentalCard;