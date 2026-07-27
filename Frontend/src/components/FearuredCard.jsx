function FeaturedCard({ image, title, price, tag }) {
    return (
      <div className="feat-card">
        <div className="img-box">
          <img src={image} alt={title} />
          <span className="tag">{tag}</span>
        </div>
  
        <div className="feat-content">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
      </div>
    );
  }
  
  export default FeaturedCard;