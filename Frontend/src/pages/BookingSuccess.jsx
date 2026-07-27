import { Link } from "react-router-dom";

function BookingSuccess() {
  return (
    <section className="success-page">
      <div className="success-card">

        <h1>✅ Booking Confirmed</h1>

        <p>
          Thank you for choosing RentHub.
        </p>

        <p>
          Your rental request has been submitted successfully.
        </p>

        <Link to="/">
          <button>
            Back To Home
          </button>
        </Link>

      </div>
    </section>
  );
}

export default BookingSuccess;