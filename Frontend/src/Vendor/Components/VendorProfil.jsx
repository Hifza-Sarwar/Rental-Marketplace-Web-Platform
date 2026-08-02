function VendorProfile({
  vendor,
  vendorListings = [],
  vendorBookings = [],
  earnings = 0,
}) {
  return (
    <div className="profile-card">

      <h2>Vendor Profile</h2>

      <p>
        <strong>Name:</strong> {vendor?.name || "Vendor"}
      </p>

      <p>
        <strong>Email:</strong> {vendor?.email || "Not Available"}
      </p>

      <p>
        <strong>Role:</strong> {vendor?.role || "Vendor"}
      </p>

      <p>
        <strong>Total Listings:</strong> {vendorListings.length}
      </p>

      <p>
        <strong>Total Bookings:</strong> {vendorBookings.length}
      </p>

      <p>
        <strong>Total Earnings:</strong> Rs. {earnings}
      </p>

    </div>
  );
}

export default VendorProfile;