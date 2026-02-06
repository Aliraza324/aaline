import { Link } from 'react-router-dom'
import heroRight from '../../assets/images/heroRight.png'

const HeroSection = () => {
  return (
    <section className="bg-[#FAFAFA] py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gray-800 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
              <span className="text-sm text-gray-800 font-medium">
                Architectural lighting company
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "'Oxanium', sans-serif" }}
            >
              Architectural Lighting & <br /> Acoustic Solutions
            </h1>
            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              We create refined lighting and acoustic products that enhance spaces through thoughtful design, sustainable materials, and precision manufacturing
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="bg-[#E48400] hover:bg-[#d17900] text-white px-8 py-3.5 rounded-lg font-medium text-sm transition-colors"
              >
                Explore Products
              </Link>
              <Link
                to="/projects"
                className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3.5 rounded-lg font-medium text-sm border border-gray-300 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-1 relative">
          <div className="">
            <img src={heroRight} alt="" />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection