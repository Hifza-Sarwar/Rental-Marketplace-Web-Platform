import { Routes, Route ,useLocation} from "react-router-dom";

import Home from "./pages/Home";
import Furniture from "./pages/Furniture";
import Electronics from "./pages/Electronics";
import House from "./pages/House";
import Cars from "./pages/Cars"
import Dresses from "./pages/Dresses"
import ProductDetail from "./pages/ProductDetail";
import Booking from "./pages/Booking";
import TopHeader from "./components/TopHead";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import LoginModel from "./components/loginModel";
import LoginSelection from "./pages/LoginSelection";
import SignUp from "./pages/SignUp";
import SignupSelection from "./pages/SignupSelection";
import BookingSuccess from "./pages/BookingSuccess";
import Rentals from "./pages/ExploreRental";
import AddListing from "./pages/AddListing";
import VendorDashboard from "./Vendor/Pages/VendorDashboard";
import VendorSignup from "./pages/VendorSignUp"
import VendorLogin from "./pages/VendorLogin"
import UserDashboard from "./pages/UserDashboard";
import AdminLogin from "/src/Admin/pages/AdminLogin";

import AdminDashboard from "/src/Admin/pages/AdminDashboard";
import Users from "/src/Admin/pages/UserPage"
import Vendor from "./Admin/pages/Vendor";
import Products from "./Admin/pages/ProductPage";
import Bookings from "./Admin/pages/BookingPage";
import ScrollToTop from "./components/ScrollToTop";





function App() {
  // Get current URL path
  const location = useLocation();
  const hideLayout =
  location.pathname === "/booking" ||
  location.pathname === "/booking-success" ||
  location.pathname==="/add-listing" ||
  location.pathname==="/vendor-dashboard" ||
  location.pathname==="/user-dashboard" ||
  location.pathname==="/admin-dashboard" ||
  location.pathname==="/admin-login" ||
  location.pathname=="/admin/users" ||
  location.pathname==="/admin/vendors" ||
  location.pathname==="/admin/products" ||
  location.pathname=="/admin/bookings" ||
  location.pathname==="/choose-login" ||
  location.pathname==="/vendor-login" ||
  location.pathname==="/choose-signup";

  
  
  return (

  <>
  {!hideLayout &&   <TopHeader/>}
  {!hideLayout &&   <Navbar/>  }
  <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/dresses" element={<Dresses />} />
      <Route path="/houses" element={<House />} />
      <Route path="/electronics" element={<Electronics />}/>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking-success" element={<BookingSuccess/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/choose-login" element={<LoginSelection />}/>
      <Route path="/login" element={<LoginModel />} />
      
      <Route path="/signup" element={<SignUp />} />
      <Route path="/choose-signup" element={<SignupSelection />}/>
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/add-listing" element={<AddListing />} />
      <Route path="/edit-listing/:id" element={<AddListing />} />
      <Route path="/add-listing/:id" element={<AddListing />} />
      <Route path="/vendor-dashboard" element={<VendorDashboard />}/>
      <Route path="/user-dashboard" element={<UserDashboard />}/>
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/vendors" element={<Vendor />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/bookings" element={<Bookings />} />
      <Route path="/vendor-signup" element={<VendorSignup />}/>
      <Route path="/vendor-login" element={<VendorLogin />}/>
      


      
    </Routes>
    {!hideLayout &&     <Footer/>}
  
  
  </>
  );
}

export default App;