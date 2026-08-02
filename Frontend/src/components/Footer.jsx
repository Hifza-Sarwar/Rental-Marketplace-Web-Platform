import { Link } from "react-router-dom"
function Footer(){
    return(
        <>
        <footer className="footer">

{/* Main Footer Content */}
<div className="footer-main">

  {/* Column 1: Brand & Contact */}
  <div className="footer-brand">

    <h2>
      RENT<span>HUB</span>
    </h2>

    <p>
      RentHub is a modern rental marketplace that connects renters and
      owners. Explore homes, vehicles, furniture, electronics, fashion
      items, and more through one trusted platform.
    </p>

    <ul className="contact-list">

      <li>
        <span className="icon-box">
          <i className="fas fa-phone-alt"></i>
        </span>
        <span>+92 300 1234567</span>
      </li>

      <li>
        <span className="icon-box">
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <span>Lahore, Punjab, Pakistan</span>
      </li>

      <li>
        <span className="icon-box">
          <i className="fas fa-envelope"></i>
        </span>
        <span>support@renthub.com</span>
      </li>

    </ul>

  </div>

  {/* Column 2: Quick Links */}
  <div className="footer-links">

    <h3>Quick Links</h3>

    <ul>
    <li><Link to="/">Home</Link></li>
<li><Link to="/rentals">Browse Rentals</Link></li>
<li><Link to="/cars">Categories</Link></li>
<li><Link to="/#about">About Us</Link></li>
<li><Link to="/contact">Contact Us</Link></li>
<li><Link to="/add-listing">List Your Item</Link></li>
    </ul>

  </div>

  {/* Column 3: Support Center */}
  <div className="footer-links">

    <h3>Support Center</h3>

    <ul>
      <li><a href="#">FAQ's</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms & Conditions</a></li>
      <li><a href="#">Help Center</a></li>
      <li><a href="#">Safety Tips</a></li>
      <li><a href="#">Report an Issue</a></li>
    </ul>

  </div>

  {/* Column 4: Newsletter */}
  <div className="footer-newsletter">

    <h3>Newsletter</h3>

    <p>
      Subscribe to receive rental updates, new listings,
      special offers, and marketplace news.
    </p>

    <form
      className="newsletter-form"
      onSubmit={(e) => e.preventDefault()}
    >

      <div className="input-wrap">
        <input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <button type="submit">
        Subscribe Now
      </button>

    </form>

  </div>

</div>

{/* Bottom Bar */}
<div className="footer-bottom">

  <p>
    © Copyright 2026 <span>RENTHUB</span>. All Rights Reserved.
  </p>

  <div className="social-icons">

    <a href="#">
      <i className="fab fa-facebook-f"></i>
    </a>

    <a href="#">
      <i className="fab fa-twitter"></i>
    </a>

    <a href="#">
      <i className="fab fa-linkedin-in"></i>
    </a>

    <a href="#">
      <i className="fab fa-instagram"></i>
    </a>

    <a href="#">
      <i className="fab fa-pinterest-p"></i>
    </a>

  </div>

</div>

</footer>
        </>
    )
}
export default Footer