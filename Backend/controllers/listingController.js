console.log("LISTING CONTROLLER LOADED");
import Listing from "../models/listing.js";

export const createListing = async (req, res) => {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);
    const {
      title,
      description,
      category,
      pricePerDay,
      location,
    } = req.body;

    const listing = await Listing.create({
        title,
        description,
        category,
        pricePerDay,
        location,
        image: req.file ? req.file.filename : "",
        owner: req.user._id,
      });

    res.status(201).json({
      message: "Listing Created Successfully",
      listing,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });

  }
  
};
// Get all listing
export const getAllListings = async (req, res) => {
    try {
      const listings = await Listing.find().populate(
        "owner",
        "name email"
      );
  
      res.status(200).json({
        count: listings.length,
        listings,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
    
  };
//   Listing by ID
  export const getListingById = async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id).populate(
        "owner",
        "name email"
      );
  
      if (!listing) {
        return res.status(404).json({
          message: "Listing not found",
        });
      }
  
      res.status(200).json(listing);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
//   update listing

export const updateListing = async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
  
      if (!listing) {
        return res.status(404).json({
          message: "Listing not found",
        });
      }
  
      // Check if the logged-in vendor owns this listing
      if (listing.owner.toString() !== req.user._id.toString()) {
        return res.status(403).json({
          message: "You can only update your own listings.",
        });
      }
  
      const updatedListing = await Listing.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
  
      res.status(200).json({
        message: "Listing Updated Successfully",
        listing: updatedListing,
      });
  
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
//   Delete listing

export const deleteListing = async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
  
      if (!listing) {
        return res.status(404).json({
          message: "Listing not found",
        });
      }
  
      // Only the owner can delete
      if (listing.owner.toString() !== req.user._id.toString()) {
        return res.status(403).json({
          message: "You can only delete your own listings.",
        });
      }
  
      await listing.deleteOne();
  
      res.status(200).json({
        message: "Listing Deleted Successfully",
      });
  
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };