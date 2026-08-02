import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

function CategoryPage({
  heroTitle,
  data,
  heroImage,
  heroHighlight,
  heroText,
  title,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredProducts = data.filter((product) => {
    const productName =
      product.name || product.title || "";
  
    return productName
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  const productsPerPage = 8;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(
    firstIndex,
    lastIndex
  );

  return (
    <>
      <section className="category-hero">
        <div className="hero-content">
          <h2>
            {heroTitle} <span>{heroHighlight}</span>
          </h2>

          <p>{heroText}</p>

          <div className="hero-btns">
            <button
              className="explore-btn"
              onClick={() =>
                document
                  .getElementById("products")
                  .scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Explore Rentals
            </button>

            <Link to="/contact" target="_blank">
              <button className="contact-btn">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt={heroHighlight}
          />
        </div>
      </section>

      <section
        className="category-page"
        id="products"
      >
        <div className="top">
          <h1>{title}</h1>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search rentals..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
 
        </div>
        {currentProducts.length === 0 && (
  <h2 className="noProductsFound">No products found</h2>
)}

        <div className="rental-page active">
          {currentProducts.map((product) => (
            <ProductCard
            key={product._id || product.id}
              product={product}
            />
          ))}
        </div>

        <Pagination
          totalProducts={filteredProducts.length}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
}

export default CategoryPage;