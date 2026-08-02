import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import furnitureData from "../Data/FurnitureData";
import carsData from "../Data/CarData";
import electronicsData from "../Data/ElectronicsData";
import housesData from "../Data/HouseData";
import dressesData from "../Data/DressData";

import ProductCard from "../components/ProductCard";

function Rentals() {

    const [search, setSearch] = useState("");
    // All category products in one array
  const allProducts = [
    ...furnitureData,
    ...carsData,
    ...electronicsData,
    ...housesData,
    ...dressesData,
  ];
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const location = searchParams.get("location");
  const price = searchParams.get("price");
  const item = searchParams.get("item");
  const availability = searchParams.get("availability");

  // Filter the product based on selected option
  const filteredProducts = allProducts.filter((product) => {

    const productPrice = parseInt(
      product.price.replace(/[^\d]/g, "")
    );
  
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());
  
    const matchesCategory =
      !category || product.category === category;
  
    const matchesLocation =
      !location ||
      product.location.toLowerCase() === location.toLowerCase();
  
    const matchesPrice =
      !price ||
      (price === "low" && productPrice < 5000) ||
      (price === "mid" &&
        productPrice >= 5000 &&
        productPrice <= 15000) ||
      (price === "high" && productPrice > 15000);

      const matchesItem =
      !item ||
      product.name.toLowerCase().includes(item.toLowerCase());
      const matchesAvailability =
      !availability ||
      product.availability === availability;
  
    return (
      matchesSearch &&
      matchesCategory &&
      matchesLocation &&
      matchesPrice &&
      matchesItem && 
      matchesAvailability
    );
  });
  
  return (
    <section className="category-page">

      <div className="top">
        <h1>All Rentals</h1>
      </div>
      <div className="search-box">

  <input
    type="text"
    placeholder="Search rentals..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

</div>

      <div className="rental-page">
      {filteredProducts.map((product) => (         
         <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Rentals;