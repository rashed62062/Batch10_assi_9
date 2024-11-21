import React, { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom"; // For navigation

const Myprofile = () => {
  const { user } = useContext(AuthContext); // Access user from context
  const [photoURL, setPhotoURL] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state
  const navigate = useNavigate(); // To navigate programmatically

  useEffect(() => {
    if (user) {
      setPhotoURL(user.photoURL); // Access the photoURL when user data is available
      setLoading(false); // Data is now loaded
    } else {
      setLoading(true); // User is not yet available, keep loading
    }
  }, [user]);

  // While loading, show a loading spinner or placeholder
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner-border animate-spin border-4 rounded-full border-blue-500 w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <div className="card-body text-center">
          {/* Profile Image or Default Icon */}
          <div className="mb-4">
            {photoURL ? (
              <img src={photoURL} alt="User Profile" className="rounded-full w-24 h-24 mx-auto" />
            ) : (
              <FaUserCircle size={100} className="text-gray-500 mx-auto" />
            )}
          </div>
          {/* User Name */}
          <h2 className="text-xl font-semibold mb-2">{user?.displayName || "No Name"}</h2>
          {/* User Email */}
          <p className="text-gray-500">{user?.email}</p>
          {/* Update Button */}
          <button 
            onClick={() => navigate('/myProfile/update')} 
            className="btn btn-primary mt-4"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
