import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const BrandCard = ({ discount, brandName, brandLogo, totalCoupons, category, description }) => {

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ once: true, duration: 1200 }); // 'once: true' makes animations run only once
  }, []);

  return (
    <div 
      className="border p-4 rounded shadow-md my-2 flex justify-between items-center"
      data-aos="zoom-in-up"  // Modern zoom-in-up animation
      data-aos-duration="1000"  // Set animation duration
    >
      <div 
        className="flex-shrink-0"
        data-aos="flip-left"  // Flip the image from the left for a modern effect
        data-aos-duration="1200"
      >
        <img
          src={brandLogo || '/default-image.jpg'} // Handle missing image
          alt={`${brandName} logo`}
          className="w-32 h-24 object-cover rounded mt-2"
        />
      </div>

      <div className="flex-grow ml-4">
        <h1 
          className="font-bold text-2xl text-rose-800"
          data-aos="fade-up"  // Fade up animation for the title
        >
          Total Coupons: {totalCoupons || 'N/A'}
        </h1>
        <h2 
          className="font-bold text-2xl"
          data-aos="fade-left"  // Fade and slide-in effect from the left
        >
          {brandName}
        </h2>
        {category && <p className="text-sm text-gray-600 text-1xl">{category}</p>}
        <p className="text-lg" data-aos="zoom-in" data-aos-duration="1000">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BrandCard;
