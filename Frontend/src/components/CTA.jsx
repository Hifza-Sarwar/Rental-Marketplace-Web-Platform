import chairImg from "../assets/images/hero-images/hero1.png";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        <div className="cta-text">

          <h2>Ready to Rent or List Your Item?</h2>

          <p>
            Join thousands of users who are renting smarter every day.
            Find what you need or earn by listing your items on RentHub.
          </p>

          <div className="cta-buttons">

          <Link to="/rentals" target="_blank">
          <button className="explore">
            Explore Rentals
          </button>
          </Link>

            <Link to="/contact">
            <button className="post">
              Contact Us
            </button>
            </Link>

          </div>

        </div>

        <div className="cta-image">
          <img src={chairImg} alt="Rental Item" />
        </div>

      </div>

    </section>
  );
}

export default CTA;