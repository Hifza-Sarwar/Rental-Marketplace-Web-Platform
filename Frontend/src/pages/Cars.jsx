import { useEffect, useState } from "react";
import CategoryPage from "./CategoryPage";
import carsData from "../Data/CarData";
import { getAllListings } from "../api/listings";
import electronicsHero from "../assets/images/hero-images/car-hero.png";

function Cars() {
  const [vendorCars, setVendorCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const listings = await getAllListings();

        const cars = listings.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === "cars"
        );

        setVendorCars(cars);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCars();
  }, []);

  const allCars = [...carsData, ...vendorCars];

  return (
    <CategoryPage
      heroTitle="Rent Modern"
      heroHighlight="Cars"
      heroText="Laptops, cameras, speakers and more."
      heroImage={electronicsHero}
      data={allCars}
      title="Cars Rentals"
    />
  );
}

export default Cars;