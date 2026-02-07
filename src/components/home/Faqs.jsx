import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import sectionImg from '../../assets/images/sections.png'
import {
  sectionBadge,
  sectionHeading,
  imageReveal,
  accordionContent,
  viewport
} from '../../utils/motion'

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Why to choose us?',
      answer: 'Whether you need lighting repairs, electrical upgrades, or a new installation, we\'re here to provide quality services that meet your needs and exceed your expectations.'
    },
    {
      question: 'How quickly can you get help?',
      answer: 'We offer emergency services and aim to respond to all inquiries within 24 hours. For urgent matters, our team is available to provide immediate assistance.'
    },
    {
      question: 'How to pay for services?',
      answer: 'We accept multiple payment methods including credit cards, bank transfers, and online payments. Detailed invoices are provided for all services rendered.'
    },
    {
      question: 'What to call an electrician?',
      answer: 'You can reach our professional electricians through our contact form, phone, or email. We\'re available for consultations, installations, repairs, and maintenance services.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - FAQ Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <motion.div
                className="inline-block relative mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={sectionBadge}
              >
                <h3
                  className="text-sm font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  EXPLORE FAQ'S
                </h3>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-2 bg-[#E48400] z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={sectionHeading}
              >
                Popular questions about our company
              </motion.h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={faqItemVariants}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <span
                      className="text-left text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#E48400] transition-colors duration-300"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      className="flex-shrink-0 ml-4 w-8 h-8 rounded-md bg-[#E48400] text-white flex items-center justify-center text-xl font-bold"
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      whileHover={{ scale: 1.1 }}
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Answer with smooth height animation */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={accordionContent}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 bg-gray-50">
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={imageReveal}
          >
            <motion.img
              src={sectionImg}
              alt="Electrical services"
              className="w-full h-full object-cover rounded-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
