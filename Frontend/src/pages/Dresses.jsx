import { useEffect, useState } from "react";
import { getAllListings } from "../api/listings";
import CategoryPage from "./CategoryPage";
import DressData  from "../Data/DressData";


import dressHero from "../assets/images/hero-images/dress-hero.png";

function Dresses() {
  const [VendorDresses, setVendorDresses] = useState([]);

useEffect(() => {
  async function fetchDresses() {
    try {
      const listings = await getAllListings();

      const dresses = listings.filter(
        (item) =>
          item.category &&
          item.category.toLowerCase() === "dresses"
      );

      setVendorDresses(dresses);
    } catch (error) {
      console.error(error);
    }
  }

  fetchDresses();
}, []);
const allDresses = [
  ...DressData,
  ...VendorDresses,
];
  return (
    <CategoryPage
    heroTitle="Rent Modern"
    heroHighlight="Dress"
    heroText="Laptops, cameras, speakers and more."
    heroImage={dressHero}
    data={allDresses}
    title="Dress Rentals"
  />
  );
}

export default Dresses;