import { useState } from "react";
import { useParams, Link,useNavigate } from "react-router-dom";
import furnitureData from "../Data/FurnitureData";
import carsData from "../Data/CarData";
import electronicsData from "../Data/ElectronicsData"
import housesData from "../Data/HouseData"
import dressesData from "../Data/DressData";
function ProductDetail() {
  // login for rent
  const user = localStorage.getItem("user");
  // to show all products
  const allProducts = [
    ...furnitureData,
    ...carsData,
    ...dressesData,
    ...electronicsData,
    ...housesData,
  ];
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // useParams gets product ID from URL.
  const { id } = useParams();

  const navigate = useNavigate();
  
    // Find matching product using ID.
  const product = allProducts.find(
    (item) => item.id === Number(id)
  );
  // price calculation
  let total = 0;

if (startDate && endDate) {

  const start = new Date(startDate);
  const end = new Date(endDate);
  const price = parseInt(product.price.replace(/\D/g, ""));

  const totalDays =
    (end - start) / (1000 * 60 * 60 * 24) + 1;

  if (totalDays > 0) {
    total = totalDays * price;
  }

}
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const handleBooking = () => {

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
  
      const booking = {
        id: Date.now(),
        customer: localStorage.getItem("user"),
        vendor: product.vendor || "N/A",
        productTitle: product.title || product.name,
        productId: product.id,
        status: "Pending",
      };
  
    bookings.push(booking);
  
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );
  
    alert("Booking Request Sent!");
  };

  return (
    <section className="view-container">
      <div className="view-card">

        {/* LEFT IMAGE */}
        <div className="view-left">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="view-right">

          <h2>{product.name}</h2>

          <p className="view-price">
            {product.price}
          </p>

          <p className="view-location">
             {product.location}, Pakistan
          </p>

          <div className="booking-box">

            <label>Start Date</label>
            <input
  type="date"
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
/>


            <label>End Date</label>
            <input
  type="date"
  value={endDate}
  onChange={(e) => setEndDate(e.target.value)}
/>

            <h3>Total:{total} RS</h3>
            {/* To rent 1st have to login */}

            {user ? (
  <Link to="/booking" state={{ product }}>
    <button onClick={handleBooking}>
      Rent Now
    </button>
  </Link>
) : (
<button
  onClick={() =>
    navigate("/login", {
      state: {
        redirectTo: `/product/${product.id}`,
      },
    })
  }
>
  Rent Now
</button>
)}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductDetail;