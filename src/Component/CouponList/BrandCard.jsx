import React from 'react';

const BrandCard = ({ brandName, brandLogo, totalCoupons, category }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={brandLogo} alt={brandName} className="w-24 h-24 object-contain mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-center">{brandName}</h3>
      <p className="text-center text-gray-600">Category: {category}</p>
      <p className="text-center text-sm text-gray-500">Total Coupons: {totalCoupons}</p>
    </div>
  );
};

export default BrandCard;
