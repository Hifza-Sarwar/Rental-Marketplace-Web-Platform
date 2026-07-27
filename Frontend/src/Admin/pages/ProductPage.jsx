import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import "../styles/AdminDashboard.css";

function Products() {
  // Read prdoducts from local storage
  const items =
  JSON.parse(localStorage.getItem("items")) || [];

const handleDelete = (id) => {

  const updatedItems = items.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    "items",
    JSON.stringify(updatedItems)
  );

  window.location.reload();

};
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <AdminNavbar />

        <div className="dashboard-body">
          <h1>Products Management</h1>

          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

{items.map((item, index) => (

  <tr key={item.id}>

    <td>{index + 1}</td>

    <td>{item.title}</td>

    <td>{item.category}</td>

    <td>{item.vendor}</td>

    <td>Approved</td>

    <td>

      <button className="approve-btn">
        Approve
      </button>

      <button
        className="delete-btn"
        onClick={() => handleDelete(item.id)}
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

export default Products;