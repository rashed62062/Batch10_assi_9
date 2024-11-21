import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BrandDetails = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ once: true }); // Animations run only once
  }, []);

  const { brandId } = useParams(); // Get the brand ID from the URL
  const { user } = useContext(AuthContext); // Get the current user from AuthContext
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

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgb(240, 240, 240), rgb(230, 245, 250))',
        minHeight: '100vh',
        padding: '2rem 0',
      }}
    >
      <section className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div data-aos="fade-left" data-aos-duration="1200">
            <h1
              className="text-5xl font-semibold text-gray-900"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {brand.brand_name}
            </h1>
            <p
              className="mt-2 text-lg text-gray-700"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {brand.description}
            </p>

            {/* Coupons */}
            <div className="mt-6" data-aos="fade-up" data-aos-delay="500">
              {coupons.map((coupon) => (
                <div className="coupon-card mt-4" key={coupon.code}>
                  <h3 className="font-semibold bg-slate-900">{coupon.title}</h3>
                  <p className="text-sm text-gray-600">{coupon.description}</p>
                  <p className="text-sm text-gray-600">{coupon.code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    // mm
  );
};

export default BrandDetails;
