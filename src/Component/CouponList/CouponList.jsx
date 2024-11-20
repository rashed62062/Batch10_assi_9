import React, { useState } from 'react';

const Coupon = ({ couponCode, discount, expiryDate, category }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
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
      <p className="text-sm mt-2">Code: <span className="font-mono">{couponCode}</span></p>
      <p className="text-sm text-gray-500">Expires: {expiryDate}</p>
    </div>
  );
};

const CouponList = ({ coupons }) => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Available Coupons</h2>
      {coupons.map((coupon, index) => (
        <Coupon
          key={index}
          couponCode={coupon.coupon_code}
          discount={coupon.discount}
          expiryDate={coupon.expiry_date}
          category={coupon.category}
        />
      ))}
    </div>
  );
};

export default CouponList;
