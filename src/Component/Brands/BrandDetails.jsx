import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// Toast for showing success

const BrandDetails = () => {
  const { brandId } = useParams(); // Get the brand ID from the URL
 // Get the current user from AuthContext
  const {user} = useContext(AuthContext);
  const [brand, setBrand] = useState(null);
  const [coupons, setCoupons] = useState([]);
  const navigate = useNavigate();

  // Fetch brand details and coupons based on brandId
  useEffect(() => {
    fetch('/Product.json')
      .then((res) => res.json())
      .then((data) => {
        const foundBrand = data.find((item) => item.id === brandId);
        setBrand(foundBrand);
        setCoupons(foundBrand ? foundBrand.coupons : []); // Assuming coupons are in the brand data
      })
      .catch((error) => console.error('Error fetching brand details:', error));
  }, [brandId]);

  if (!brand) {
    return <p>Loading brand details...</p>;
  }

  // Handle "Use Now" button click
  const handleUseNow = (brandLink) => {
    window.open(brandLink, '_blank');
  };

  // Show success toast after copying the coupon code
  const handleCopySuccess = () => {
    toast.success('Coupon code copied successfully!');
  };

  return (
    <div className='card bg-base-100 w-96 shadow-xl mx-auto mt-12'>

        
      <h1>{brand.brand_name}</h1>
      <figure className="px-10 pt-10">
    <img
      src={brand.brand_logo} alt={brand.brand_name}

      className="rounded-xl" />
  </figure>
      <p>Rating: {brand.rating}</p>
      <p>{brand.description}</p>

      <h2>Available Coupons</h2>
      <div className="coupons-grid">
        {coupons.map((coupon) => (
          <div className="coupon-card" key={coupon.code}>
            <h3>{coupon.title}</h3>
            <p>{coupon.description}</p>
            <div className="coupon-actions">
              <CopyToClipboard text={coupon.code} onCopy={handleCopySuccess}>
                <button>Copy Code</button>
              </CopyToClipboard>
              <button onClick={() => handleUseNow(brand.brand_link)}>Use Now</button>
            </div>
          </div>
        ))}
      </div>

       {/* Toast notification container */}
    </div>
  );
};

export default BrandDetails;
