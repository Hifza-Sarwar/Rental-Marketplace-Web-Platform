import express from "express";
import { createBooking,getMyBookings,getVendorBookings,getAllBookings,approveBooking,rejectBooking,cancelBooking} from "../controllers/bookingController.js";
import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/all",
  protect,
  authorizeRoles("admin"),
  getAllBookings
);

router.get(
  "/my-bookings",
  protect,
  authorizeRoles("user"),
  getMyBookings
);
// vendor can view all their booking
router.get(
  "/vendor-bookings",
  protect,
  authorizeRoles("vendor"),
  getVendorBookings
);
// User can create a booking
router.post(
  "/",
  protect,
  authorizeRoles("user"),
  createBooking
);
// Vendor approve booking
router.put(
  "/:id/approve",
  protect,
  authorizeRoles("vendor"),
  approveBooking
);
// Vendor reject 
router.put(
  "/:id/reject",
  protect,
  authorizeRoles("vendor"),
  rejectBooking
);
// Vendor cancel booking 
router.delete(
  "/:id",
  protect,
  authorizeRoles("user"),
  cancelBooking
);
export default router