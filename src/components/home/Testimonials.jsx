import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { sectionBadge, sectionHeading, viewport } from '../../utils/motion'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const testimonials = [
    {
      id: 1,
      quote:
        '"From concept to finish, A Finer touch Construction guided us with creativity and professionalism. Our home radiates timeless elegance."',
      imageQuote: 'Created a stunning home both grand and welcoming."',
      clientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      clientName: 'Charles Wong',
      clientRole: 'Entreprenuer',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      quote:
        '"Exceptional attention to detail and outstanding service. The team transformed our vision into reality beyond our expectations."',
      imageQuote: 'Transformed our space into something extraordinary."',
      clientImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop',
      clientName: 'Sarah Johnson',
      clientRole: 'Interior Designer',
      clientAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      quote:
        '"Professional, innovative, and committed to excellence. They delivered a space that perfectly balances form and function."',
      imageQuote: 'A masterpiece of design and functionality."',
      clientImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
      clientName: 'Michael Chen',
      clientRole: 'Business Owner',
      clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    }
  ]

  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[activeIndex]

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir * 120, scale: 0.95 }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir * -120,
      scale: 0.95,
      transition: { duration: 0.4, ease: 'easeIn' }
    })
  }

  const cardVariants = {
    enter: (dir) => ({ opacity: 0, x: dir * 80, y: 20 }),
    center: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir * -80,
      y: -10,
      transition: { duration: 0.35, ease: 'easeIn' }
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
              TESTIMONIALS
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
            What our clients say
          </motion.h2>
        </div>

        {/* Testimonial Slider */}
        <motion.div
          className="relative pb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Left side - Client Image */}
            <div className="relative w-full lg:w-md h-100 md:h-125 lg:h-150 rounded-3xl overflow-hidden shrink-0">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  className="absolute inset-0"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <img
                    src={currentTestimonial.clientImage}
                    alt={currentTestimonial.clientName}
                    className="w-full h-full object-cover"
                  />
                  {/* Quote Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/70 to-transparent p-6 md:p-8">
                    <p className="text-white text-base md:text-lg lg:text-xl font-medium">
                      {currentTestimonial.imageQuote}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side - Testimonial Card */}
            <div className="w-full lg:flex-1 lg:-ml-8 lg:relative lg:top-10 lg:right-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 max-w-2xl mx-auto lg:mx-0"
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  whileHover={{ boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
                >
                  {/* Quote */}
                  <p
                    className="text-gray-900 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 md:mb-8"
                    style={{ fontFamily: 'Oxanium, sans-serif' }}
                  >
                    {currentTestimonial.quote}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <motion.img
                      src={currentTestimonial.clientAvatar}
                      alt={currentTestimonial.clientName}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-4 ring-gray-100"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <h4
                        className="text-gray-900 text-base md:text-lg font-bold"
                        style={{ fontFamily: 'Oxanium, sans-serif' }}
                      >
                        {currentTestimonial.clientName}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {currentTestimonial.clientRole}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex justify-center lg:justify-end gap-3 md:gap-4 mt-6 md:mt-8 max-w-2xl mx-auto lg:mx-0">
                <motion.button
                  onClick={handlePrev}
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#f57c00] text-white rounded-xl flex items-center justify-center transition-colors duration-300 hover:bg-[#e66b00]"
                  whileHover={{ scale: 1.1, boxShadow: '0 8px 25px rgba(245,124,0,0.35)' }}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} className="md:hidden" />
                  <ChevronLeft size={24} className="hidden md:block" />
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#f57c00] text-white rounded-xl flex items-center justify-center transition-colors duration-300 hover:bg-[#e66b00]"
                  whileHover={{ scale: 1.1, boxShadow: '0 8px 25px rgba(245,124,0,0.35)' }}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} className="md:hidden" />
                  <ChevronRight size={24} className="hidden md:block" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
