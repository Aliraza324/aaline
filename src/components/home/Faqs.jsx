import React, { useState } from 'react'
import sectionImg from '../../assets/images/sections.png'

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

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - FAQ Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-block relative mb-4">
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
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Popular questions about our company
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span
                      className="text-left text-base sm:text-lg font-semibold text-gray-900"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 ml-4 w-8 h-8 rounded-md bg-[#E48400] text-white flex items-center justify-center text-xl font-bold">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 bg-gray-50">
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
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            <img
              src={sectionImg}
              alt="Electrical services"
              className="w-full h-full object-cover rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs