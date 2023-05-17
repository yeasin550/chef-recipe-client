import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import recipe from '../../assets/recipe-logo.png'
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  const handleLogOut = () => {
    logOut()
    .then(result => {})
    .catch(error => console.log(error))
  }
  return (
    <nav className="bg-gray-100  font-bold">
      <div className="md:mx-20 lg:mx-36">
        <div style={{ height: "60px" }} className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "default"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "default"
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "default"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "default"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black"
            >
              <img className="w-40 h-24" src={recipe} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-end mb-2 flex items-center">
            <div className="avatar placeholder mt-3 mr-2">
              {user && (
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <img
                    className="cursor-pointer"
                    title={user.displayName}
                    src={user?.photoURL}
                  />
                </div>
              )}
            </div>
            {user ? (
              <button
                onClick={handleLogOut}
                className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-orange-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500"
              >
                LogOut
              </button>
            ) : (
              <Link to="/login">
                <button className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;