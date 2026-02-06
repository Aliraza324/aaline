import React from 'react'
import featureOneImg from '../../assets/images/featureOneImg.jpg'
import featureTwoImg from '../../assets/images/featureTwoImg.jpg'
import featureThreeImg from '../../assets/images/featureThreeImg.jpg'

const FeatureCollection = () => {
  const features = [
    {
      id: 1,
      title: 'Linear Series',
      image: featureOneImg,
      alt: 'Linear Series lighting'
    },
    {
      id: 2,
      title: 'Acoustic Collection',
      image: featureTwoImg,
      alt: 'Acoustic Collection'
    },
    {
      id: 3,
      title: 'Pendant Series',
      image: featureThreeImg,
      alt: 'Pendant Series lighting'
    }
  ]

  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block relative mb-4">
            <h3
              className="text-xl font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
              style={{ fontFamily: 'Oxanium, sans-serif' }}
            >
              PRODUCTS
            </h3>
            {/* Orange highlight background */}
            <div className="absolute bottom-0 left-0 w-full h-3 bg-[#f57c00] z-0"></div>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'Oxanium, sans-serif' }}
          >
            Featured Collections
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative h-[500px] md:h-[550px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3
                  className="text-white text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  {feature.title}
                </h3>

                {/* Read More Button */}
                <button className="flex items-center gap-3  text-white pl-2 pr-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-[#e66b00] hover:gap-4">
                  <span className="w-9 h-9 flex items-center justify-center bg-[#E48400] rounded text-xl font-bold">
                    +
                  </span>
                  <span>Read More</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCollection