import { useNavigate } from "react-router-dom";
function VendorSidebar({ activeMenu, setActiveMenu }) {
  const navigate = useNavigate();
    return (
      <div className="sidebar">
  
        <div className="dashboard-logo">
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
            className={activeMenu === "Add Product" ? "active" : ""}
            onClick={() => setActiveMenu("Add Product")}
          >
            <i className="fas fa-plus-circle"></i>
            Add Product
          </li>
  
          <li
            className={activeMenu === "My Listings" ? "active" : ""}
            onClick={() => setActiveMenu("My Listings")}
          >
            <i className="fas fa-box"></i>
            My Listings
          </li>
  
          <li
            className={activeMenu === "Bookings" ? "active" : ""}
            onClick={() => setActiveMenu("Bookings")}
          >
            <i className="fas fa-calendar-check"></i>
            Bookings
          </li>
  
          <li
            className={activeMenu === "Profile" ? "active" : ""}
            onClick={() => setActiveMenu("Profile")}
          >
            <i className="fas fa-user"></i>
            Profile
          </li>
  
          <li
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("editItem");
              navigate("/");
            }}
          >
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </li>
  
        </ul>
  
      </div>
    );
  }
  
  export default VendorSidebar;