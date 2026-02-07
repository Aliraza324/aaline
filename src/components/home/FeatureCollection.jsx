import React from 'react'
import { motion } from 'framer-motion'
import featureOneImg from '../../assets/images/featureOneImg.jpg'
import featureTwoImg from '../../assets/images/featureTwoImg.jpg'
import featureThreeImg from '../../assets/images/featureThreeImg.jpg'
import { sectionBadge, sectionHeading, staggerContainer, viewport } from '../../utils/motion'

const FeatureCollection = () => {
  const features = [
    {
      id: 1,
      title: 'Linear Series',
      image: featureOneImg,
      alt: 'Linear Series lighting'
    },
    {
      id: 2,
      title: 'Acoustic Collection',
      image: featureTwoImg,
      alt: 'Acoustic Collection'
    },
    {
      id: 3,
      title: 'Pendant Series',
      image: featureThreeImg,
      alt: 'Pendant Series lighting'
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            className="inline-block relative mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionBadge}
          >
            <h3
              className="text-xl font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
              style={{ fontFamily: 'Oxanium, sans-serif' }}
            >
              PRODUCTS
            </h3>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-3 bg-[#f57c00] z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'Oxanium, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionHeading}
          >
            Featured Collections
          </motion.h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="relative h-[500px] md:h-[550px] rounded-3xl overflow-hidden group cursor-pointer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3
                  className="text-white text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  {feature.title}
                </h3>

                <button className="flex items-center gap-3 text-white pl-2 pr-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-[#e66b00] hover:gap-4 hover:shadow-lg">
                  <span className="w-9 h-9 flex items-center justify-center bg-[#E48400] rounded text-xl font-bold transition-transform duration-300 group-hover:rotate-90">
                    +
                  </span>
                  <span>Read More</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCollection
