import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider'; // Assuming you have AuthContext for user info
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const { updateUserInfo, user } = useContext(AuthContext); // Function to update user info
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const handleSubmit = (e) => {
    toast.success('Successfully updated the profile');
    e.preventDefault();
    // Call update function (Assume it's available in context)
    updateUserInfo(name, photoURL)
      .then(() => {
        navigate('/myProfile'); // Navigate back to MyProfile page
      })
      .catch((error) => {
        console.error('Failed to update profile:', error);
      });
  };

  return (
    <div className="hero min-h-screen" data-aos="fade-up">
      <div className="hero-content text-center" data-aos="zoom-in">
        <h1 className="text-5xl font-bold">Update Profile</h1>
        <form
          onSubmit={handleSubmit}
          className="card card-body w-full max-w-sm mt-8"
          data-aos="fade-up"
        >
          {/* Name Input */}
          <div className="form-control" data-aos="fade-right">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control mt-4" data-aos="fade-left">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Current Photo Preview */}
          <div className="form-control mt-4" data-aos="zoom-in">
            <label className="label">
              <span className="label-text">Current Photo</span>
            </label>
            <div className="photo-preview flex items-center">
              <img
                src={user?.photoURL || 'https://via.placeholder.com/150'}
                alt={`${user?.displayName || 'User'}'s Avatar`}
                
                className="w-12 h-12 rounded-full mr-4"
                
              />
              <span>{user?.email || 'No Email Found'}</span>
              <span>{user?.displayName || 'No Name Found'}</span>
            </div>
          </div>

          {/* Update Button */}
          <div className="form-control mt-6" data-aos="flip-up">
            <button type="submit" className="btn btn-primary">
              Update Information
            </button>

            
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
