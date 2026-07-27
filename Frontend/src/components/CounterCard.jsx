function CounterCard({ icon, number, title }) {
    return (
      <div className="counter-card">
        <div className="counter-icon">
          <i className={icon}></i>
        </div>
  
        <h2>{number}+</h2>
  
        <p>{title}</p>
      </div>
    );
  }
  
  export default CounterCard;