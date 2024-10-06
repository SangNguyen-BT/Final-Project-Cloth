import React, { useContext, useState } from "react";
import "./css/navbar.css";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import CartTab from "./CartTab";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, showCarttab, totalItemInCart } =
    useContext(ShopContext);

  return (
    <div className="navbar-content header-page bg-white">
      <Link to={"/"}>
        <img src="./images/3.jpg" className="w-32" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/storepage" className="flex flex-col items-center gap-1">
          <p>STORE</p>
          <hr className="bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT US</p>
          <hr className="bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT US</p>
          <hr className="bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
          onClick={() => setShowSearch(true)}
        />

        <span className="btn-shoppingcart" onClick={showCarttab}>
          <i className="fa fa-shopping-bag header-icon" />
          <p className="shopping-count">{totalItemInCart()}</p>
        </span>
        <CartTab />

        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => {
            setVisible(true);
          }}
          alt=""
        />
      </div>
      {/* Sidebar menu responsive small screens */}
      <div
        className={`side-bar bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            className="py-2 pl-6 border"
            to="/"
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            to="/storepage"
            onClick={() => setVisible(false)}
          >
            STORE
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            to="/about"
            onClick={() => setVisible(false)}
          >
            ABOUT US
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            to="/contact"
            onClick={() => setVisible(false)}
          >
            CONTACT US
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
