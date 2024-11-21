import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Theams = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ once: true }); // Animations run only once
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, rgb(240, 240, 240), rgb(230, 245, 250))',
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
              src="https://via.placeholder.com/400"
              alt="Amino Acid Cleansing Mousse"
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div data-aos="fade-left" data-aos-duration="1200">
            <h1
              className="text-3xl font-semibold text-gray-900"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Amino Acid Ultra-Gentle Cleansing Mousse
            </h1>
            <p
              className="mt-2 text-lg text-gray-700"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Gentle, deep-cleansing mousse with micro amino acids, designed to
              hydrate and cleanse without stripping moisture.
            </p>

            {/* Price and Size Options */}
            <div className="mt-4" data-aos="zoom-in-up" data-aos-delay="400">
              <span className="text-2xl font-bold text-green-600">$5.83</span>
              <p className="text-sm text-gray-500">Size options:</p>
              <div className="flex space-x-4 mt-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-blue-500">
                  100 ml
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-blue-500">
                  80 ml
                </button>
              </div>
            </div>

            {/* Description */}
            <div
              className="mt-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <h3 className="text-xl font-semibold text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600">
                A lightweight face foam with micro amino acids that deeply
                cleanses dirt and pores. The content of 5 types of Ceramide,
                Amino Acid, and White Truffle keeps the skin moisturized and does
                not feel tight. Produces a smooth and soft foam with natural
                ingredients that are safe for skin barrier health.
              </p>
            </div>

            {/* How to Use */}
            <div
              className="mt-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <h3 className="text-xl font-semibold text-gray-900">How to Use</h3>
              <p className="mt-2 text-gray-600">
                Take 1 pump of product, rub smoothly and evenly over the face.
                Rinse with water until clean.
              </p>
            </div>

            {/* Buy Now Button */}
            <div
              className="mt-6 flex items-center"
              data-aos="flip-up"
              data-aos-duration="800"
            >
              <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div
          className="mt-12 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <h3 className="text-lg font-semibold text-gray-800">Important Points</h3>
          <p className="mt-2 text-gray-600">
            Contains 5 types of Ceramide to repair and calm skin barrier.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Theams;
