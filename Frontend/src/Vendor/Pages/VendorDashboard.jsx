import {getMyListings,deleteListing } from "../../api/listings"; 
import VendorSidebar from "../Components/VendorSidebar";
import VendorNavbar from "../Components/VendorNavbar";
import VendorStats from "../Components/VendorStats";
import VendorListings from "../Components/VendorListing";
import VendorBookings from "../Components/VendorBookings";
import VendorProfile from "../Components/VendorProfil";
import { Link ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../../utils/auth";

import "../Styles/VendorDashboard.css";

function VendorDashboard() {
  const handleBookingStatus = (id, newStatus) => {

    const updatedBookings = bookings.map((booking) => {
  
      if (booking.id === id) {
        return {
          ...booking,
          status: newStatus,
        };
      }
  
      return booking;
  
    });
  
    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  
    window.location.reload();
  
  };

// The product lsting

const [listings, setListings] = useState([]);
useEffect(() => {
  async function fetchListings() {
    try {
      const listings = await getMyListings();
      setListings(listings);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  fetchListings();
}, []);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  // Item comes from backend

  const vendor = getCurrentUser();

const vendorListings = listings;
// Bookin
const bookings =
  JSON.parse(localStorage.getItem("bookings")) || [];

// Only bookings for this vendor
const vendorBookings = bookings.filter(
  (booking) => booking.vendor === vendor?._id
);
// Approve rentals
const activeRentals = vendorBookings.filter(
  (booking) => booking.status === "Approved"
).length;
// Pending request
const pendingRequests = vendorBookings.filter(
  (booking) => booking.status === "Pending"
).length;
// Total earning
const earnings = vendorBookings.reduce((total, booking) => {

  if (booking.status === "Approved") {

      const product = vendorListings.find(
          (item) => item._id === booking.productId
      );

      if (product) {
          total += Number(product.price);
      }
  }

  return total;

}, 0);
// Edit the product
const navigate=useNavigate()
const handleEdit = (item) => {
  navigate(`/edit-listing/${item._id}`);
};

// delete the product
const handleDelete = async (id) => {
  try {
    await deleteListing(id);

    setListings((prev) =>
      prev.filter((item) => item._id !== id)
    );

    alert("Listing deleted successfully.");
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="vendor-dashboard">

<VendorSidebar
  activeMenu={activeMenu}
  setActiveMenu={setActiveMenu}
/>

      <div className="main-content">

      <VendorNavbar vendor={vendor} />

        {/* Stats */}

        {activeMenu === "Dashboard" && (

<VendorStats
  vendorListings={vendorListings}
  activeRentals={activeRentals}
  pendingRequests={pendingRequests}
  earnings={earnings}
/>

)}

        {/* Add Product */}

        {activeMenu === "Add Product" && (

<div className="add-product">

  <Link to="/add-listing">

    <button>
      Add New Listing
    </button>

  </Link>

</div>

)} {/* Listings */}

{activeMenu === "My Listings" && (

<VendorListings
  vendorListings={vendorListings}
  handleEdit={handleEdit}
  handleDelete={handleDelete}
/>

)}


        {/* Booking Requests */}

        {activeMenu === "Bookings" && (

<VendorBookings
  vendorBookings={vendorBookings}
  handleBookingStatus={handleBookingStatus}
/>

)}
{activeMenu === "Profile" && (

<VendorProfile
  vendor={vendor}
  vendorListings={vendorListings}
  vendorBookings={vendorBookings}
  earnings={earnings}
/>

)}

      </div>
      

    </div>
    
  );
  
}

export default VendorDashboard;