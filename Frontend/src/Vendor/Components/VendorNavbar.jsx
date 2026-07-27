function VendorNavbar({ vendor }) {
    return (
      <div className="dashboard-navbar">
  
        <div>
          <h2>Vendor Dashboard</h2>
  
          <p>
            Manage your rental business efficiently.
          </p>
        </div>
  
        <div className="vendor-info">
          <h4>Welcome, {vendor?.name}</h4>
          <p>{vendor?.email}</p>
        </div>
  
      </div>
    );
  }
  
  export default VendorNavbar;