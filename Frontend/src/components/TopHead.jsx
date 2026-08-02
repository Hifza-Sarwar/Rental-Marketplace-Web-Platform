import { Link } from "react-router-dom";
import { useState } from "react";
import { getCurrentUser, clearAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import LoginModal from "./loginModel";
function TopHeader(){
    const navigate = useNavigate();
const currentUser = getCurrentUser();
const [showLogin, setShowLogin] = useState(false);
    return(
        <div className="top-header">
            <div className="out-box">
                <div className="inside-box">

                    <div className="col-1">
                        <span>
                            <i className="fa-solid fa-envelope"></i>
                            info@gmail.com
                        </span>

                        <span>
                            <i className="fa-solid fa-phone-volume"></i>
                            +2 123 654 7890
                        </span>

                        <span>
                            Sum - fri (08 AM-10)
                        </span>
                    </div>

                    <div className="col-2">

                    {currentUser ? (
  <>
    <span>
 {currentUser.name} ({currentUser.role})
</span>
<button
  className="dashboard-btn"
  onClick={() => {
    if (currentUser.role === "user") {
      navigate("/user-dashboard");
    } else if (currentUser.role === "vendor") {
      navigate("/vendor-dashboard");
    } else if (currentUser.role === "admin") {
      navigate("/admin-dashboard");
    }
  }}
>
  Dashboard
</button>

<button
  className="logout-btn-top"
  onClick={() => {
    clearAuth();
    navigate("/");
    window.location.reload();
  }}
>
  Logout
</button>
  </>
) : (
  <>
  {/* Open model */}
   
      
     
   
 
  <span
  // onClick={() => setShowLogin(true)}
  style={{ cursor: "pointer" }}
>
<Link to="/choose-login">
  Login
</Link>
</span>
 
   

    <Link to="/choose-signup">
      Register
    </Link>
  </>
)}

<span>Follow Us</span>

<div className="social">
    <i className="fa-brands fa-facebook-f"></i>
    <i className="fa-brands fa-twitter"></i>
    <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-linkedin-in"></i>
</div>

</div>
                </div>
            </div>
            {showLogin && (
  <LoginModal
    closeModal={() => setShowLogin(false)}
  />
)}
        </div>
    )
}

export default TopHeader