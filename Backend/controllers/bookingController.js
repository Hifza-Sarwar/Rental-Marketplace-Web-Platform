import Booking from "../models/booking.js";
import Listing from "../models/listing.js";

export const createBooking = async (req, res) => {
  try {
    const { listingId, startDate, endDate } = req.body;

    const listing = await Listing.findById(listingId);

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }
    // Check if the listing is already booked for these dates
const existingBooking = await Booking.findOne({
  listing: listingId,
  status: { $in: ["Pending", "Approved"] },
  $or: [
    {
      startDate: { $lte: new Date(endDate) },
      endDate: { $gte: new Date(startDate) },
    },
  ],
});

if (existingBooking) {
  return res.status(400).json({
    message: "This listing is already booked for the selected dates.",
  });
}

    const days =
      (new Date(endDate) - new Date(startDate)) /
      (1000 * 60 * 60 * 24);

    const totalPrice = days * listing.pricePerDay;

    const booking = await Booking.create({
      listing: listingId,
      user: req.user._id,
      startDate,
      endDate,
      totalPrice,
    });

    res.status(201).json({
      message: "Booking Created Successfully",
      booking,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Only get my booking
export const getMyBookings = async (req, res) => {
  try {
    console.log("Logged in user:", req.user);

    const bookings = await Booking.find({
      user: req.user._id,
    })
      .populate("listing", "title category location pricePerDay")
      .populate("user", "name email");

    res.status(200).json({
      count: bookings.length,
      bookings,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Vendor can see all booking 
export const getVendorBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate({
        path: "listing",
        match: { owner: req.user._id },
        select: "title category pricePerDay",
      })
      .populate("user", "name email");

    const vendorBookings = bookings.filter(
      (booking) => booking.listing !== null
    );

    res.status(200).json({
      count: vendorBookings.length,
      bookings: vendorBookings,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Vendor approve booking
export const approveBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("listing");

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    // Make sure the booking belongs to one of this vendor's listings
    if (booking.listing.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You can only approve bookings for your own listings.",
      });
    }

    booking.status = "Approved";
    await booking.save();

    res.status(200).json({
      message: "Booking Approved Successfully",
      booking,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Reject booking 
export const rejectBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("listing");

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    if (booking.listing.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You can only reject bookings for your own listings.",
      });
    }

    booking.status = "Rejected";
    await booking.save();

    res.status(200).json({
      message: "Booking Rejected Successfully",
      booking,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Cancel bookig by vendor
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("listing", "title category pricePerDay owner")
      .populate("user", "name email")
      .populate({
        path: "listing",
        populate: { path: "owner", select: "name email" },
      });

    res.status(200).json({
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    // Only the user who created the booking can cancel it
    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You can only cancel your own booking.",
      });
    }

    await booking.deleteOne();

    res.status(200).json({
      message: "Booking Cancelled Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};