import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";
import { getAllUsers } from "../controllers/userController.js";

const router = express.Router();

// Any logged-in user
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user,
  });
});

// Vendor only
router.get(
  "/vendor-dashboard",
  protect,
  authorizeRoles("vendor"),
  (req, res) => {
    res.json({
      message: "Welcome Vendor!",
    });
  }
);

// Admin only
router.get(
  "/admin-dashboard",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin!",
    });
  }
);

router.get(
  "/all",
  protect,
  authorizeRoles("admin"),
  getAllUsers
);

export default router;