import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "react-router-dom"

import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import hero1 from "../assets/images/hero-images/car-hero.png"
import hero2 from "../assets/images/hero-images/hero1.png"
import hero3 from "../assets/images/hero-images/house-hero.png"
import hero4 from "../assets/images/hero-images/dress-hero.png"

import hero5 from "../assets/images/hero-images/electronic-hero.png"




// import hero5 from "../assets/images/hero-images/hero5.png"




function Hero(){

    return(

        <div className="home">

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="myHome"
            >

                {/* Slide 1 */}

                <SwiperSlide>

<div className="slide slide-one">

    <div className="col-1">

        <h4>Welcome to RentHub</h4>

        <h1>
            Rent Premium <br />
            <span>Cars</span>
        </h1>

        <p>
            Explore luxury, sports and family cars for every journey.
        </p>

        <div className="button">

            <Link to="/cars">
                <button className="about">
                    <i className="fa-solid fa-arrow-right"></i>
                    Explore Cars
                </button>
            </Link>

        </div>

    </div>

    <div className="col-2">

        <img
            src={hero1}
            alt="Cars"
            className="slide-image"
        />

    </div>

</div>

</SwiperSlide>

                {/* Slide 2 */}

                <SwiperSlide>

<div className="slide slide-one">

    <div className="col-1">

        <h4>Welcome to RentHub</h4>

        <h1>
            Modern Home <br />
            <span>Furiture</span>
        </h1>

        <p>
Rent stylish sofas, beds to make every space comfortable.        </p>

        <div className="button">

            <Link to="/furniture">
                <button className="about">
                    <i className="fa-solid fa-arrow-right"></i>
                    Explore Furnitures
                </button>
            </Link>

        </div>

    </div>

    <div className="col-2">

        <img
            src={hero2}
            alt="Furniture"
            className="slide-image"
        />

    </div>

</div>

</SwiperSlide>
{/* 3rd one */}
<SwiperSlide>

<div className="slide slide-one">

    <div className="col-1">

        <h4>Welcome to RentHub</h4>

        <h1>
            Find your perfect <br />
            <span>Home</span>
        </h1>

        <p>
            Browse appartments, famiy homes and vacation properties for short and long-term rentals.
        </p>

        <div className="button">

            <Link to="/houses">
                <button className="about">
                    <i className="fa-solid fa-arrow-right"></i>
                    Explore Homes
                </button>
            </Link>

        </div>

    </div>

    <div className="col-2">

        <img
            src={hero3}
            alt="Houses"
            className="slide-image"
        />

    </div>

</div>

</SwiperSlide>
{/* 4th slide */}
<SwiperSlide>

<div className="slide slide-one">

    <div className="col-1">

        <h4>Welcome to RentHub</h4>

        <h1>
            Look Your Best<br />
            <span>Every Time</span>
        </h1>

        <p>
            Rent elegent bridal, formal and part dresses for weddings, events and specil occasions.
        </p>

        <div className="button">

            <Link to="/dresses">
                <button className="about">
                    <i className="fa-solid fa-arrow-right"></i>
                    Explore Dresses
                </button>
            </Link>

        </div>

    </div>

    <div className="col-2">

        <img
            src={hero4}
            alt="Dresses"
            className="slide-image"
        />

    </div>

</div>

</SwiperSlide>
{/* 5th slide */}
<SwiperSlide>

<div className="slide slide-one">

    <div className="col-1">

        <h4>Welcome to RentHub</h4>

        <h1>
            Latest<br />
            <span>Electronics</span>
        </h1>

        <p>
            Rent laptops, camreas, gamming consoles and other electonics device whenever you need them.
        </p>

        <div className="button">

            <Link to="/electronics">
                <button className="about">
                    <i className="fa-solid fa-arrow-right"></i>
                    Explore Electronics
                </button>
            </Link>

        </div>

    </div>

    <div className="col-2">

        <img
            src={hero5}
            alt="Electronics"
            className="slide-image"
        />

    </div>

</div>

</SwiperSlide>
            </Swiper>

        </div>

    )
}

export default Hero