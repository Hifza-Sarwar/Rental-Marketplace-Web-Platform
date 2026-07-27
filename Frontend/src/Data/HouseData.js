import apartmentInterior from "../assets/images/House/apartment interior.avif";
import beachHouse from "../assets/images/House/Beach House.avif";
import cityApartment from "../assets/images/House/city apartment.avif";
import coWorkingSpace from "../assets/images/House/Co-working Space.avif";
import commercialBuilding from "../assets/images/House/Commercial Building.jpg";
import conferenceRoom from "../assets/images/House/Conference Room.avif";
import duplexHouse from "../assets/images/House/Duplex House.avif";
import eventHall from "../assets/images/House/Event Hall.avif";
import familyApartment from "../assets/images/House/family apartment.avif";
import farmHouse from "../assets/images/House/Farm House.avif";
import furnishedApartment from "../assets/images/House/furnished apartment.avif";
import holidayCottage from "../assets/images/House/Holiday Cottage.avif";
import independentHouse from "../assets/images/House/Independent House.jpg";
import luxuryAppartment from "../assets/images/House/Luxury apartment.avif";
import luxuryVilla from "../assets/images/House/Luxury Villa.avif";
import modernFamilyHouse from "../assets/images/House/Modern Family House.avif";
import modernStudioAppartmet from "../assets/images/House/modern studio apartment.avif";
import officeSpace from "../assets/images/House/Office Space.avif";
import penthHouse from "../assets/images/House/penthouse interior.avif";
import resturantSpace from "../assets/images/House/Restaurant Space.avif";
import retailShop from "../assets/images/House/Retail Shop.jpg";
import studentAppartment from "../assets/images/House/student apartment.avif";
import townHouse from "../assets/images/House/Town House.jpg";
import wareHouse from "../assets/images/House/Warehouse.jpg";
const housesData = [
    {
      id: 89,
      image: apartmentInterior,
      name: "Apartment Interior",
      price: "Rs 8,000 / day",
      location: "Lahore",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 90,
      image: beachHouse,
      name: "Beach House",
      price: "Rs 25,000 / day",
      location: "Karachi",
      duration: "weekly",
      condition: "new",
      availability: "available"
    },
    {
      id: 91,
      image: cityApartment,
      name: "City Apartment",
      price: "Rs 10,000 / day",
      location: "Islamabad",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 92,
      image: coWorkingSpace,
      name: "Co-Working Space",
      price: "Rs 6,000 / day",
      location: "Lahore",
      duration: "monthly",
      condition: "new",
      availability: "booked",
    },
    {
      id: 93,
      image: commercialBuilding,
      name: "Commercial Building",
      price: "Rs 30,000 / day",
      location: "Karachi",
      duration: "monthly",
      condition: "new",
      availability: "booked",
    },
    {
      id: 94,
      image: conferenceRoom,
      name: "Conference Room",
      price: "Rs 5,000 / day",
      location: "Rawalpindi",
      duration: "daily",
      condition: "new",
      availability: "available",
    },
    {
      id: 95,
      image: duplexHouse,
      name: "Duplex House",
      price: "Rs 15,000 / day",
      location: "Lahore",
      duration: "weekly",
      condition: "new",
      availability: "available"
    },
    {
      id: 96,
      image: eventHall,
      name: "Event Hall",
      price: "Rs 40,000 / day",
      location: "Faisalabad",
      duration: "daily",
      condition: "new",
      availability: "available",
    },
    {
      id: 97,
      image: familyApartment,
      name: "Family Apartment",
      price: "Rs 9,000 / day",
      location: "Multan",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 98,
      image: farmHouse,
      name: "Farm House",
      price: "Rs 20,000 / day",
      location: "Islamabad",
      duration: "weekly",
      condition: "new",
      availability: "available"
    },
    {
      id: 99,
      image: furnishedApartment,
      name: "Furnished Apartment",
      price: "Rs 12,000 / day",
      location: "Lahore",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 100,
      image: holidayCottage,
      name: "Holiday Cottage",
      price: "Rs 14,000 / day",
      location: "Murree",
      duration: "weekly",
      condition: "new",
      availability: "available",
    },
    {
      id: 101,
      image: independentHouse,
      name: "Independent House",
      price: "Rs 16,000 / day",
      location: "Peshawar",
      duration: "daily",
      condition: "new",
      availability: "available",
    },
    {
      id: 102,
      image: luxuryAppartment,
      name: "Luxury Apartment",
      price: "Rs 18,000 / day",
      location: "Karachi",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 103,
      image: luxuryVilla,
      name: "Luxury Villa",
      price: "Rs 35,000 / day",
      location: "Islamabad",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 104,
      image: modernFamilyHouse,
      name: "Modern Family House",
      price: "Rs 17,000 / day",
      location: "Lahore",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 105,
      image: modernStudioAppartmet,
      name: "Modern Studio Apartment",
      price: "Rs 7,500 / day",
      location: "Karachi",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 106,
      image: officeSpace,
      name: "Office Space",
      price: "Rs 8,500 / day",
      location: "Islamabad",
      duration: "monthly",
      condition: "new",
      availability: "booked",
    },
    {
      id: 107,
      image: penthHouse,
      name: "Luxury Penthouse",
      price: "Rs 28,000 / day",
      location: "Lahore",
      duration: "weekly",
      condition: "new",
      availability: "available",
    },
    {
      id: 108,
      image: resturantSpace,
      name: "Restaurant Space",
      price: "Rs 12,000 / day",
      location: "Karachi",
      duration: "monthly",
      condition: "new",
      availability: "booked",
    },
    {
      id: 109,
      image: retailShop,
      name: "Retail Shop",
      price: "Rs 6,500 / day",
      location: "Rawalpindi",
      duration: "monthly",
      condition: "new",
      availability: "booked",
    },
    {
      id: 110,
      image: studentAppartment,
      name: "Student Apartment",
      price: "Rs 5,000 / day",
      location: "Lahore",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 111,
      image: townHouse,
      name: "Town House",
      price: "Rs 13,000 / day",
      location: "Islamabad",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
    {
      id: 112,
      image: wareHouse,
      name: "Warehouse",
      price: "Rs 18,000 / day",
      location: "Karachi",
      duration: "monthly",
      condition: "new",
      availability: "available",
    },
  ];
  
  export default housesData;
























