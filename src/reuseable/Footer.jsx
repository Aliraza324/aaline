import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import logo from '../assets/images/footerLogo.png'
const Footer = () => {
  return (
    <footer className="relative bg-white pt-12 md:pt-16">
      {/* Main Footer with overlapping CTA */}
      <div className="bg-[#1F1F1F] text-white pt-32 md:pt-40 pb-12 md:pb-16 relative ">
        {/* CTA Section - Positioned to overlap */}
        <div className="absolute max-w-5xl mx-auto -top-24 md:-top-28 left-0 right-0 z-10 px-4 sm:px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="bg-[#87530C] rounded-3xl py-8 md:py-12 px-6 text-center shadow-2xl">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Let's Create Better Spaces Together
              </h2>
              <p className="text-white text-sm sm:text-base mb-6 opacity-90">
                Get in touch with our team to discuss your next project.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 - Company Info */}
            <div>
             <img src={logo} alt="" className='h-[32px] mb-4'/>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                Our acoustic lighting solutions combine illumination and sound control into seamless architectural elements—enhancing both visual and acoustic comfort.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <Link
                  to="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#E48400] hover:bg-[#d17900] rounded-md flex items-center justify-center transition-colors duration-300"
                >
                  <FaFacebookF className="text-black text-lg" />
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#E48400] hover:bg-[#d17900] rounded-md flex items-center justify-center transition-colors duration-300"
                >
                  <FaInstagram className="text-black text-lg" />
                </Link>
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#E48400] hover:bg-[#d17900] rounded-md flex items-center justify-center transition-colors duration-300"
                >
                  <FaTwitter className="text-black text-lg" />
                </Link>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4
                className="text-xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-[#E48400] transition-colors duration-300 text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-[#E48400] transition-colors duration-300 text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-[#E48400] transition-colors duration-300 text-sm"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sustainability"
                    className="text-gray-400 hover:text-[#E48400] transition-colors duration-300 text-sm"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-[#E48400] transition-colors duration-300 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-[#E48400] transition-colors duration-300 text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Contact Us */}
            <div>
              <h4
                className="text-xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Contact Us
              </h4>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MdLocationOn className="text-[#E48400] text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Address</p>
                    <p className="text-gray-400 text-sm">
                      13 Division st, New York, 16004
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <MdPhone className="text-[#E48400] text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Phone:</p>
                    <p className="text-gray-400 text-sm">+1 800 777 000</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <MdEmail className="text-[#E48400] text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Email:</p>
                    <p className="text-gray-400 text-sm">support@wolt.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-12 pt-6">
            <p className="text-gray-400 text-sm text-center">
              <span className="text-[#E48400] font-semibold">Aaline</span> © All Rights Reserved - 2023 -{' '}
              <span className="text-[#E48400] font-semibold">Purchase</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer