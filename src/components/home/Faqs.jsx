import React, { useState } from 'react'
import sectionImg from '../../assets/images/sections.png'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

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

  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 })
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.3 })
  const [faqsRef, faqsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - FAQ Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div
                ref={titleRef}
                className={`inline-block relative mb-4 fade-in ${titleVisible ? 'visible' : ''}`}
              >
                <h3
                  className="text-sm font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  EXPLORE FAQ'S
                </h3>
                {/* Orange highlight background */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-[#E48400] z-0"></div>
              </div>
              <h2
                ref={headingRef}
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight slide-up ${headingVisible ? 'visible' : ''}`}
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Popular questions about our company
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div ref={faqsRef} className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-lg overflow-hidden stagger-item ${faqsVisible ? 'visible' : ''}`}
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
                    <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-md bg-[#E48400] text-white flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:scale-110 ${openIndex === index ? 'rotate-180' : ''}`}>
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 bg-gray-50 animate-on-scroll visible">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Images */}
          <div
            ref={imageRef}
            className={`relative h-[400px] sm:h-[500px] lg:h-[600px] scale-in ${imageVisible ? 'visible' : ''}`}
          >
            <img
              src={sectionImg}
              alt="Electrical services"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs