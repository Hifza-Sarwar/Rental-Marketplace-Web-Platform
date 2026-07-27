import { Link } from "react-router-dom"

function CategoryCard({ icon, title, link }) {
  return (

    <Link to={link} className="category-card" target="_blank">

      <div className="category-icon">
        <i className={icon}></i>
      </div>

      <h3>{title}</h3>

      {/* <span>Browse</span> */}

    </Link>

  )
}

export default CategoryCard