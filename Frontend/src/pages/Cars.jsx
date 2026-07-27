import CategoryPage from "./CategoryPage";
import carsData from "../Data/CarData";

import electronicsHero from "../assets/images/hero-images/car-hero.png";

function Cars() {
  return (
    <CategoryPage
    heroTitle="Rent Modern"
    heroHighlight="Cars"
    heroText="Laptops, cameras, speakers and more."
    heroImage={electronicsHero}
    data={carsData}
    title="Cars Rentals"
  />
  );
}

export default Cars;