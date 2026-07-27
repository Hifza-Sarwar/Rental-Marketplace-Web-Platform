import { useState, useRef ,useEffect} from "react";

function AddListing() {

  // Stores uploaded image previews
  const [images, setImages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

const [editingId, setEditingId] = useState(null);

  // Stores all form input values in a single state object
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    location: "",
    desc: ""
  });

  // useRef is used to access the hidden file input element directly
  const fileInputRef = useRef();

  // Handles changes for all form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Dynamically updates the field based on input id
      [e.target.id]: e.target.value
    });
  };

  // Handles image uploads and converts images into preview URLs
  const handleFiles = (files) => {

    [...files].forEach((file) => {

      // FileReader is used to read image files
      const reader = new FileReader();

      reader.onload = (e) => {

        // Adds new image preview to existing images array
        setImages((prev) => [...prev, e.target.result]);
      };

      // Converts image into Base64 format
      reader.readAsDataURL(file);

    });

  };

  // Removes selected image from preview list
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Handles form submission
  const handleSubmit = (e) => {

    // Prevents page refresh
    e.preventDefault();

    // Creates a new rental item object
    const item = {
      id: Date.now(),
      ...formData,
      images,
      vendor: localStorage.getItem("user")
    };

    // Retrieves existing items from localStorage
    const items =
      JSON.parse(localStorage.getItem("items")) || [];

    // Adds new item into array
    const editItem = JSON.parse(
      localStorage.getItem("editItem")
    );
    
    if (editItem) {
    
      const updatedItems = items.map((product) =>
        product.id === editItem.id
          ? {
              ...item,
              id: editItem.id,
              vendor: editItem.vendor,
            }
          : product
      );
    
      localStorage.setItem(
        "items",
        JSON.stringify(updatedItems)
      );
    
      localStorage.removeItem("editItem");
    
      alert("Item Updated Successfully!");
    
    } else {
    
      items.push(item);
    
      localStorage.setItem(
        "items",
        JSON.stringify(items)
      );
    
      alert("Item Added Successfully!");
    }

   

    // Resets form after successful submission
    setFormData({
      title: "",
      category: "",
      price: "",
      location: "",
      desc: ""
    });

    // Clears uploaded image previews
    setImages([]);

  };
  useEffect(() => {
    const editItem = JSON.parse(
      localStorage.getItem("editItem")
    );
  
    if (editItem) {
      setIsEditing(true);
      setEditingId(editItem.id);
      setFormData({
        title: editItem.title,
        category: editItem.category,
        price: editItem.price,
        location: editItem.location,
        desc: editItem.desc,
      });
  
      setImages(editItem.images || []);
    }
  }, []);
  return (

    <section className="add-listing-page">

      <div className="glass-container">

        <h2>Add Rental Item</h2>

        {/* Form submission is handled by handleSubmit */}
        <form onSubmit={handleSubmit}>

          <div className="grid">

            <div className="input-box">

              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
              />

              <label>Item Title</label>

            </div>

            <div className="input-box">

              <select
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option>Cars</option>
                <option>Dresses</option>
                <option>Houses</option>
                <option>Electronics</option>
                <option>Furniture</option>
              </select>

              <label>Category</label>

            </div>

            <div className="input-box">

              <input
                type="number"
                id="price"
                value={formData.price}
                onChange={handleChange}
                required
              />

              <label>Price (PKR/day)</label>

            </div>

            <div className="input-box">

              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                required
              />

              <label>Location</label>

            </div>

            <div className="input-box full">

              <textarea
                id="desc"
                value={formData.desc}
                onChange={handleChange}
                required
              ></textarea>

              <label>Description</label>

            </div>

          </div>

          {/* Drag & Drop Image Upload Area */}
          <div
            className="upload-box"
            onClick={() =>
              fileInputRef.current.click()
            }
            onDragOver={(e) =>
              e.preventDefault()
            }
            onDrop={(e) => {
              e.preventDefault();
              handleFiles(
                e.dataTransfer.files
              );
            }}
          >

            <p>Drag & Drop Images</p>

            <span>
              or Click to Upload
            </span>

            {/* Hidden file input controlled using useRef */}
            <input
              type="file"
              hidden
              multiple
              ref={fileInputRef}
              onChange={(e) =>
                handleFiles(e.target.files)
              }
            />

          </div>

          <div className="preview">

            {/* map() is used to display uploaded image previews */}
            {images.map((img, index) => (

              <div
                className="listing-img-box"
                key={index}
              >

                <img
                  src={img}
                  alt="preview"
                />

                <span
                  onClick={() =>
                    removeImage(index)
                  }
                >
                  ×
                </span>

              </div>

            ))}

          </div>

          <button
type="submit"
className="btn"
>
{isEditing ? "Update Item" : "Add Item"}
</button>

        </form>

      </div>

    </section>

  );
}

export default AddListing;