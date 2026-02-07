import { Link } from 'react-router-dom'
import heroRight from '../../assets/images/heroRight.png'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const HeroSection = () => {
  const [badgeRef, badgeVisible] = useScrollAnimation({ threshold: 0.3 })
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.3 })
  const [descRef, descVisible] = useScrollAnimation({ threshold: 0.3 })
  const [buttonsRef, buttonsVisible] = useScrollAnimation({ threshold: 0.3 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="bg-[#FAFAFA] py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div
              ref={badgeRef}
              className={`inline-flex items-center gap-2 border border-gray-800 rounded-full px-4 py-2 mb-6 fade-in ${badgeVisible ? 'visible' : ''}`}
            >
              <span className="w-2 h-2 bg-gray-800 rounded-full pulse-subtle"></span>
              <span className="text-sm text-gray-800 font-medium">
                Architectural lighting company
              </span>
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight slide-up ${headingVisible ? 'visible' : ''}`}
              style={{ fontFamily: "'Oxanium', sans-serif" }}
            >
              Architectural Lighting & <br /> Acoustic Solutions
            </h1>
            {/* Description */}
            <p
              ref={descRef}
              className={`text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 slide-up ${descVisible ? 'visible' : ''}`}
            >
              We create refined lighting and acoustic products that enhance spaces through thoughtful design, sustainable materials, and precision manufacturing
            </p>

            {/* Buttons */}
            <div
              ref={buttonsRef}
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-up ${buttonsVisible ? 'visible' : ''}`}
            >
              <Link
                to="/products"
                className="bg-[#E48400] hover:bg-[#d17900] text-white px-8 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Explore Products
              </Link>
              <Link
                to="/projects"
                className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3.5 rounded-lg font-medium text-sm border border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-1 relative">
            <div
              ref={imageRef}
              className={`scale-in ${imageVisible ? 'visible' : ''}`}
            >
              <img
                src={heroRight}
                alt="Architectural Lighting Solutions"
                className="float-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection