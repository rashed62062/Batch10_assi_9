import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firbase_init';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Password reset email sent. Please check your inbox.');
        setTimeout(() => navigate('/login'), 5000); // Redirect to login after a delay
      })
      .catch((error) => {
        setMessage('Error: ' + error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={(e) => e.preventDefault()} className="card-body">
            <h2 className="text-3xl font-bold">Forgot Password</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            {message && <p className="mt-4 text-center">{message}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleResetPassword}>
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
