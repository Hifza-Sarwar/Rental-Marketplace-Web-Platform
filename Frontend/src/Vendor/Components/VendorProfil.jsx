function VendorProfile({
    vendor,
    vendorListings,
    vendorBookings,
    earnings,
  }) {
    return (
      <div className="profile-card">
  
        <h2>Vendor Profile</h2>
  
        <p>
          <strong>Name:</strong> {vendor?.name}
        </p>
  
        <p>
          <strong>Email:</strong> {vendor?.email}
        </p>
  
        <p>
          <strong>Role:</strong> {vendor?.role}
        </p>
  
        <p>
          <strong>Total Listings:</strong>{" "}
          {vendorListings.length}
        </p>
  
        <p>
          <strong>Total Bookings:</strong>{" "}
          {vendorBookings.length}
        </p>
  
        <p>
          <strong>Total Earnings:</strong>{" "}
          Rs. {earnings}
        </p>
  
      </div>
    );
  }
  
  export default VendorProfile;