import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'
import { CircleUserRound } from 'lucide-react'
import logo from '../assets/images/logo.png'
import { headerAnimation, mobileMenu, mobileMenuItem } from '../utils/motion'

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
    <motion.header
      className="bg-white border-b border-gray-200"
      initial="hidden"
      animate="visible"
      variants={headerAnimation}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className="flex items-center">
              <img src={logo} alt="aaline" className="h-8 sm:h-10" />
            </Link>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
              >
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E48400] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Side Icons & Button */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              className="p-2 hover:bg-gray-100 border border-gray-300 rounded-md cursor-pointer transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CircleUserRound className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </motion.button>

            <motion.button
              className="p-2 hover:bg-gray-100 border border-gray-300 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSearch className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </motion.button>

            <motion.div
              whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(228,132,0,0.3)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="hidden sm:block bg-[#E48400] text-white px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden p-2 hover:bg-gray-100 border border-gray-300 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="w-5 h-5 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="w-5 h-5 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenu}
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={mobileMenuItem}>
                  <Link
                    to={item.path}
                    className="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium text-sm py-3 px-2 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileMenuItem}>
                <Link
                  to="/contact"
                  className="block sm:hidden bg-[#E48400] text-white text-center px-6 py-2.5 rounded-lg font-medium text-sm transition-colors mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
