import React from 'react';

export default function Explore() {
  return (
    <div>
      <div className="explore">
        <div className="dropd">
          <div className="dropdtop">
            <h3 className="blue">
              <i class="fa-solid fa-arrow-down round"></i> EXPLORE CATEGORIES
            </h3>
          </div>
          <div className="dropdbottom">
            <span className="explorespan">
              PCs, Laptops, Accessories & more
            </span>
          </div>
        </div>
        <div className="findbutton">
          <button className="button3">
            <i class="fa-solid fa-store"></i>Find A Store
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
