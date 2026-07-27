import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import FeaturedCard from "./FearuredCard";

import "swiper/css";
import "swiper/css/pagination";
import furnitureData from "../Data/FurnitureData";
import carsData from "../Data/CarData";
import electronicsData from "../Data/ElectronicsData";
import housesData from "../Data/HouseData";
import dressesData from "../Data/DressData";




function Featured() {
  const featuredProducts = [
    furnitureData[0],
    furnitureData[1],
    carsData[0],
    electronicsData[0],
    housesData[0],
    dressesData[0],
  ];

  
  return (
    <section className="featured-items">

      <h1>
        Featured <span>Rentals</span>
      </h1>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 }
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
           <FeaturedCard
  image={product.image}
  title={product.name}
  price={product.price}
  tag="Featured"
/>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Featured;