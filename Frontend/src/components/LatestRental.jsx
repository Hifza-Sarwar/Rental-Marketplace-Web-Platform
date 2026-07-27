import RentalCard from "./RentalCard";
import furnitureData from "../Data/FurnitureData";
import carsData from "../Data/CarData";
import electronicsData from "../Data/ElectronicsData";
import housesData from "../Data/HouseData";
import dressesData from "../Data/DressData";



function LatestRentals() {
  const latestRent =[
    carsData[5],
    electronicsData[8],
    dressesData[4],
    housesData[0],
    furnitureData[3],
    dressesData[9],
    carsData[0],
    electronicsData[15],

  ]
   
    return (
      <section className="arrivals">
  
        <h1>
          Let's Check Latest <span>Rental Items</span>
        </h1>
  
        <div className="arr-row">
          {latestRent.map((product) => (
            <RentalCard
                id={product.id}
                image={product.image}
                title={product.name}
                // category={product.category}
                location={product.location}
                price={product.price}/>
          ))}
        </div>
  
        {/* <button className="load">
          Load More
          <i className="fa-solid fa-rotate"></i>
        </button> */}
  
      </section>
    );
  }
  
  export default LatestRentals;
