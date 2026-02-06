import React from 'react'
import { Briefcase, Smile } from 'lucide-react'
import img from '../../assets/images/img.png'
import rightFirstIcon from '../../assets/images/rightFirstIcon.png'
import rightSecondImg from '../../assets/images/rightSecondImg.png'
import rightThirdIcon from '../../assets/images/rightThirdIcon.png'

const Sustainability = () => {
  const features = [
    {
      icon: rightFirstIcon,
      title: 'B-Corp Certified'
    },
    {
      icon: rightSecondImg,
      title: 'Eco-friendly materials'
    },
    {
      icon: rightThirdIcon,
      title: 'Low-impact manufacturing'
    }
  ]

  return (
    <section className="w-full px-4 py-12 md:py-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image with stat cards */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={img}
                alt="Sustainable manufacturing facility"
                className="w-full h-auto object-cover"
              />
            </div>

         
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block relative mb-2">
                <h3
                  className="text-xl font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  SUSTAINABILITY
                </h3>
                {/* Orange highlight background */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-[#f57c00] z-0"></div>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Designed with Responsibility
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Sustainability is at the core of everything we do—from material
                selection to manufacturing processes.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className=" flex items-center justify-center shrink-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className=" object-contain"
                    />
                  </div>
                  <p className="text-gray-900 text-base md:text-lg font-medium">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-8 bg-[#f57c00] text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:bg-[#e66b00] hover:shadow-lg">
              Learn About Our Sustainability
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sustainability