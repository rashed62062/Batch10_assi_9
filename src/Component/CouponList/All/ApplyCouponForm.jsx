import React, { useState } from 'react';

const ApplyCouponForm = ({ availableCoupons }) => {
  const [inputCode, setInputCode] = useState('');
  const [message, setMessage] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const coupon = availableCoupons.find(c => c.code === inputCode.toUpperCase());

    if (coupon) {
      setDiscount(coupon.discount);
      setMessage(`Coupon applied! You get ${coupon.discount}% off.`);
    } else {
      setDiscount(0);
      setMessage('Invalid coupon code.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Apply Coupon</h2>
      <form onSubmit={handleApplyCoupon}>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 rounded-l-lg w-2/3"
            placeholder="Enter coupon code"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-r-lg"
          >
            Apply
          </button>
        </div>
      </form>
      {message && <p className="text-lg font-semibold">{message}</p>}
      {discount > 0 && <p className="text-xl text-green-600">Discount: {discount}%</p>}
    </div>
  );
};

export default ApplyCouponForm;
