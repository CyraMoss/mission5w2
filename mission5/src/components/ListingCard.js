import React from 'react';

export default function ListingCard({ laptop }) {
  const { img, laptopnamed, description } = laptop;

  return (
    <div className="listing-card">
      <img src={img} alt={laptopnamed} className="round-border" />
      <h3>{laptopnamed}</h3>
      <p>{description}</p>
    </div>
  );
}
