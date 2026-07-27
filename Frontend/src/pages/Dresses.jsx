import CategoryPage from "./CategoryPage";
import DressData  from "../Data/DressData";


import dressHero from "../assets/images/hero-images/hero1.png";

function Dresses() {
  return (
    <CategoryPage
    heroTitle="Rent Modern"
    heroHighlight="Dress"
    heroText="Laptops, cameras, speakers and more."
    heroImage={dressHero}
    data={DressData}
    title="Dress Rentals"
  />
  );
}

export default Dresses;