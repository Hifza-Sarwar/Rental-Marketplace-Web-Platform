import { getAllListings,deleteListing } from "../../api/listings";
import { getAllUsers } from "../../api/users";
import { useState,useEffect } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import DashboardCard from "../Components/DashboardCard";

import "../styles/AdminDashboard.css";
// Read data from local storage


const items =
  JSON.parse(localStorage.getItem("items")) || [];

const bookings =
  JSON.parse(localStorage.getItem("bookings")) || [];
  
  const totalBookings = bookings.length;

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [listings, setListings] = useState([]);
  const totalListings = listings.length;
  // Calculate totals
  const totalUsers = users.filter(
    user => user.role === "user"
  ).length;
  
  const totalVendors = users.filter(
    user => user.role === "vendor"
  ).length;
  
  

  useEffect(() => {
    async function fetchListings() {
      try {
        const data = await getAllListings();
        setListings(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    async function fetchUsers() {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchListings();
    fetchUsers();
  }, []);
  // Handle delete
  const handleDeleteListing = async (id) => {
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

    <div className="admin-dashboard">
      <AdminSidebar
  activeMenu={activeMenu}
  setActiveMenu={setActiveMenu}
/>


      <div className="admin-content">

        <AdminNavbar />
        {activeMenu === "Users" && (
  <div className="dashboard-body">
    <h2>All Users</h2>

    <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.email}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
{activeMenu === "Listings" && (
  <div className="dashboard-body">
    <h2>All Listings</h2>

    {listings.length === 0 ? (
      <p>No listings found.</p>
    ) : (
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        {listings.map((item) => (
            <tr key={item._id || item.id}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>Rs. {item.pricePerDay || item.price}</td>
              <td>{item.location}</td>

<td>
  <button
    className="delete-btn"
    onClick={() => handleDeleteListing(item._id)}
  >
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
)}
{activeMenu === "Bookings" && (
  <div className="dashboard-body">
    <h2>All Bookings</h2>

    {bookings.length === 0 ? (
      <p>No bookings found.</p>
    ) : (
      <table className="admin-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Vendor</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{JSON.parse(booking.customer).name}</td>
              <td>{booking.productTitle}</td>
              <td>{booking.vendor}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
)}
        {activeMenu === "Dashboard" && (
  <div className="dashboard-body">
    <h1>Welcome Back!</h1>
    <p>Here's what's happening in your rental marketplace.</p>

    <div className="dashboard-cards">
      <DashboardCard
        title="Total Users"
        value={totalUsers}
      />

      <DashboardCard
        title="Total Vendors"
        value={totalVendors}
      />

      <DashboardCard
        title="Total Listings"
        value={totalListings}
      />

      <DashboardCard
        title="Total Bookings"
        value={totalBookings}
      />
    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default AdminDashboard;