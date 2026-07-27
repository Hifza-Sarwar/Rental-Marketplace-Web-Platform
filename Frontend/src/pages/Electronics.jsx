import CategoryPage from "./CategoryPage";
import electronicsData  from "../Data/ElectronicsData";


import electronicsHero from "../assets/images/hero-images/hero1.png";

function Electronics() {
  return (
    <CategoryPage
    heroTitle="Rent Modern"
    heroHighlight="Electronics"
    heroText="Laptops, cameras, speakers and more."
    heroImage={electronicsHero}
    data={electronicsData}
    title="Electronics Rentals"
  />
  );
}

export default Electronics;