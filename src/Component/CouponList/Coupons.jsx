import React, { useEffect, useState } from 'react';
import BrandCard from './BrandCard'; // Import the BrandCard component


const Coupons = () => {
  const [brands, setBrands] = useState([]); // State to store brand data

  useEffect(() => {
    // Fetch data from Product.json
    fetch('./Product.json')
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => {
        console.log(data); // Log the fetched data (optional)
        setBrands(data); // Set the data to state
      })
      .catch((error) => {
        console.error("Error fetching brands data:", error); // Handle errors
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Filter brands where isSaleOn is true
  const brandsOnSale = brands.filter(brand => brand.isSaleOn);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 p-6">
      <h1 className='text-4xl text-teal-300'>Today total coupons</h1>
      {brandsOnSale.length === 0 ? (
        <p>No brands are on sale right now.</p>
      ) : (
        brandsOnSale.map((brand) => (
          
          <BrandCard
            key={brand._id}
            brandName={brand.brand_name}
            brandLogo={brand.brand_logo}
            totalCoupons={brand.coupons.length}
            category={brand.category}
            description={brand.coupons[0].description}
            discount={brand.coupons[0].coupon_code}
          />
        ))
      )}
    </div>
  );
};

export default Coupons;
