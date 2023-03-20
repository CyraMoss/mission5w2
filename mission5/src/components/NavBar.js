import React, { useState } from 'react';

export default function NavBar() {
  const [activeItem, setActiveItem] = useState(null);

  function handleDropdownClick(item) {
    if (activeItem === item) {
      // If the clicked item is already active, deactivate it
      setActiveItem(null);
    } else {
      // Otherwise, activate the clicked item
      setActiveItem(item);
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="./images/logo.svg" alt="pb logo" />
      </div>
      <div className="navbar__search">
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Search PB Tech"
          />
          <button className="search-button" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="navbar__dropdown">
        <div
          className={`navbar__dropdown-item ${
            activeItem === 'products' ? 'active' : ''
          }`}
          onClick={() => handleDropdownClick('products')}
        >
          <h3>Products </h3>
          <i className="fas fa-angle-down"></i>
          <div className="navbar__dropdown-content">
            <a href="#">-Computers & Laptops</a>
            <a href="#">-PC Peripherals & Accessories</a>
            <a href="#">-PC Parts</a>
            <a href="#">-Software</a>
            <a href="#">-Printing & Office</a>
            <a href="#">-Phones & Accessories</a>
            <a href="#">-TV&AV</a>
            <a href="#">-Headphones & Audio</a>
          </div>
        </div>

        <div
          className={`navbar__dropdown-item ${
            activeItem === 'brands' ? 'active' : ''
          }`}
          onClick={() => handleDropdownClick('brands')}
        >
          <h3>Brands</h3> <i className="fas fa-angle-down"></i>
          <div className="navbar__dropdown-content">
            <a href="#">-100 Percent</a>
            <a href="#">-2degrees</a>
            <a href="#">-3D Printing System</a>
            <a href="#">-3M</a>
            <a href="#">-3SIXT</a>
            <a href="#">-8Ware</a>
            <a href="#">-8x8</a>
            <a href="#">-AAEON</a>
            <a href="#">-Academy</a>
            <a href="#">-Access4</a>
          </div>
        </div>
        <div
          className={`navbar__dropdown-item ${
            activeItem === 'deals' ? 'active' : ''
          }`}
          onClick={() => handleDropdownClick('deals')}
        >
          <h3>Deals</h3> <i className="fas fa-angle-down"></i>
          <div className="navbar__dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        </div>

        <div
          className={`navbar__dropdown-item ${
            activeItem === 'services' ? 'active' : ''
          }`}
          onClick={() => handleDropdownClick('deals')}
        >
          <h3>Services</h3> <i className="fas fa-angle-down"></i>
          <div className="navbar__dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        </div>
      </div>
      <div className="navbar__buttons">
        <button className="navbar__button-login button1">
          <i className="fas fa-user"></i> Login
        </button>
        <button className="navbar__button-cart button3">
          <i className="fas fa-shopping-cart"></i> Cart (0)
        </button>
      </div>
    </nav>
  );
}
