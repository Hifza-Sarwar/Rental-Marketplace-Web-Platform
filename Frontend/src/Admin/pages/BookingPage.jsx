import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import "../styles/AdminDashboard.css";

function Bookings() {
  const bookings =
  JSON.parse(localStorage.getItem("bookings")) || [];

const handleDelete = (id) => {

  const updatedBookings = bookings.filter(
    (booking) => booking.id !== id
  );

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );

  window.location.reload();

};
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <AdminNavbar />

        <div className="dashboard-body">
          <h1>Bookings Management</h1>

          <table className="admin-table">
          <thead>
  <tr>
    <th>ID</th>
    <th>Customer</th>
    <th>Vendor</th>
    <th>Product</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>

  {bookings.map((booking, index) => (

    <tr key={booking.id}>

      <td>{index + 1}</td>

      <td>{booking.customer}</td>

      <td>{booking.vendor}</td>

      <td>{booking.productTitle}</td>

      <td>{booking.status}</td>

      <td>

        <button
          className="delete-btn"
          onClick={() => handleDelete(booking.id)}
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

export default Bookings;