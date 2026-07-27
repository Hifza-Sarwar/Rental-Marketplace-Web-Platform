import express from "express";
import { createListing ,getAllListings,getListingById,updateListing,deleteListing} from "../controllers/listingController.js";
import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";
import upload from "../middleware/picUpload.js";

const router = express.Router();

// router.post(
//     "/",
//     protect,
//     authorizeRoles("vendor"),
//     upload.single("image"),

//     createListing
//   );

router.post(
    "/",
    (req, res, next) => {
      console.log("STEP 1 - Route reached");
      next();
    },
    protect,
    (req, res, next) => {
      console.log("STEP 2 - Protect middleware passed");
      next();
    },
    authorizeRoles("vendor"),
    (req, res, next) => {
      console.log("STEP 3 - Role middleware passed");
      next();
    },
    upload.single("image"),
    (req, res, next) => {
      console.log("STEP 4 - Multer passed");
      next();
    },
    createListing
  );



router.get("/", getAllListings);
router.get("/:id", getListingById);
// updating listing
router.put(
    "/:id",
    protect,
    authorizeRoles("vendor"),
    updateListing
  );
//   to delete listing
router.delete(
    "/:id",
    protect,
    authorizeRoles("vendor"),
    deleteListing
  );

export default router;