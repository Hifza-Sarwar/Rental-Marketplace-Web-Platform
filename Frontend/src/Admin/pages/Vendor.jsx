import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import "../styles/AdminDashboard.css";

function Vendors() {
  // Read the vendors
  const users =
  JSON.parse(localStorage.getItem("users")) || [];

const vendorList = users.filter(
  (user) => user.role === "vendor"
);

const handleDelete = (id) => {

  const updatedUsers = users.filter(
    (user) => user.id !== id
  );

  localStorage.setItem(
    "users",
    JSON.stringify(updatedUsers)
  );

  window.location.reload();

};
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
    
      <div className="admin-content">
        <AdminNavbar />

        <div className="dashboard-body">
          <h1>Vendors Management</h1>

          <table className="admin-table">
            <thead>
            <tr>
  <th>ID</th>
  <th>Vendor Name</th>
  <th>Email</th>
  <th>Role</th>
  <th>Action</th>
</tr>
            </thead>

            <tbody>

  {vendorList.map((vendor, index) => (

    <tr key={vendor.id}>

      <td>{index + 1}</td>

      <td>{vendor.name}</td>

      <td>{vendor.email}</td>

      <td>{vendor.role}</td>

      <td>

        <button className="delete-btn"
          onClick={() => handleDelete(vendor.id)}
        >
          Delete
        </button>

      </td>

    </tr>

  ))}

</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Vendors;