import { Link } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./loginModel";
function TopHeader(){
    const user = localStorage.getItem("user");
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

                    {user ? (
  <>
    <span>{user}</span>

    <button
      onClick={() => {
        localStorage.removeItem("user");
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
 
   

    <Link to="/choose-signup" target="_blank">
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