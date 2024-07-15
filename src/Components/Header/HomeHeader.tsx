import { Logo } from "../../Assets/Index";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type HomeHeaderProps = {
  scrollToCourses: any;
  scrollToAbout: any;
  scrollToTeam: any;
};

const HomeHeader = ({
  scrollToCourses,
  scrollToAbout,
  scrollToTeam,
}: HomeHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="" className="flex items-center gap-2">
              <img src={Logo} alt="logo" className="w-10 h-10" />
              <h2 className="md:text-3xl text-lmsPrimary font-bold tracking-widest">
                Baselink Academy
              </h2>
            </Link>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              to="/"
              className="text-base font-semibold text-lmsPrimary transition-all duration-200 hover:text-opacity-80"
            >
              Home
            </Link>
            <Link
              to="#courses"
              onClick={(e) => {
                e.preventDefault();
                scrollToCourses();
              }}
              className="text-base font-semibold text-lmsPrimary transition-all duration-200 hover:text-opacity-80"
            >
              Courses
            </Link>
            <Link
              to="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
              className="text-base font-semibold text-lmsPrimary transition-all duration-200 hover:text-opacity-80"
            >
              About
            </Link>
            <Link
              to="#team"
              onClick={(e) => {
                e.preventDefault();
                scrollToTeam();
              }}
              className="text-base font-semibold text-lmsPrimary transition-all duration-200 hover:text-opacity-80"
            >
              Team
            </Link>
            <div className="w-px h-5 bg-black/20"></div>
            <Link
              to="/auth/login"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-lmsPrimary hover:bg-lmsPrimary rounded-full hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
            >
              Log In
            </Link>
            <Link
              to="/auth/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-lmsPrimary hover:bg-lmsPrimary rounded-full hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-semibold text-lmsPrimary transition-all duration-200 hover:text-opacity-80"
            >
              Home
            </Link>
            <Link
              to="#courses"
              onClick={(e) => {
                e.preventDefault();
                scrollToCourses();
              }}
              className="block px-3 py-2 text-base font-semibold text-lmsPrimary transition-all duration-200 hover:text-opacity-80"
            >
              Courses
            </Link>
            <Link
              to="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
              className="block px-3 py-2 text-base font-semibold text-lmsPrimary transition-all duration-200 hover:text-opacity-80"
            >
              About
            </Link>
            <Link
              to="#team"
              onClick={(e) => {
                e.preventDefault();
                scrollToTeam();
              }}
              className="block px-3 py-2 text-base font-semibold text-lmsPrimary transition-all duration-200 hover:text-opacity-80"
            >
              Team
            </Link>
            <div className="flex gap-4">
              <Link
                to="/auth/login"
                className="block px-3 py-2 text-base font-semibold text-black border-2 border-lmsPrimary hover:bg-lmsPrimary rounded-full hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
              >
                Log In
              </Link>
              <Link
                to="/auth/signup"
                className="block px-3 py-2 text-base font-semibold text-black border-2 border-lmsPrimary hover:bg-lmsPrimary rounded-full hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
