import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
      setIsTransitioning(false)
    }, 300)
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      setIsTransitioning(false)
    }, 300)
  }

  const currentTestimonial = testimonials[activeIndex]

  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 })
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.3 })
  const [sliderRef, sliderVisible] = useScrollAnimation({ threshold: 0.1 })

  // Reset transition state when activeIndex changes
  useEffect(() => {
    setIsTransitioning(false)
  }, [activeIndex])

  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            ref={titleRef}
            className={`inline-block relative mb-4 fade-in ${titleVisible ? 'visible' : ''}`}
          >
            <h3
              className="text-xl font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
              style={{ fontFamily: 'Oxanium, sans-serif' }}
            >
              TESTIMONIALS
            </h3>
            {/* Orange highlight background */}
            <div className="absolute bottom-0 left-0 w-full h-3 bg-[#f57c00] z-0"></div>
          </div>
          <h2
            ref={headingRef}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 slide-up ${headingVisible ? 'visible' : ''}`}
            style={{ fontFamily: 'Oxanium, sans-serif' }}
          >
            What our clients say
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div
          ref={sliderRef}
          className={`relative pb-20 fade-in ${sliderVisible ? 'visible' : ''}`}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Left side - Client Image (448px x 600px) */}
            <div
              className={`relative w-full lg:w-md h-100 md:h-125 lg:h-150 rounded-3xl overflow-hidden shrink-0 transition-all duration-500 ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <img
                src={currentTestimonial.clientImage}
                alt={currentTestimonial.clientName}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/70 to-transparent p-6 md:p-8 transition-all duration-500">
                <p className="text-white text-base md:text-lg lg:text-xl font-medium">
                  {currentTestimonial.imageQuote}
                </p>
              </div>
            </div>

            {/* Right side - Testimonial Card */}
            <div className="w-full lg:flex-1 lg:-ml-8 lg:relative lg:top-10 lg:right-10">
              <div
                className={`bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 max-w-2xl mx-auto lg:mx-0 transition-all duration-500 hover:shadow-2xl ${
                  isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
                }`}
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
                  <img
                    src={currentTestimonial.clientAvatar}
                    alt={currentTestimonial.clientName}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-4 ring-gray-100 transition-all duration-300 hover:ring-[#f57c00]"
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
              </div>

              {/* Navigation Arrows - Below the card */}
              <div className="flex justify-center lg:justify-end gap-3 md:gap-4 mt-6 md:mt-8 max-w-2xl mx-auto lg:mx-0">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#f57c00] text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#e66b00] hover:shadow-lg hover:scale-110 active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} className="md:hidden" />
                  <ChevronLeft size={24} className="hidden md:block" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#f57c00] text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#e66b00] hover:shadow-lg hover:scale-110 active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} className="md:hidden" />
                  <ChevronRight size={24} className="hidden md:block" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials