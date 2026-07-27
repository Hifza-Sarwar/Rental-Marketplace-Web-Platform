function VendorStats({
    vendorListings,
    activeRentals,
    pendingRequests,
    earnings,
  }) {
    return (
      <div className="stats">
  
        <div className="card">
          <h3>{vendorListings.length}</h3>
          <p>Total Listings</p>
        </div>
  
        <div className="card">
          <h3>{activeRentals}</h3>
          <p>Active Rentals</p>
        </div>
  
        <div className="card">
          <h3>{pendingRequests}</h3>
          <p>Pending Requests</p>
        </div>
  
        <div className="card">
          <h3>Rs {earnings}</h3>
          <p>Total Earnings</p>
        </div>
  
      </div>
    );
  }
  
  export default VendorStats;