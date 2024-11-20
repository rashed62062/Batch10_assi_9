import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
   const  navigate = useNavigate();
   const { signInUser,signInGoogleUser} = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInUser(email, password)
    .then(result =>{
      toast('Logged In Successfully!');
      console.log(result.user);
      event.target.reset();
      navigate('/');
    })
    .catch(error =>{
      toast('Error: ' + error.message)
      console.log("Failed to sign......", error);
    })
  };

 const HandleSignInGoogleUser = ()=>{
  signInGoogleUser()
   .then(result => {

      console.log('User has been signed in with Google' , result.user);
      toast('Logged In Successfully with Google!');
      navigate('/')
    })
    .catch(error => {
      console.error('Error signing in with Google:', error.message);
      toast.error(error.message);
    });
 }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
            <p className="ml-4 mb-4">
              New to this website? Please{' '}
              <NavLink to="/register"  className="link link-primary">Register</NavLink>
            </p>
        
          </form>
          <button  onClick={HandleSignInGoogleUser} className='btn bg-stone-300 btn-ghost'>Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
