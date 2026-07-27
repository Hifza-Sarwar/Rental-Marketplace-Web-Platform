function WorkCard({ icon, title, description }) {
    return (
      <div className="work-card">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  export default WorkCard;