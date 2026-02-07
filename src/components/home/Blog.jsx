import React from 'react'
import { motion } from 'framer-motion'
import blogOneImg from '../../assets/images/blogOneImg.png'
import blogTwoImg from '../../assets/images/blogTwoImg.png'
import blogThreeImg from '../../assets/images/blogThreeImg.png'
import { sectionBadge, sectionHeading, viewport } from '../../utils/motion'

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-block relative mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionBadge}
          >
            <h3
              className="text-xl font-bold tracking-wider uppercase text-gray-900 relative z-10 px-2"
              style={{ fontFamily: 'Oxanium, sans-serif' }}
            >
              OUR BLOG
            </h3>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-3 bg-[#E48400] z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mt-6"
            style={{ fontFamily: 'Oxanium, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionHeading}
          >
            Recent articles
          </motion.h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              transition={{ duration: 0.3 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
