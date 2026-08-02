import { useEffect, useState } from "react";
import { getAllListings } from "../api/listings";
import CategoryPage from "./CategoryPage";
import HouseData from "../Data/HouseData";

import heroImg from "../assets/images/hero-images/house-hero.png";

function House() {
  const [vendorHouses, setVendorHouses] = useState([]);

  useEffect(() => {
    async function fetchHouses() {
      try {
        const listings = await getAllListings();

        const houses = listings.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === "houses"
        );

        setVendorHouses(houses);
      } catch (error) {
        console.error(error);
      }
    }

    fetchHouses();
  }, []);

  const allHouses = [
    ...HouseData,
    ...vendorHouses,
  ];

  return (
    <CategoryPage
      heroTitle="Rent Beautiful"
      heroHighlight="Houses"
      heroText="Find apartments, villas, farmhouses and more."
      heroImage={heroImg}
      data={allHouses}
      title="House Rentals"
    />
  );
}

export default House;