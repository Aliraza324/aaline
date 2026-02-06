import React from 'react'
import firstIcon from '../../assets/images/firstIcon.png'
import secondIcon from '../../assets/images/secondImg.png'
import thirdIcon from '../../assets/images/thirdIcon.png'
import fourthIcon from '../../assets/images/fourthIcon.png'

const HeroBottom = () => {
  const features = [
    {
      icon: firstIcon,
      title: 'Thoughtful',
      subtitle: 'Design'
    },
    {
      icon: secondIcon,
      title: 'Acoustic',
      subtitle: 'Performance'
    },
    {
      icon: thirdIcon,
      title: 'High-quality',
      subtitle: 'tools'
    },
    {
      icon: fourthIcon,
      title: 'Sustainable',
      subtitle: 'Materials'
    }
  ]

  return (
    <div className="w-full px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto bg-[#2a2a2a] rounded-3xl px-6 py-8 md:px-12 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0">
                <img
                  src={feature.icon}
                  alt={`${feature.title} ${feature.subtitle}`}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white text-lg md:text-xl font-semibold leading-tight">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroBottom