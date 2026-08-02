import { useEffect, useState } from "react";
import { getAllListings } from "../api/listings";
import furnitureData from "../Data/FurnitureData";
import CategoryPage from "./CategoryPage";

import furnitureHero from "../assets/images/hero-images/hero1.png";

function Furniture() {
  const [vendorFurniture, setVendorFurniture] = useState([]);

useEffect(() => {
  async function fetchFurniture() {
    try {
      const listings = await getAllListings();

      const furniture = listings.filter(
        (item) =>
          item.category &&
          item.category.toLowerCase() === "furniture"
      );

      setVendorFurniture(furniture);
    } catch (error) {
      console.error(error);
    }
  }

  fetchFurniture();
}, []);
const allFurniture = [
  ...furnitureData,
  ...vendorFurniture,
];
  return (
    <CategoryPage
    heroTitle="Rent Stylish"
    heroHighlight="Furniture"
    heroText="Premium furniture rentals for homes, offices and events."
    heroImage={furnitureHero}
    data={allFurniture}
    title="Furniture Rentals"
  />
  );
}

export default Furniture;