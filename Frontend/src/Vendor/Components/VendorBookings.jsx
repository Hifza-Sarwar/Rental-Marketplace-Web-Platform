function VendorBookings({
    vendorBookings,
    handleBookingStatus,
  }) {
    return (
      <>
        <div className="section-title">
          <h3>Booking Requests</h3>
        </div>
  
        <table>
  
          <thead>
            <tr>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
  
          <tbody>
  
            {vendorBookings.length === 0 ? (
  
              <tr>
                <td colSpan="4">
                  No Booking Requests
                </td>
              </tr>
  
            ) : (
  
              vendorBookings.map((booking) => (
  
                <tr key={booking.id}>
  
                  <td>{booking.customer}</td>
  
                  <td>{booking.productTitle}</td>
  
                  <td
                    className={
                      booking.status === "Approved"
                        ? "approved"
                        : booking.status === "Rejected"
                        ? "rejected"
                        : "pending"
                    }
                  >
                    {booking.status}
                  </td>
  
                  <td>
  
                    {booking.status === "Pending" ? (
                      <>
                        <button
                          onClick={() =>
                            handleBookingStatus(
                              booking.id,
                              "Approved"
                            )
                          }
                        >
                          Approve
                        </button>
  
                        <button
                          onClick={() =>
                            handleBookingStatus(
                              booking.id,
                              "Rejected"
                            )
                          }
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      "-"
                    )}
  
                  </td>
  
                </tr>
  
              ))
  
            )}
  
          </tbody>
  
        </table>
      </>
    );
  }
  
  export default VendorBookings;