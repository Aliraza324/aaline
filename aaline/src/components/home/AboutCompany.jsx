import React from 'react'
import aboutLeft from '../../assets/images/aboutLeft.png'

const AboutCompany = () => {
  const skills = [
    { name: 'Design Excellence', percentage: 88 },
    { name: 'Lighting Performance', percentage: 96 },
    { name: 'Acoustic Comfort', percentage: 75 },
    { name: 'Sustainability Focus', percentage: 85 }
  ]

  return (
    <section className="w-full px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
          {/* Left side - Image with experience card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutLeft}
                alt="Office interior"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block relative mb-2">
                <h3
                  className="text-xl  font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  ABOUT COMPANY
                </h3>
                {/* Orange highlight background */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-[#f57c00] z-0"></div>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                We are design-driven and architectural
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We create architectural lighting and acoustic solutions for commercial and public spaces, combining refined design, technical precision, and sustainable materials to enhance how spaces look, feel, and perform
              </p>
            </div>

            {/* Skills/Progress bars */}
            <div className="space-y-8 mt-10">
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
                        className="bg-[#f57c00] h-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    {/* Percentage Badge with Speech Bubble */}
                    <div
                      className="absolute -top-11"
                      style={{ left: `${skill.percentage}%`, transform: 'translateX(-50%)' }}
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