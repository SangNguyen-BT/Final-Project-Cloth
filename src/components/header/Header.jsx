import React from "react";
import "./header.css";
import Image from "/public/images/1.jpg";

const Header = () => {
  return (
    <div>
      <div className="header-nav">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <img src={Image} alt="Icon Shop" width={100} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
             
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Về Scorpio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Nam
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Nữ
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div
       
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active header-carosel" data-bs-interval={4000}>
            <img src="https://media.routine.vn/0x0/prod/media/banner-website-moi-09-jpg.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item header-carosel" data-bs-interval={4000}>
            <img src="https://media.routine.vn/0x0/prod/media/72df4e50-7a9a-4ab4-a4b5-1204ebd484f6.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item header-carosel"data-bs-interval={2000}>
            <img src="https://media.routine.vn/0x0/prod/media/882e5c12-4b5f-4fb0-ad2c-0c781d44ccc1.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
