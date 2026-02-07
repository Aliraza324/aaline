import React from 'react'
import { motion } from 'framer-motion'
import firstIcon from '../../assets/images/firstIcon.png'
import secondIcon from '../../assets/images/secondImg.png'
import thirdIcon from '../../assets/images/thirdIcon.png'
import fourthIcon from '../../assets/images/fourthIcon.png'
import { staggerContainer, viewport } from '../../utils/motion'

const HeroBottom = () => {
  const features = [
    {
      icon: firstIcon,
      title: 'Thoughtful',
      subtitle: 'Design'
    },
    {
      icon: secondIcon,
      title: 'Acoustic',
      subtitle: 'Performance'
    },
    {
      icon: thirdIcon,
      title: 'High-quality',
      subtitle: 'tools'
    },
    {
      icon: fourthIcon,
      title: 'Sustainable',
      subtitle: 'Materials'
    }
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  const iconVariants = {
    hidden: { opacity: 0, rotate: -15, scale: 0.7 },
    visible: (i) => ({
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.12 + 0.15,
        type: 'spring',
        stiffness: 150,
        damping: 12
      }
    })
  }

  return (
    <div className="w-full px-4 py-8 md:py-12">
      <motion.div
        className="max-w-7xl mx-auto bg-[#2a2a2a] rounded-3xl px-6 py-8 md:px-12 md:py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={itemVariants}
            >
              <motion.div
                className="shrink-0"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={iconVariants}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={feature.icon}
                  alt={`${feature.title} ${feature.subtitle}`}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </motion.div>
              <div className="flex flex-col">
                <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white text-lg md:text-xl font-semibold leading-tight">
                  {feature.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default HeroBottom
