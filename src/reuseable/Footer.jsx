import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import logo from '../assets/images/footerLogo.png'
import { viewport } from '../utils/motion'

const Footer = () => {
  const columnVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        type: 'spring',
        stiffness: 200,
        damping: 12
      }
    })
  }

  return (
    <footer className="relative bg-white pt-12 md:pt-16">
      {/* Main Footer with overlapping CTA */}
      <div className="bg-[#1F1F1F] text-white pt-32 md:pt-40 pb-12 md:pb-16 relative ">
        {/* CTA Section - Positioned to overlap */}
        <div className="absolute max-w-5xl mx-auto -top-24 md:-top-28 left-0 right-0 z-10 px-4 sm:px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="bg-[#87530C] rounded-3xl py-8 md:py-12 px-6 text-center shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Let's Create Better Spaces Together
              </motion.h2>
              <motion.p
                className="text-white text-sm sm:text-base mb-6 opacity-90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Get in touch with our team to discuss your next project.
              </motion.p>
              <motion.div
                whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 - Company Info */}
            <motion.div
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.img variants={itemVariants} src={logo} alt="" className='h-[32px] mb-4'/>
              <motion.p variants={itemVariants} className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                Our acoustic lighting solutions combine illumination and sound control into seamless architectural elements—enhancing both visual and acoustic comfort.
              </motion.p>
              {/* Social Media Icons */}
              <div className="flex gap-3">
                {[
                  { icon: FaFacebookF, url: 'https://facebook.com' },
                  { icon: FaInstagram, url: 'https://instagram.com' },
                  { icon: FaTwitter, url: 'https://twitter.com' }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={socialVariants}
                    whileHover={{ y: -4, boxShadow: '0 6px 20px rgba(228,132,0,0.4)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      to={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#E48400] hover:bg-[#d17900] rounded-md flex items-center justify-center transition-colors duration-300"
                    >
                      <social.icon className="text-black text-lg" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Column 2 - Quick Links */}
            <motion.div
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.h4
                variants={itemVariants}
                className="text-xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Quick Links
              </motion.h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Products', path: '/products' },
                  { name: 'Sustainability', path: '/sustainability' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((link) => (
                  <motion.li key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#E48400] transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Contact Us */}
            <motion.div
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.h4
                variants={itemVariants}
                className="text-xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Contact Us
              </motion.h4>
              <div className="space-y-4">
                {[
                  { Icon: MdLocationOn, label: 'Address', value: '13 Division st, New York, 16004' },
                  { Icon: MdPhone, label: 'Phone:', value: '+1 800 777 000' },
                  { Icon: MdEmail, label: 'Email:', value: 'support@wolt.com' }
                ].map((contact, index) => (
                  <motion.div key={index} className="flex items-start gap-3" variants={itemVariants}>
                    <contact.Icon className="text-[#E48400] text-xl flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{contact.label}</p>
                      <p className="text-gray-400 text-sm">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div
            className="border-t border-gray-700 mt-12 pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-400 text-sm text-center">
              <span className="text-[#E48400] font-semibold">Aaline</span> © All Rights Reserved - 2023 -{' '}
              <span className="text-[#E48400] font-semibold">Purchase</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
