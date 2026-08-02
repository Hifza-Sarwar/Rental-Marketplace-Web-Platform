import { useNavigate } from "react-router-dom";

function AdminSidebar({
  activeMenu,
  setActiveMenu,
}) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h2 className="admin-logo">RentHub</h2>

      <ul className="admin-menu">

        <li onClick={() => navigate("/")}>
          Home
        </li>

        <li
          className={activeMenu === "Dashboard" ? "active" : ""}
          onClick={() => setActiveMenu("Dashboard")}
        >
          Dashboard
        </li>

        <li
          className={activeMenu === "Users" ? "active" : ""}
          onClick={() => setActiveMenu("Users")}
        >
          Users
        </li>

        <li
          className={activeMenu === "Listings" ? "active" : ""}
          onClick={() => setActiveMenu("Listings")}
        >
          Listings
        </li>

        <li
          className={activeMenu === "Bookings" ? "active" : ""}
          onClick={() => setActiveMenu("Bookings")}
        >
          Bookings
        </li>

        <li
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </li>

      </ul>
    </aside>
  );
}

export default AdminSidebar;