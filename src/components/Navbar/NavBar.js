import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Logo from '../assets/navLogo.jpeg'
import 'jquery/dist/jquery.slim.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Cookies from 'js-cookie';
import 'flowbite';

function Navbar() {
  // State to track if menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // State to track if navbar is scrolling
  const [isScrolled, setIsScrolled] = useState(false);

  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('profile_id'));

  // Function to check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check login status
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!Cookies.get('profile_id'));
    };

    checkLoginStatus();
    const interval = setInterval(checkLoginStatus, 1000); // Check every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-10" alt="Logo" />
        </a>

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 font-medium font-georgia text-xl rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 rtl:space-x-reverse">
            <li>
              <a
                href="#about"
                className="block py-2 px-3 md:p-0 text-white no-underline hover:bg-charcoal hover:no-underline rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 md:p-0 text-white no-underline hover:bg-charcoal hover:no-underline rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#work-gallery"
                className="block py-2 px-3 md:p-0 text-white no-underline hover:bg-charcoal hover:no-underline rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              >
                Work Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 md:p-0 text-white no-underline hover:bg-charcoal hover:no-underline rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  );
}

export default Navbar;