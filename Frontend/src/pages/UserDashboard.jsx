import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/UserDashboard.css";
import { getCurrentUser } from "../utils/auth";
import { clearAuth } from "../utils/auth";

function UserDashboard() {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

const bookings =
  JSON.parse(localStorage.getItem("bookings")) || [];

  const userBookings = bookings.filter(
    (booking) => booking.customer === currentUser?.email
  );

const pendingBookings = userBookings.filter(
  (booking) => booking.status === "Pending"
);

const approvedBookings = userBookings.filter(
  (booking) => booking.status === "Approved"
);

const rejectedBookings = userBookings.filter(
  (booking) => booking.status === "Rejected"
);
// Cancel booking
const handleCancelBooking = (bookingId) => {
  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const updatedBookings = bookings.filter(
    (booking) => booking.id !== bookingId
  );

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );

  window.location.reload();
};

  const [activeMenu, setActiveMenu] = useState("Dashboard");


  return (

    <div className="user-dashboard">

      {/* Sidebar */}

      <div className="user-sidebar">

        <div className="user-logo">
          <h2>RentHub</h2>
        </div>

        <ul>
        <li onClick={() => navigate("/")}>
  <i className="fas fa-home"></i> Home
</li>

          <li
            className={activeMenu === "Dashboard" ? "active" : ""}
            onClick={() => setActiveMenu("Dashboard")}
          >
            <i className="fas fa-chart-line"></i>
            Dashboard
          </li>

          <li
            className={activeMenu === "Bookings" ? "active" : ""}
            onClick={() => setActiveMenu("Bookings")}
          >
            <i className="fas fa-calendar-check"></i>
            My Bookings
          </li>

         

          <li
            className={activeMenu === "Profile" ? "active" : ""}
            onClick={() => setActiveMenu("Profile")}
          >
            <i className="fas fa-user"></i>
            Profile
          </li>

          <li
            className={activeMenu === "Settings" ? "active" : ""}
            onClick={() => setActiveMenu("Settings")}
          >
            <i className="fas fa-cog"></i>
            Settings
          </li>

          <li
 onClick={() => {
  clearAuth();
  alert("Logged out successfully!");
  navigate("/");
}}
>
  <i className="fas fa-sign-out-alt"></i>
  Logout
</li>

        </ul>

      </div>

      {/* Main Content */}

      <div className="user-main-content">

        <div className="user-navbar">

          <div>
            <h2>User Dashboard</h2>
            <p>Manage your bookings and account.</p>
          </div>

          <div className="user-profile">

            <i className="fas fa-bell"></i>

            <img
              src="https://i.pravatar.cc/50?img=15"
              alt="user"
            />

          </div>

        </div>

        {activeMenu === "Dashboard" && (

<div className="stats">

  <div className="card">
    <h3>{userBookings.length}</h3>
    <p>Total Bookings</p>
  </div>

  <div className="card">
    <h3>{pendingBookings.length}</h3>
    <p>Pending</p>
  </div>

  <div className="card">
    <h3>{approvedBookings.length}</h3>
    <p>Approved</p>
  </div>

  <div className="card">
    <h3>{rejectedBookings.length}</h3>
    <p>Rejected</p>
  </div>

</div>

)}
{activeMenu === "Bookings" && (

<>

<div className="section-title">
  <h3>My Bookings</h3>
</div>

<div className="listings">

  {userBookings.length === 0 ? (

    <p>No bookings yet.</p>

  ) : (

    userBookings.map((booking) => (

      <div
        className="listing-card"
        key={booking.id}
      >

        <h4>{booking.productTitle}</h4>

        <p>
          <strong>Status:</strong>{" "}
          <span
            className={
              booking.status === "Approved"
                ? "approved"
                : booking.status === "Rejected"
                ? "rejected"
                : "pending"
            }
          >
            {booking.status}
          </span>
        </p>

        <button
  onClick={() => handleCancelBooking(booking.id)}
  className="cancel-btn"
>
  Cancel Booking
</button>

      </div>

    ))

  )}

</div>

</>

)}
{/* Profile section */}
{activeMenu === "Profile" && (

<>
  <div className="section-title">
    <h3>My Profile</h3>
  </div>

  <div className="profile-card">

    <h4>User Information</h4>

    <p>
  <strong>Name:</strong> {currentUser?.name}
</p>

<p>
  <strong>Email:</strong> {currentUser?.email}
</p>

<p>
  <strong>Role:</strong> {currentUser?.role}
</p>

    <p>
      <strong>Role:</strong> Customer
    </p>

    <p>
      <strong>Status:</strong> Active
    </p>

  </div>

</>

)}
{/* Setting section */}
{activeMenu === "Settings" && (

<>
  <div className="section-title">
    <h3>Settings</h3>
  </div>

  <div className="listing-card">

    <h4>Account Settings</h4>

    <p>Manage your account settings below.</p>

    <button



      className="logout-btn"
      onClick={() => {

        localStorage.removeItem("user");

        alert("Logged out successfully!");

        navigate("/");

      }}
    >
      Logout
    </button>

  </div>

</>

)}

      </div>

    </div>

  );

}

export default UserDashboard;