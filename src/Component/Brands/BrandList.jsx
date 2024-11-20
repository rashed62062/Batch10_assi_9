import React from 'react';

const BrandList = ({ brands }) => {
  return (
    <div>
      <h2> {brands.length}Brand List</h2>
      <ul>
        {brands.map((brand, index) => (
          <li key={index}>{brand.name}</li> // Assuming the brand object has a 'name' property
        ))}
      </ul>
    </div>
  );
};

export default BrandList;
