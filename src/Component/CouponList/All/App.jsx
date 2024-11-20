import React from 'react';
import ApplyCouponForm from './ApplyCouponForm';
import CouponList from './CouponList';

const Coupons = [
  { id: 1, code: 'DISCOUNT10', discount: 10, expiry: '2024-12-31', category: 'Electronics' },
  { id: 2, code: 'SAVE20', discount: 20, expiry: '2024-11-30', category: 'Fashion' },
  { id: 3, code: 'WELCOME5', discount: 5, expiry: '2024-11-25', category: 'Books' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ApplyCouponForm availableCoupons={Coupons} />
      <CouponList />
    </div>
  );
}

export default App;
