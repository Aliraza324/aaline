import React from 'react'
import { motion } from 'framer-motion'
import img from '../../assets/images/img.png'
import rightFirstIcon from '../../assets/images/rightFirstIcon.png'
import rightSecondImg from '../../assets/images/rightSecondImg.png'
import rightThirdIcon from '../../assets/images/rightThirdIcon.png'
import {
  fadeInUp,
  imageReveal,
  sectionBadge,
  viewport
} from '../../utils/motion'

const Sustainability = () => {
  const features = [
    {
      icon: rightFirstIcon,
      title: 'B-Corp Certified'
    },
    {
      icon: rightSecondImg,
      title: 'Eco-friendly materials'
    },
    {
      icon: rightThirdIcon,
      title: 'Low-impact manufacturing'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <section className="w-full px-4 py-12 md:py-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={imageReveal}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <motion.img
                src={img}
                alt="Sustainable manufacturing facility"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block relative mb-2"
                variants={sectionBadge}
              >
                <h3
                  className="text-xl font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  SUSTAINABILITY
                </h3>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-3 bg-[#f57c00] z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Designed with Responsibility
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-base md:text-lg leading-relaxed"
              >
                Sustainability is at the core of everything we do—from material
                selection to manufacturing processes.
              </motion.p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={featureVariants}
                >
                  <motion.div
                    className="flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="object-contain"
                    />
                  </motion.div>
                  <p className="text-gray-900 text-base md:text-lg font-medium">
                    {feature.title}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="mt-8 bg-[#f57c00] text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 hover:bg-[#e66b00]"
              variants={fadeInUp}
              whileHover={{ y: -4, boxShadow: '0 15px 35px rgba(245,124,0,0.3)' }}
              whileTap={{ scale: 0.97 }}
            >
              Learn About Our Sustainability
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sustainability
