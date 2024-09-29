import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StorePage from "./pages/StorePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product";
import PurchaseOrder from "./pages/PurchaseOrder";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import CartTab from "./components/cartTab/CartTab";

function showCarttab() {
  const body = document.querySelector(".header-page");
  body.classList.toggle("showCart");
}

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar showCarttab={showCarttab} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storepage" element={<StorePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/place-order" element={<PurchaseOrder />} />
      </Routes>
      <Footer />
      <CartTab showCarttab={showCarttab} />
    </div>
  );
}

export default App;
