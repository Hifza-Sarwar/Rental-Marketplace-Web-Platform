import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import DashboardCard from "../Components/DashboardCard";

import "../styles/AdminDashboard.css";
// Read data from local storage
const users =
  JSON.parse(localStorage.getItem("users")) || [];

const items =
  JSON.parse(localStorage.getItem("items")) || [];

const bookings =
  JSON.parse(localStorage.getItem("bookings")) || [];
  // Calculate totals
  const totalUsers = users.filter(
    (user) => user.role === "user"
  ).length;
  
  const totalVendors = users.filter(
    (user) => user.role === "vendor"
  ).length;
  
  const totalListings = items.length;
  
  const totalBookings = bookings.length;

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">

        <AdminNavbar />

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

      </div>
    </div>
  );
}

export default AdminDashboard;