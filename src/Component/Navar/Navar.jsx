import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navar = () => {
  const { name, user, singOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    singOutUser()
      .then(() => {
        toast("Logged Out Successfully!");
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Error logging out:", error.message);
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/teams"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Teams
        </NavLink>
      </li>




      <li>
        <NavLink
          to="/brands"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
        Brands
        </NavLink>
      </li>
 
      {
      user && (
        <>
          <li>
            <NavLink
              to="/coupons"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Coupons
            </NavLink>
          </li>
        </>
      )
      
      }

      {
        user && <>
        
        <li>
        <NavLink
          to="/myProfile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Profile
        </NavLink>
      </li>
        
        </>
      }


    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">{name}</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <>
            <span>{user?.email}</span>
            <img
              src={user?.photoURL}
              alt={`${user?.displayName || "User"}'s Avatar`}
              className="w-8 h-8 rounded-full ml-2"
            />
            <a onClick={handleLogout} className="btn btn-primary ml-4">
              Sign Out
            </a>
          </>
        ) : (
          <>
            <NavLink className="btn btn-primary mr-2" to="/login">
              Login
            </NavLink>
            <NavLink className="btn btn-secondary" to="/register">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navar;
