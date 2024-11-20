import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../../img/4685339.jpg';
import { FaStar } from 'react-icons/fa';

const Brands = () => {
  const [AllBrands, setAllBrands] = useState([]); // State to store brand data
  const [search, setSearch] = useState(""); // State for search input
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
      })
      .catch((error) => {
        console.error('Error fetching brands data:', error);
      });
  }, []);

  // Filter brands based on search term
  const filteredBrands = AllBrands.filter((brand) =>
    brand.brand_name?.toLowerCase().includes(search.toLowerCase()) // Use `brand_name` as per the data structure
  );

  // Handle "View Coupons" button click
  const handleViewCoupons = (brandId) => {
    navigate(`/brands/${brandId}`); // Redirect to brand details page
  };

  return (
    <div>
      <h1>Brands</h1>
      <img src={banner} alt="Banner" className="w-full" />
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
            <div key={brand.id} className="border p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <img src={brand.brand_logo} alt={brand.brand_name} className="w-16 h-16 object-contain" />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold">{brand.brand_name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className={`text-yellow-500 ${index < Math.round(brand.rating) ? "filled" : ""}`} />
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
