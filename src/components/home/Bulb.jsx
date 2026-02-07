import React, { useState } from 'react'
import { motion } from 'framer-motion'
import bulbImg from '../../assets/images/bulb.png'
import { fadeInUp, floatAnimation, viewport } from '../../utils/motion'

const Bulb = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <motion.div
          className="bg-[#87530C] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Text and Bulb Image */}
            <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col justify-between lg:min-h-[500px]">
              {/* Heading */}
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-md"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Design-driven lighting and acoustic systems
              </motion.h2>

              {/* Bulb Image */}
              <motion.div
                className="hidden lg:block absolute bottom-3 left-1/3 transform -translate-x-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 100 }}
              >
                <motion.img
                  src={bulbImg}
                  alt="Light bulb"
                  className="object-contain"
                  animate={floatAnimation}
                />
              </motion.div>
            </div>

            {/* Right Side - Contact Form */}
            <motion.div
              className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div className="max-w-md">
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                  variants={fadeInUp}
                >
                  Get in touch
                </motion.h3>
                <motion.p
                  className="text-white text-sm sm:text-base mb-6 opacity-90"
                  variants={fadeInUp}
                >
                  Get a free consultation with an electrical engineer.
                </motion.p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E48400]"
                    required
                    variants={inputVariants}
                  />
                  <motion.input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E48400]"
                    required
                    variants={inputVariants}
                  />
                  <motion.textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E48400] resize-none"
                    required
                    variants={inputVariants}
                  />
                  <motion.button
                    type="submit"
                    className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 hover:bg-gray-100"
                    variants={inputVariants}
                    whileHover={{ y: -3, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Submit
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Bulb
