import { useState } from 'react'
import { Link } from 'react-router-dom'
import {  FiSearch, FiMenu, FiX } from 'react-icons/fi'
import {CircleUserRound } from "lucide-react";
import logo from '../assets/images/logo.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Acoustic Solutions', path: '/acoustic-solutions' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contacts', path: '/contacts' },
  ]

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="aaline" className="h-8 sm:h-10" />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons & Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* User Icon */}
            <button className="p-2 hover:bg-gray-100 border border-gray-300 rounded-md cursor-pointer transition-colors">
              <CircleUserRound className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>

            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-100 border border-gray-300 rounded-md transition-colors">
              <FiSearch className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>

            {/* Get In Touch Button - Hidden on small screens */}
            <Link
              to="/contact"
              className="hidden sm:block bg-[#E48400] text-white px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"
            >
              Get In Touch
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 border border-gray-300 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-5 h-5 text-gray-700" />
              ) : (
                <FiMenu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium text-sm py-3 px-2 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Get In Touch Button */}
            <Link
              to="/contact"
              className="block sm:hidden bg-[#E48400] text-white text-center px-6 py-2.5 rounded-lg font-medium text-sm transition-colors mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header