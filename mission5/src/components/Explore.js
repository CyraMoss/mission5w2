import React, { useState } from 'react';

export default function Explore(props) {
  const { laptopTypes } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (event) => {
    console.log(event.target.innerText);
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="explore">
        <div className="dropd">
          <div className="dropdtop" onClick={handleDropdownClick}>
            <h3 className="blue">
              <i className="fa-solid fa-arrow-down round"></i> EXPLORE
              CATEGORIES
            </h3>
            {dropdownOpen && (
              <div className="explore__dropdown-content">
                <ul className="menus">
                  <li className="none">
                    Computers and Office Tech
                    <ul>
                      <li className="none">Laptops</li>
                      {laptopTypes.map((type, index) => (
                        <li
                          className="none line"
                          key={index}
                          onClick={handleItemClick}
                        >
                          <span></span>
                          {type.laptopnamed}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="dropdbottom">
            <span className="explore__span">
              PCs, Laptops, Accessories & more
            </span>
          </div>
        </div>

        <div className="findbutton">
          <button className="button3">
            <i className="fa-solid fa-store"></i>Find A Store
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
