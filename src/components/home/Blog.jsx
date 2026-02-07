import React from 'react'
import blogOneImg from '../../assets/images/blogOneImg.png'
import blogTwoImg from '../../assets/images/blogTwoImg.png'
import blogThreeImg from '../../assets/images/blogThreeImg.png'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      day: '14',
      month: 'Oct',
      image: blogOneImg,
      title: 'The benefits of upgrading your electrical panel'
    },
    {
      id: 2,
      day: '10',
      month: 'Sep',
      image: blogTwoImg,
      title: 'The future of lighting: exploring smart lighting solutions'
    },
    {
      id: 3,
      day: '05',
      month: 'Aug',
      image: blogThreeImg,
      title: 'How to choose the right lighting for your commercial space'
    }
  ]

  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 })
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.3 })
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            ref={titleRef}
            className={`inline-block relative mb-4 fade-in ${titleVisible ? 'visible' : ''}`}
          >
            <h3
              className="text-xl font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
              style={{ fontFamily: 'Oxanium, sans-serif' }}
            >
              OUR BLOG
            </h3>
            {/* Orange highlight background */}
            <div className="absolute bottom-0 left-0 w-full h-3 bg-[#E48400] z-0"></div>
          </div>
          <h2
            ref={headingRef}
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mt-6 slide-up ${headingVisible ? 'visible' : ''}`}
            style={{ fontFamily: 'Oxanium, sans-serif' }}
          >
            Recent articles
          </h2>
        </div>

        {/* Blog Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 stagger-item ${gridVisible ? 'visible' : ''}`}
            >
              {/* Image Container with Date Badge */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Date Badge */}
                <div
                  className="absolute top-0 left-0 bg-[#E48400] text-black text-center px-6 py-4 shadow-lg w-[90px] transition-all duration-300 group-hover:bg-[#f57c00] group-hover:scale-105"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  <div className="text-3xl font-bold leading-none">{post.day}</div>
                  <div className="text-sm font-semibold mt-1.5 tracking-wide">{post.month}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 transition-all duration-300 group-hover:bg-gray-50">
                <h3
                  className="text-lg sm:text-xl text-gray-900 group-hover:text-[#E48400] transition-colors duration-300"
                  style={{ fontFamily: 'Oxanium, sans-serif' }}
                >
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog