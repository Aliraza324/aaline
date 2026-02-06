import React from 'react'
import { MapPin, Clock } from 'lucide-react'
import IlluminateOneImg from '../../assets/images/IlluminateOneImg.jpg'
import IlluminateTwoImg from '../../assets/images/IlluminateTwoImg.jpg'
import IlluminateThirdImg from '../../assets/images/IlluminateThirdImg.jpg'

const Illuminate = () => {
  const projects = [
    {
      id: 1,
      title: 'Workplace',
      image: IlluminateOneImg,
      location: 'Canada',
      duration: '15 days',
      alt: 'Workplace lighting project'
    },
    {
      id: 2,
      title: 'Education',
      image: IlluminateTwoImg,
      location: 'California',
      duration: '2 months',
      alt: 'Education lighting project'
    },
    {
      id: 3,
      title: 'Healthcare',
      image: IlluminateThirdImg,
      location: 'Florida',
      duration: '1 month',
      alt: 'Healthcare lighting project'
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
              PROJECTS
            </h3>
            {/* Orange highlight background */}
            <div className="absolute bottom-0 left-0 w-full h-3 bg-[#f57c00] z-0"></div>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'Oxanium, sans-serif' }}
          >
            Spaces We Illuminate
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-[350px] md:h-[350px] group cursor-pointer mb-12"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Info Card - Overlapping bottom */}
              <div className="absolute -bottom-8 left-6 right-6 bg-white rounded-2xl p-5 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-bottom-10">
                <h3
                  className="text-gray-900 text-xl md:text-2xl font-bold mb-3"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-gray-700 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-gray-600" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-gray-600" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Illuminate