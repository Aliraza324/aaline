import React from 'react'
import { motion } from 'framer-motion'
import middleImage from '../../assets/images/middleImage.png'
import {
  sectionBadge,
  sectionHeading,
  slideFromLeft,
  slideFromRight,
  scaleIn,
  floatAnimation,
  viewport
} from '../../utils/motion'

const OurSolutions = () => {
  const leftSolutions = [
    {
      number: '01.',
      title: 'Architectural Lighting Design',
      description:
        'Our lighting design services focus on creating visually compelling and functional illumination tailored'
    },
    {
      number: '02.',
      title: 'Acoustic Lighting Solutions',
      description:
        'We design integrated lighting and acoustic systems that reduce noise levels while maintaining clean'
    },
    {
      number: '03.',
      title: 'Custom Lighting Fabrication',
      description:
        'From concept to completion, we develop custom lighting solutions crafted to meet unique spatial'
    }
  ]

  const rightSolutions = [
    {
      number: '04.',
      title: 'Product Installation Support',
      description:
        'Our team provides detailed installation guidance and coordination to ensure lighting systems'
    },
    {
      number: '05.',
      title: 'Energy-Efficient LED Systems',
      description:
        'Looking for sustainable lighting solutions? We specialize in high-performance LED systems'
    },
    {
      number: '06.',
      title: 'Project Consultation & Collaboration',
      description:
        'We collaborate closely with architects, designers, and engineers to deliver lighting solutions'
    }
  ]

  return (
    <section className="w-full px-4 py-12 md:py-20 bg-gray-50">
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
              OUR SOLUTIONS
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: 'Oxanium, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionHeading}
          >
            Full range of design-led solutions
          </motion.h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Solutions */}
          <div className="space-y-8 md:space-y-10">
            {leftSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={slideFromLeft(index * 0.15)}
              >
                <div className="flex items-start gap-3 group cursor-pointer">
                  <motion.span
                    className="text-[#f57c00] text-2xl font-semibold shrink-0"
                    style={{ fontFamily: 'Oxanium, sans-serif' }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {solution.number}
                  </motion.span>
                  <div>
                    <h3
                      className="text-gray-900 text-lg md:text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-[#f57c00]"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle Image */}
          <motion.div
            className="flex justify-center items-center order-first lg:order-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scaleIn}
          >
            <motion.img
              src={middleImage}
              alt="Design-led lighting solutions"
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
              animate={floatAnimation}
            />
          </motion.div>

          {/* Right Solutions */}
          <div className="space-y-8 md:space-y-10">
            {rightSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={slideFromRight(index * 0.15)}
              >
                <div className="flex items-start gap-3 lg:flex-row-reverse group cursor-pointer">
                  <motion.span
                    className="text-[#f57c00] text-2xl font-semibold shrink-0"
                    style={{ fontFamily: 'Oxanium, sans-serif' }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {solution.number}
                  </motion.span>
                  <div className="lg:text-right">
                    <h3
                      className="text-gray-900 text-lg md:text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-[#f57c00]"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSolutions
