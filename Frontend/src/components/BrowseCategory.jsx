import CategoryCard from "./CategoryCard"

function BrowseCategory() {

  const categories = [
    {
      icon: "fa-solid fa-car",
      title: "Cars",
      link: "/cars"
    },

    {
      icon: "fa-solid fa-mobile-screen",
      title: "Electronics",
      link: "/electronics"
    },

    {
      icon: "fa-solid fa-house",
      title: "Homes",
      link: "/houses"
    },

    {
      icon: "fa-solid fa-shirt",
      title: "Dress",
      link: "/dresses"
    },

    {
      icon: "fa-solid fa-couch",
      title: "Furniture",
      link: "/furniture"
    }
  ]

  return (

    <section className="browse-categories">

      <h1>
        Popular <span>Categories</span>
      </h1>

      <div className="category-container">

        {categories.map((category, index) => (
          
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            link={category.link}
          />

        ))}

      </div>

    </section>
  )
}

export default BrowseCategory