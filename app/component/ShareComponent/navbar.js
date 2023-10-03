"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <div className="flex-shrink-0">
              <a href="#" className="text-white">
                Logo
              </a>
            </div> */}
            <div className="hidden md:flex space-x-4">
              <Link
                href="/"
                className="text-gray-300  hover:text-white  py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <div
                className="relative group"
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >
                <button
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  Dropdown
                </button>
                {isMenuOpen && (
                  <div className="absolute mt-0 space-y-2 left-0 w-35 bg-white shadow-lg  ring-1 ring-black ring-opacity-5">
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 3
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                className="px-4 py-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {isDrawerOpen ? (
                  <>
                    <h1>asfasf</h1>
                  </>
                ) : (
                  <h1>asfasf</h1>
                )}
              </button>
            </div>
          </div>
        </div>
        {isDrawerOpen && (
          <div className="fixed top-50 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 transform translate-x-0 md:translate-x-full">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleDrawer}
                className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                fafas
              </button>
            </div>
            <div>
              <div className="space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <div
                  className="relative group"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}
                >
                  <button
                    type="button"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    Dropdown
                  </button>
                  {isMenuOpen && (
                    <div className="absolute mt-0 space-y-2 left-0 w-32 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 3
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
