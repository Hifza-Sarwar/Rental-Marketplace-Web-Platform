import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="sidebar">
      <h2 className="admin-logo">RentHub</h2>

      <ul className="admin-menu">
        <li>
          <NavLink to="/admin-dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/admin/users">Users</NavLink>
        </li>

        <li>
          <NavLink to="/admin/vendors">Vendors</NavLink>
        </li>

        <li>
          <NavLink to="/admin/products">Products</NavLink>
        </li>

        <li>
        <NavLink to="/admin/bookings">Bookings</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;