import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropOpen(false);
  };

  const handleAddListing = () => {
    closeMenu();
    const currentUser = JSON.parse(localStorage.getItem("user"));

    // Not logged in
    if (!currentUser) {
      navigate("/choose-login");
      return;
    }

    // Logged in but not a vendor
    if (currentUser.role !== "vendor") {
      alert("Only vendors can add listings.");
      return;
    }

    // Logged in as vendor
    navigate("/add-listing");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <nav>
        <div className="navbar">
          <ul className={`navlink ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>

            <li>
              <a href="/#about" onClick={closeMenu}>About</a>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setDropOpen(!dropOpen);
                }}
              >
                Inventory
                <i className="fa-solid fa-chevron-down"></i>
              </a>

              <ul className={`drop-down ${dropOpen ? "open" : ""}`}>
                <li><Link to="/furniture" onClick={closeMenu}>Furniture</Link></li>
                <li><Link to="/cars" onClick={closeMenu}>Cars</Link></li>
                <li><Link to="/electronics" onClick={closeMenu}>Electronics</Link></li>
                <li><Link to="/houses" onClick={closeMenu}>Houses</Link></li>
                <li><Link to="/dresses" onClick={closeMenu}>Dresses</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/rentals" onClick={closeMenu}>Rentals</Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="others">
        <i
  className="fa-solid fa-circle-plus add-icon"
  title="Add Listing"
  onClick={handleAddListing}
></i>
          <i className="fa-solid fa-cart-shopping cart"></i>

          <button className="addbtn" onClick={handleAddListing}>
            <i className="fa-solid fa-circle-plus"></i>
            Add Listing
          </button>

          <i
            className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            id="menubtn"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;