import React, { useState } from 'react'
import bulbImg from '../../assets/images/bulb.png'

const Bulb = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="bg-[#87530C] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Text and Bulb Image */}
            <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
              {/* Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-md"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Design-driven lighting and acoustic systems
              </h2>

              {/* Bulb Image - Positioned at Center-Bottom */}
              <div className="hidden lg:block absolute bottom-3 left-1/3 transform -translate-x-1/2">
                <img
                  src={bulbImg}
                  alt="Light bulb"
                  className=" object-contain"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="max-w-md">
                {/* Form Header */}
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  Get in touch
                </h3>
                <p className="text-white text-sm sm:text-base mb-6 opacity-90">
                  Get a free consultation with an electrical engineer.
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E48400]"
                    required
                  />

                  {/* Phone Input */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E48400]"
                    required
                  />

                  {/* Message Textarea */}
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E48400] resize-none"
                    required
                  ></textarea>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bulb