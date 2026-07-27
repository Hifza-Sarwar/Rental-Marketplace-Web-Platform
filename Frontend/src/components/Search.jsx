import { useNavigate } from "react-router-dom";
import { useState } from "react";
function SearchBar() {
  // move progammatically to another page
  const navigate = useNavigate();
  // Stores selected filter value
  const [category, setCategory] = useState(""); 
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [item, setItem] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSearch = () => {
     // Pass selected filters through URL query parameters.
    navigate(
      `/rentals?category=${category}&location=${location}&price=${price}&item=${item}&availability=${availability}`
    );;
  };
    return (
      <div className="search">
        <div className="find">
          <h3>Find Your Perfect Rental Item</h3>
  
          <div className="find-row">
  
            <div className="find-item">
              <h4>Category</h4>
              <select id="category"   value={category}
  onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="car">Cars</option>
                <option value="electronics">Electronics</option>
                <option value="dress">Dresses</option>
                <option value="furniture">Furniture</option>
                <option value="house">Houses</option>
              </select>
            </div>
  
            <div className="find-item">
              <h4>Item Name</h4>
              <select id="item" value={item}
                      onChange={(e) => setItem(e.target.value)}>
                  <option value="">All Items</option>
                  <option value="camera">Camera</option>
                  <option value="bike">Bike</option>
                  <option value="dress">Dress</option>
                  <option value="laptop">Laptop</option>
                  <option value="sofa">Sofa</option>
                  <option value="car">Car</option>
                </select>
            </div>
  
            <div className="find-item">
              <h4>Location</h4>
              <select id="location" 
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="lahore">Lahore</option>
                <option value="karachi">Karachi</option>
                <option value="islamabad">Islamabad</option>
                <option value="rawalpindi">Rawalpindi</option>
                <option value="faisalabad">Faisalabad</option>
                <option value="multan">Multan</option>
                <option value="peshawar">Peshawar</option>
              </select>
            </div>
  
            <div className="find-item">
              <h4>Rental Duration</h4>
              <select id="duration">
                <option value="">Any Duration</option>
                <option value="1">1 Day</option>
                <option value="7">1 Week</option>
                <option value="30">1 Month</option>
              </select>
            </div>
  
            <div className="find-item">
              <h4>Price Range</h4>
              <select  id="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}>
                          <option value="">All Prices</option>
                          <option value="low">Below 5000</option>
                          <option value="mid">5000 - 15000</option>
                          <option value="high">15000+</option>
                        </select>
            </div>
  
            <div className="find-item">
              <h4>Condition</h4>
              <select id="condition">
                <option value="">Any Condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
            </div>
  
            <div className="find-item">
              <h4>Availability</h4>
              <select id="availability" value={availability}
  onChange={(e) => setAvailability(e.target.value)}>
  <option value="">All</option>
  <option value="available">Available Now</option>
  <option value="booked">Already Booked</option>
</select>
            </div>
  
            <div className="seacrh-btn">
              <button onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
                Search Rentals
              </button>
            </div>
  
          </div>
        </div>
      </div>
    )
  }
  
  export default SearchBar