import furnitureData from "../Data/FurnitureData";
import CategoryPage from "./CategoryPage";

import furnitureHero from "../assets/images/hero-images/hero1.png";

function Furniture() {
  return (
    <CategoryPage
    heroTitle="Rent Stylish"
    heroHighlight="Furniture"
    heroText="Premium furniture rentals for homes, offices and events."
    heroImage={furnitureHero}
    data={furnitureData}
    title="Furniture Rentals"
  />
  );
}

export default Furniture;