function VendorListings({
    vendorListings,
    handleEdit,
    handleDelete,
  }) {
    return (
      <>
        <div className="section-title">
          <h3>My Rental Listings</h3>
        </div>
  
        <div className="listings">
  
          {vendorListings.length === 0 ? (
  
            <p>No listings available.</p>
  
          ) : (
  
            vendorListings.map((item) => (
  
              <div
                className="listing-card"
                key={item.id}
              >
  
                {item.images && item.images.length > 0 && (
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="listing-image"
                  />
                )}
  
                <h4>{item.title}</h4>
  
                <p>
                  <strong>Category:</strong> {item.category}
                </p>
  
                <p>
                  <strong>Price:</strong> Rs. {item.price} / Day
                </p>
  
                <p>
                  <strong>Location:</strong> {item.location}
                </p>
  
                <p className="description">
                  {item.desc}
                </p>
  
                <div className="listing-actions">
  
                  <button
                    className="delete-btn"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
  
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
  
                </div>
  
              </div>
  
            ))
  
          )}
  
        </div>
      </>
    );
  }
  
  export default VendorListings;
  