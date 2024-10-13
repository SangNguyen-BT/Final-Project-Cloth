import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StorePage from "./pages/StorePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product";
import PurchaseOrder from "./pages/PurchaseOrder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storepage" element={<StorePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:_productId" element={<Product />} />
        <Route path="/place-order" element={<PurchaseOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
