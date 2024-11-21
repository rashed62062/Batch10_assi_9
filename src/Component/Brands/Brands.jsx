import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../../img/4685339.jpg';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const Brands = () => {
  const [AllBrands, setAllBrands] = useState([]); // State to store brand data
  const [search, setSearch] = useState(""); // State for search input
  const [loading, setLoading] = useState(true); // Loading state for data fetching
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Product.json') // Adjusted fetch path if file is in the public folder
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched Data:', data); // Debugging fetched data
        setAllBrands(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching brands data:', error);
        setLoading(false); // Set loading to false in case of error
      });

    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  // Memoizing filtered brands based on search term
  const filteredBrands = useMemo(() => 
    AllBrands.filter((brand) =>
      brand.brand_name?.toLowerCase().includes(search.toLowerCase())
    ), [AllBrands, search]);

  // Handle "View Coupons" button click
  const handleViewCoupons = (brandId) => {
    navigate(`/brands/${brandId}`); // Redirect to brand details page
  };

  // Loading state
  if (loading) {
    return <p>Loading brands data...</p>;
  }

  return (
    <div>
  

  <div className="text-3xl flex flex-col items-center space-y-4">
  <h1 style={{ color: 'rgb(255, 99, 71)' }}>Discount PRO – Your gateway to exclusive deals and discounts.</h1>
  <h1 style={{ color: 'rgb(60, 179, 113)' }}>Coupon Haven – Unlock savings, shop smarter.</h1>
  <h1 style={{ color: 'rgb(65, 105, 225)' }}>BrandVault – Discover, save, and shop with ease.</h1>
</div>






      {/* <img src={banner} alt="Banner" className="w-full" /> */}
      <div className="my-4">
        <input
          type="text"
          placeholder="Search Brands"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand) => (
            <div 
              key={brand.id} 
              className="border p-4 rounded-lg shadow-lg"
              data-aos="fade-up" // AOS animation trigger
            >
              <div className="flex items-center">
                <img
                  src={brand.brand_logo || 'https://via.placeholder.com/100'}
                  alt={brand.brand_name}
                  className="w-16 h-16 object-contain"
                  loading="lazy" // Lazy loading for images
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold">{brand.brand_name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-yellow-500 ${index < brand.rating ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="my-2">{brand.description}</p>
              <button
                onClick={() => handleViewCoupons(brand.id)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Coupons
              </button>
            </div>
          ))
        ) : (
          <p>No brands found or data is loading...</p>
        )}
      </div>
    </div>
  );
};

export default Brands;
