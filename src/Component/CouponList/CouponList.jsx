import React, { useState } from 'react';

// The Coupon component now correctly handles the props passed into it
const Coupon = ({ code, discount, expiry, category, brandName, brandLogo, totalCoupons }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
  };

  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{category} - {discount}% Off</h3>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
      <p className="text-sm mt-2">Code: <span className="font-mono">{code}</span></p>
      <p className="text-sm text-gray-500">Expires: {expiry}</p>
      <p className="text-sm text-gray-500">Brand: {brandName}</p>
      <img src={brandLogo} alt={brandName} className="w-16 h-16 mt-2" />
      <p className="text-sm text-gray-500">Total Coupons: {totalCoupons}</p>
    </div>
  );
};

const CouponList = () => {
  const coupons = [
    { 
      id: 1, 
      code: 'DISCOUNT10', 
      discount: 10, 
      expiry: '2024-12-31', 
      category: 'Electronics', 
      brandName: 'Brand A', 
      brandLogo: 'https://via.placeholder.com/50', 
      totalCoupons: 50 
    },
    { 
      id: 2, 
      code: 'SAVE20', 
      discount: 20, 
      expiry: '2024-11-30', 
      category: 'Fashion', 
      brandName: 'Brand B', 
      brandLogo: 'https://via.placeholder.com/50', 
      totalCoupons: 100 
    },
    { 
      id: 3, 
      code: 'WELCOME5', 
      discount: 5, 
      expiry: '2024-11-25', 
      category: 'Books', 
      brandName: 'Brand C', 
      brandLogo: 'https://via.placeholder.com/50', 
      totalCoupons: 200 
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Available Coupons</h2>
      {coupons.map(coupon => (
        <Coupon key={coupon.id} {...coupon} />
      ))}
    </div>
  );
};

export default CouponList;
