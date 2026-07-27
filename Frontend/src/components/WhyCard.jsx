function WhyCard({ icon, title, description }) {
    return (
      <div className="why-card">
        <i className={icon}></i>
  
        <div className="why-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default WhyCard;