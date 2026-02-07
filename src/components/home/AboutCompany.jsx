import { useState } from 'react'
import aboutLeft from '../../assets/images/aboutLeft.png'
import { useScrollAnimation, useCounterAnimation } from '../../hooks/useScrollAnimation'

const AboutCompany = () => {
  const skills = [
    { name: 'Design Excellence', percentage: 88 },
    { name: 'Lighting Performance', percentage: 96 },
    { name: 'Acoustic Comfort', percentage: 75 },
    { name: 'Sustainability Focus', percentage: 85 }
  ]

  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.3 })
  const [counterRef, counterVisible] = useScrollAnimation({ threshold: 0.5 })
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 })
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.3 })
  const [descRef, descVisible] = useScrollAnimation({ threshold: 0.3 })
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.2 })

  // Counter animation for "30 years"
  const yearsCount = useCounterAnimation(30, 2000, counterVisible)

  return (
    <section className="w-full px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Image with experience card */}
          <div className="relative">
            <div
              ref={imageRef}
              className={`relative rounded-2xl overflow-hidden image-reveal ${imageVisible ? 'visible' : ''}`}
            >
              <img
                src={aboutLeft}
                alt="Office interior"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Experience Card Overlay */}
            <div
              ref={counterRef}
              className={`absolute bottom-0 left-0 bg-[#f57c00] text-white p-8 md:p-10 rounded-tr-3xl scale-in ${counterVisible ? 'visible' : ''}`}
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

                <h3
                  className="text-6xl md:text-7xl font-bold mb-2 counter-animate"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  {yearsCount}
                </h3>
                <p className="text-xl md:text-2xl font-medium">Years of</p>
                <p className="text-xl md:text-2xl font-medium">experience</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div
                ref={titleRef}
                className={`inline-block relative mb-2 slide-right ${titleVisible ? 'visible' : ''}`}
              >
                <h3
                  className="text-xl font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  ABOUT COMPANY
                </h3>
                {/* Orange highlight background */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-[#f57c00] z-0"></div>
              </div>
              <h2
                ref={headingRef}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight slide-up ${headingVisible ? 'visible' : ''}`}
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                We are design-driven and architectural
              </h2>
              <p
                ref={descRef}
                className={`text-gray-600 text-base md:text-lg leading-relaxed slide-up ${descVisible ? 'visible' : ''}`}
              >
                We create architectural lighting and acoustic solutions for commercial and public spaces, combining refined design, technical precision, and sustainable materials to enhance how spaces look, feel, and perform
              </p>
            </div>

            {/* Skills/Progress bars */}
            <div ref={skillsRef} className="space-y-8 mt-10">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
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
                      <div
                        className={`bg-[#f57c00] h-full progress-bar-animate ${skillsVisible ? 'visible' : ''}`}
                        style={{
                          width: skillsVisible ? `${skill.percentage}%` : '0%',
                          transitionDelay: `${index * 0.15}s`
                        }}
                      ></div>
                    </div>
                    {/* Percentage Badge with Speech Bubble */}
                    <div
                      className={`absolute -top-11 transition-all duration-500 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        left: skillsVisible ? `${skill.percentage}%` : '0%',
                        transform: 'translateX(-50%)',
                        transitionDelay: `${index * 0.15 + 0.8}s`
                      }}
                    >
                      <div className="relative inline-block">
                        <div
                          className="bg-[#2a2a2a] text-white px-3 py-1.5 font-bold text-sm whitespace-nowrap"
                          style={{ fontFamily: 'Oxanium, sans-serif' }}
                        >
                          {skill.percentage}%
                        </div>
                        {/* Speech bubble pointer */}
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany