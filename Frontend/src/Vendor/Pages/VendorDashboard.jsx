import VendorSidebar from "../Components/VendorSidebar";
import VendorNavbar from "../Components/VendorNavbar";
import VendorStats from "../Components/VendorStats";
import VendorListings from "../Components/VendorListing";
import VendorBookings from "../Components/VendorBookings";
import VendorProfile from "../Components/VendorProfil";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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

const [listings, setListings] = useState(
  JSON.parse(localStorage.getItem("items")) || []
);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

const items =
JSON.parse(localStorage.getItem("items")) || [];
const currentVendor = localStorage.getItem("user");
const users =
  JSON.parse(localStorage.getItem("users")) || [];

const vendor = users.find(
  (user) => user.email === currentVendor
);

const vendorListings = items.filter(
  (item) => item.vendor === currentVendor
);
// Bookin
const bookings =
  JSON.parse(localStorage.getItem("bookings")) || [];

// Only bookings for this vendor
const vendorBookings = bookings.filter(
  (booking) => booking.vendor === currentVendor
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
          (item) => item.id === booking.productId
      );

      if (product) {
          total += Number(product.price);
      }
  }

  return total;

}, 0);
// Edit the product
const handleEdit = (item) => {

  localStorage.setItem(
    "editItem",
    JSON.stringify(item)
  );

  window.location.href = "/add-listing";

};

// delete the product
const handleDelete = (id) => {

  const updatedListings = listings.filter(
    (item) => item.id !== id
  );

  setListings(updatedListings);

  localStorage.setItem(
    "items",
    JSON.stringify(updatedListings)
  );


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