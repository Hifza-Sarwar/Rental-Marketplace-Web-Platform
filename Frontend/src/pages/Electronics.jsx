import { useEffect, useState } from "react";
import { getAllListings } from "../api/listings";
import CategoryPage from "./CategoryPage";
import electronicsData from "../Data/ElectronicsData";

import electronicsHero from "../assets/images/hero-images/electronic-hero.png";

function Electronics() {
  const [vendorElectronics, setVendorElectronics] = useState([]);

  useEffect(() => {
    async function fetchElectronics() {
      try {
        const listings = await getAllListings();

        const electronics = listings.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === "electronics"
        );

        setVendorElectronics(electronics);
      } catch (error) {
        console.error(error);
      }
    }

    fetchElectronics();
  }, []);

  const allElectronics = [
    ...electronicsData,
    ...vendorElectronics,
  ];

  return (
    <CategoryPage
      heroTitle="Rent Modern"
      heroHighlight="Electronics"
      heroText="Laptops, cameras, speakers and more."
      heroImage={electronicsHero}
      data={allElectronics}
      title="Electronics Rentals"
    />
  );
}

export default Electronics;