import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroRight from '../../assets/images/heroRight.png'
import { fadeInUp, scaleIn, floatAnimation, popIn, viewport } from '../../utils/motion'

const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.2 }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 150, damping: 12 }
    }
  }

  return (
    <section className="bg-[#FAFAFA] py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="order-1 lg:order-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Badge */}
            <motion.div
              variants={badgeVariants}
              className="inline-flex items-center gap-2 border border-gray-800 rounded-full px-4 py-2 mb-6"
            >
              <motion.span
                className="w-2 h-2 bg-gray-800 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-sm text-gray-800 font-medium">
                Architectural lighting company
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "'Oxanium', sans-serif" }}
            >
              Architectural Lighting & <br /> Acoustic Solutions
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We create refined lighting and acoustic products that enhance spaces through thoughtful design, sustainable materials, and precision manufacturing
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(228,132,0,0.3)' }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/products"
                  className="block bg-[#E48400] hover:bg-[#d17900] text-white px-8 py-3.5 rounded-lg font-medium text-sm transition-colors duration-300"
                >
                  Explore Products
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/projects"
                  className="block bg-white hover:bg-gray-50 text-gray-800 px-8 py-3.5 rounded-lg font-medium text-sm border border-gray-300 transition-colors duration-300"
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <div className="order-1 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={scaleIn}
            >
              <motion.img
                src={heroRight}
                alt="Architectural Lighting Solutions"
                animate={floatAnimation}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
