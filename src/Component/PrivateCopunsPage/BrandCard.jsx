import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const BrandCard = ({ discount, brandName, brandLogo, totalCoupons, category, description, brandLink }) => {
  const [copied, setCopied] = useState(false);

  const handleUseNow = () => {
    window.open(brandLink, '_blank'); 
    toast.success('Coupon code copied successfully!');
  };

  const handleCopySuccess = () => {
    toast.success('Coupon code copied successfully!');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="border p-4 rounded shadow-md my-2 flex justify-between items-center">
      <div className="flex-shrink-0">
        <img
          src={brandLogo || "/default-image.jpg"} // Handle missing image
          alt={`${brandName} image`}
          className="w-32 h-24 object-cover rounded mt-2"
        />
      </div>

      <div className="flex-grow ml-4">
        <h1 className="font-bold text-2xl text-rose-800">Total Coupons: {totalCoupons || "N/A"}</h1>
        <h2 className="font-bold text-2xl">{brandName}</h2>
        {category && <p className="text-sm text-gray-600 text-1xl">Product: {category}</p>}
        <p className="text-lg">{description}</p>
      </div>

      <div className="flex flex-col items-center">
        {/* Copy Coupon Code Button */}
        <CopyToClipboard text={discount} onCopy={handleCopySuccess}>
          <button
                   onClick={handleUseNow}
          
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-2">
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </CopyToClipboard>

        {/* Use Now Button */}
    
      </div>
    </div>
  );
};

export default BrandCard;
