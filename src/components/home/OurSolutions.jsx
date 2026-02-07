import React from 'react'
import middleImage from '../../assets/images/middleImage.png'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

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

  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 })
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.3 })
  const [leftRef, leftVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.3 })
  const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="w-full px-4 py-12 md:py-20 bg-gray-50">
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
              OUR SOLUTIONS
            </h3>
            {/* Orange highlight background */}
            <div className="absolute bottom-0 left-0 w-full h-3 bg-[#f57c00] z-0"></div>
          </div>
          <h2
            ref={headingRef}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight slide-up ${headingVisible ? 'visible' : ''}`}
            style={{ fontFamily: 'Oxanium, sans-serif' }}
          >
            Full range of design-led solutions
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Solutions */}
          <div ref={leftRef} className="space-y-8 md:space-y-10">
            {leftSolutions.map((solution, index) => (
              <div
                key={index}
                className={`space-y-2 slide-right ${leftVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-3 group cursor-pointer">
                  <span
                    className="text-[#f57c00] text-2xl font-semibold shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ fontFamily: 'Oxanium, sans-serif' }}
                  >
                    {solution.number}
                  </span>
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
              </div>
            ))}
          </div>

          {/* Middle Image */}
          <div
            ref={imageRef}
            className={`flex justify-center items-center order-first lg:order-0 scale-in ${imageVisible ? 'visible' : ''}`}
          >
            <img
              src={middleImage}
              alt="Design-led lighting solutions"
              className="w-full max-w-md lg:max-w-full h-auto object-contain float-animation"
            />
          </div>

          {/* Right Solutions */}
          <div ref={rightRef} className="space-y-8 md:space-y-10">
            {rightSolutions.map((solution, index) => (
              <div
                key={index}
                className={`space-y-2 slide-left ${rightVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-3 lg:flex-row-reverse group cursor-pointer">
                  <span
                    className="text-[#f57c00] text-2xl font-semibold shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ fontFamily: 'Oxanium, sans-serif' }}
                  >
                    {solution.number}
                  </span>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSolutions