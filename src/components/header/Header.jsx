import React from "react";
import "./header.css";
import Image from "/public/images/2.png";
import CartTab from "../cartTab/CartTab";
import SearchTab from "../searchTab/SearchTab";

function showCarttab() {
  const body = document.querySelector(".header-page")
  body.classList.toggle("showCart")
}

function showSearchTab() {
  const body = document.querySelector(".header-page")
  body.classList.toggle("showSearch")
}

const Header = () => {
  return (
    <div className="header-page">
      <div className="header-nav">
        <nav className="navbar sticky-top navbar-expand-xl ">
          <div className="container-fluid">
            <img src={Image} alt="Icon Shop" width={130} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon navbar-dark" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Scorpio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Man
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Woman
                  </a>
                </li>
              </ul>
              {/* Off canvas */}
              <div className="icon">
                
                <i className="fa fa-search header-icon" onClick={showSearchTab}/>
                <SearchTab showSearchTab={showSearchTab}/>
                
                
                <span className="btn-shoppingcart" onClick={showCarttab}>
                  <i className="fa fa-shopping-bag header-icon" />
                  <p className="shopping-count">0</p>
                </span>
                <CartTab showCarttab={showCarttab}/>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active header-carosel"
            data-bs-interval="4000"
          >
            <img
              src="https://media.routine.vn/0x0/prod/media/banner-website-moi-09-jpg.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item header-carosel" data-bs-interval="2000">
            <img
              src="https://media.routine.vn/1920x0/prod/media/d-active-wear-nam-jpg.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item header-carosel">
            <img
              src="https://media.routine.vn/0x0/prod/media/882e5c12-4b5f-4fb0-ad2c-0c781d44ccc1.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
