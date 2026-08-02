import { useState, useRef ,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import {
  createListing,
  updateListing,
  getListingById
} from "../api/listings";

function AddListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [images, setImages] = useState([]);


  // Stores uploaded image previews
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
    const file = files[0];
  
    if (!file) return;
  
    setImageFile(file);
  
    const reader = new FileReader();
  
    reader.onload = (e) => {
      setImages([e.target.result]);
    };
  
    reader.readAsDataURL(file);
  };
  // Removes selected image from preview list
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Handles form submission
  const handleSubmit = async(e) => {

    // Prevents page refresh
    e.preventDefault();

    const form = new FormData();

form.append("title", formData.title);
form.append("description", formData.desc);
form.append("category", formData.category);
form.append("pricePerDay", formData.price);
form.append("location", formData.location);

if (imageFile) {
  form.append("image", imageFile);
}

try {
  await createListing(form);

  alert("Listing Added Successfully!");
  
  navigate("/vendor-dashboard");

} catch (error) {
  console.error(error);
  alert(error.message);
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
    if (!id) return;
  
    async function fetchListing() {
      try {
        const listing = await getListingById(id);
  
        setIsEditing(true);
  
        setFormData({
          title: listing.title,
          category: listing.category,
          price: listing.pricePerDay,
          location: listing.location,
          desc: listing.description,
        });
  
        if (listing.image) {
          setImages([
            `http://localhost:5000/uploads/${listing.image}`,
          ]);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchListing();
  }, [id]);
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
  ref={fileInputRef}
  onChange={(e) => handleFiles(e.target.files)}
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