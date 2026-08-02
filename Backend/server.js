import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import userRoutes from "./routes/userRoutes.js";
import listingRoutes from "./routes/routelisting.js";
import bookingRoutes from "./routes/bookingRoutes.js";
// for image
import path from "path";
dotenv.config();
console.log(process.env.MONGO_URI);
connectDB();
const app = express();
app.use(express.json());

app.use(cors());



app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/bookings", bookingRoutes);


app.get("/", (req, res) => {
  res.send(" RentHub Backend is Running");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});






