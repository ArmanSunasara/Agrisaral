import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-yellow-200 transition-all"
        >
          AgriSaral 🌱
        </Link>
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/upload" className="hover:text-yellow-300 transition">
              Upload
            </Link>
          </li>
          <li>
            <Link to="/diagnosis" className="hover:text-yellow-300 transition">
              Diagnosis
            </Link>
          </li>
          <li>
            <Link to="/stories" className="hover:text-yellow-300 transition">
              Farmer Stories
            </Link>
          </li>
          <li>
            <Link
              to="/disease-info"
              className="hover:text-yellow-300 transition"
            >
              Disease Info
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-white text-green-700 px-4 py-1 rounded hover:bg-yellow-200 transition-all"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-green-700 px-4 py-1 rounded hover:bg-yellow-200 transition-all"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-400 text-green-900 px-4 py-1 rounded hover:bg-yellow-500 transition-all"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
