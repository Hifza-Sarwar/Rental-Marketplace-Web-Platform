import { useState } from "react";
import HouseData from "../Data/HouseData";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

import heroImg from "../assets/images/hero-images/hero1.png";

function House() {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const currentProducts = HouseData.slice(
    firstIndex,
    lastIndex
  );

  return (
    <>
      {/* Hero Section */}

      <section className="category-hero">
        <div className="hero-content">

          <h2>
            Rent Stylish <br />
            Furniture For <span>Every Space</span>
          </h2>

          <p>
            Discover modern sofas, luxury chairs, dining tables,
            office desks and more for your home and office.
          </p>

          <div className="hero-btns">
          <button
  className="explore-btn"
  onClick={() =>
    document
      .getElementById("products")
      .scrollIntoView({ behavior: "smooth" })}>
        Explore Rentals</button>

            <button className="contact-btn">
              Contact Us
            </button>
          </div>

        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Furniture Hero" />
        </div>
      </section>

      {/* Products Section */}

      <section className="category-page" id="products">

        <div className="top">
          <h1>House Rentals</h1>
        </div>

        <div className="rental-page active">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <Pagination
          totalProducts={HouseData.length}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </section>
    </>
  );
}

export default House;
