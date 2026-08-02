import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/users";
import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import "../styles/AdminDashboard.css";

function Users() {
  const [userList, setUserList] = useState([]);

useEffect(() => {
  async function fetchUsers() {
    try {
      const users = await getAllUsers();

      setUserList(
        users.filter((user) => user.role === "user")
      );
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  fetchUsers();
}, []);
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
          <h1>Users Management</h1>

          <table className="admin-table">

<thead>

  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Role</th>
    <th>Action</th>
  </tr>

</thead>

<tbody>

  {userList.map((user, index) => (

    <tr key={user.id}>

      <td>{index + 1}</td>

      <td>{user.name}</td>

      <td>{user.email}</td>

      <td>{user.role}</td>

      <td>
        <button onClick={() => handleDelete(user.id)} className="delete-btn" >
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

export default Users;