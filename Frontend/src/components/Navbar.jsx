
import { Link } from "react-router-dom"
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
function Navbar(){

    const navigate = useNavigate();

const handleAddListing = () => {
  const currentUser = localStorage.getItem("user");

  if (!currentUser) {
    navigate("/choose-login", {
      state: {
        redirectTo: "/add-listing",
      },
    });
    return;
  }

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const loggedInUser = users.find(
    (user) => user.email === currentUser
  );

  if (loggedInUser?.role !== "vendor") {
    alert("Only vendors can add listings.");
    return;
  }

  navigate("/add-listing");
};
    return(

        <header className="header">

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <nav>

                <div className="navbar">

                    <ul className="navlink">

                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li>
                            <a href="#">
                                Inventory
                                <i className="fa-solid fa-chevron-down"></i>
                            </a>

                            <ul className="drop-down">

<li>
    <Link to="/furniture">Furniture</Link>
</li>

<li>
    <Link to="/cars">Cars</Link>
</li>

<li>
    <Link to="/electronics">Electronics</Link>
</li>

<li>
    <Link to="/houses">Houses</Link>
</li>

<li>
    <Link to="/dresses">Dresses</Link>
</li>

</ul>

                        </li>

                        <li>
    <Link to="/rentals">Rentals</Link>
</li>

                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>

                    </ul>

                </div>

                <div className="others">

                    <i className="fa-solid fa-magnifying-glass"></i>

                    <i className="fa-solid fa-cart-shopping cart"></i>

                   
    <button className="addbtn" onClick={handleAddListing}>
        <i className="fa-solid fa-circle-plus"></i>
        Add Listing
    </button>


                    <i className="fa-solid fa-bars" id="menubtn"></i>

                </div>

            </nav>

        </header>

    )
}

export default Navbar