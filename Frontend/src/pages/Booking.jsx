
import { useLocation, useNavigate } from "react-router-dom";
function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;
  
  // Handles form submission.

  const handleBooking = (e) => {
    
    e.preventDefault();
  
  
    const currentUser = JSON.parse(localStorage.getItem("user"));
  
    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
  
    const booking = {
      id: Date.now(),
      customer: currentUser.email,
      vendor: product.vendor || "N/A",
      productId: product.id,
      productTitle: product.title || product.name,
      productImage: product.image,
      price: product.price,
      status: "Pending",
    };
  
    bookings.push(booking);
  
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );
  
    alert("Booking Successful!");
  
    navigate("/booking-success");
  };
  return (
    
    <>
    {/* Selecting prodduct detail */}
    {product && (
  <div className="selected-product">

    <img
      src={product.image}
      alt={product.name}
    />

    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>📍 {product.location}</p>
    </div>

  </div>
)}
{/* Booking Form */}

    <div className="booking-wrapper">
      <div className="booking-container">

        <div className="booking-card">
          <h2>Book Your Rental</h2>

          <form onSubmit={handleBooking}>

            <div className="booking-input-group">
              <label>Full Name</label>
              <input type="text" required />
            </div>

            <div className="booking-input-group">
              <label>Email</label>
              <input type="email" required />
            </div>

            <div className="booking-input-group">
              <label>Phone</label>
              <input type="tel" required />
            </div>

            <div className="booking-input-group">
              <label>Pick-up Date</label>
              <input type="date" required />
            </div>

            <div className="booking-input-group">
              <label>Return Date</label>
              <input type="date" required />
            </div>

            <div className="booking-input-group rental-type">
              <label>Rental Type</label>

              <select required>
                <option value="">Select</option>
                <option>Car</option>
                <option>Electronics</option>
                <option>Dresses</option>
                <option>Furniture</option>
                <option>Home</option>
              </select>
            </div>

            <button
              type="submit"
              className="booking-button"
            >
              Confirm Booking
            </button>

          </form>
        </div>

      </div>
    </div>
    
    </>
  );
}

export default Booking;
