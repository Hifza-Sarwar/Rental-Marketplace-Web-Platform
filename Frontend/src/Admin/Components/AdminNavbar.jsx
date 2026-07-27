import { useNavigate } from "react-router-dom";
function AdminNavbar() {
  const navigate = useNavigate();
  // Logout function 
  const handleLogout = () => {

    localStorage.removeItem("admin");
  
    navigate("/");
  
  };
    return (
      <div className="admin-navbar">
        <h2>Admin Dashboard</h2>
  
        <div className="navbar-right">
          
  
          <div className="admin-profile">
  
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AdminNavbar;