import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import aboutLeft from '../../assets/images/aboutLeft.png'
import { useCounterAnimation } from '../../hooks/useScrollAnimation'
import {
  fadeInUp,
  imageReveal,
  scaleIn,
  slideFromLeft,
  progressBar,
  viewport
} from '../../utils/motion'

const AboutCompany = () => {
  const skills = [
    { name: 'Design Excellence', percentage: 88 },
    { name: 'Lighting Performance', percentage: 96 },
    { name: 'Acoustic Comfort', percentage: 75 },
    { name: 'Sustainability Focus', percentage: 85 }
  ]

  const counterRef = useRef(null)
  const skillsRef = useRef(null)
  const counterInView = useInView(counterRef, { once: true, amount: 0.5 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 })

  const yearsCount = useCounterAnimation(30, 2000, counterInView)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  return (
    <section className="w-full px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Image with experience card */}
          <div className="relative">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={imageReveal}
            >
              <img
                src={aboutLeft}
                alt="Office interior"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Experience Card Overlay */}
            <motion.div
              ref={counterRef}
              className="absolute bottom-0 left-0 bg-[#f57c00] text-white p-8 md:p-10 rounded-tr-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={scaleIn}
            >
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-2 left-0 w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-0.5 bg-white"></div>
                </div>
                <div className="absolute -bottom-2 right-0 w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-0.5 h-2 bg-white"></div>
                  <div className="w-2 h-0.5 bg-white absolute"></div>
                </div>

                <motion.h3
                  className="text-6xl md:text-7xl font-bold mb-2"
                  style={{ fontFamily: 'Oxanium, sans-serif', fontVariantNumeric: 'tabular-nums' }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={counterInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
                >
                  {yearsCount}
                </motion.h3>
                <p className="text-xl md:text-2xl font-medium">Years of</p>
                <p className="text-xl md:text-2xl font-medium">experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-block relative mb-2"
                variants={slideFromLeft()}
              >
                <h3
                  className="text-xl font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  ABOUT COMPANY
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
                We are design-driven and architectural
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-base md:text-lg leading-relaxed"
              >
                We create architectural lighting and acoustic solutions for commercial and public spaces, combining refined design, technical precision, and sustainable materials to enhance how spaces look, feel, and perform
              </motion.p>
            </div>

            {/* Skills/Progress bars */}
            <div ref={skillsRef} className="space-y-8 mt-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4
                      className="text-gray-900 font-semibold text-xl md:text-2xl"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      {skill.name}
                    </h4>
                  </div>
                  <div className="relative w-full">
                    <div className="w-full bg-gray-200 h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-[#f57c00] h-full"
                        initial="hidden"
                        animate={skillsInView ? 'visible' : 'hidden'}
                        variants={progressBar(skill.percentage, index * 0.15)}
                      />
                    </div>
                    {/* Percentage Badge with Speech Bubble */}
                    <motion.div
                      className="absolute -top-11"
                      initial={{ left: '0%', opacity: 0 }}
                      animate={
                        skillsInView
                          ? { left: `${skill.percentage}%`, opacity: 1 }
                          : {}
                      }
                      transition={{
                        duration: 1.2,
                        delay: index * 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      style={{ transform: 'translateX(-50%)' }}
                    >
                      <div className="relative inline-block">
                        <div
                          className="bg-[#2a2a2a] text-white px-3 py-1.5 font-bold text-sm whitespace-nowrap"
                          style={{ fontFamily: 'Oxanium, sans-serif' }}
                        >
                          {skill.percentage}%
                        </div>
                        <div
                          className="absolute left-1/2 -translate-x-1/2 -bottom-1.5"
                          style={{
                            width: 0,
                            height: 0,
                            borderLeft: '6px solid transparent',
                            borderRight: '6px solid transparent',
                            borderTop: '6px solid #2a2a2a'
                          }}
                        ></div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
