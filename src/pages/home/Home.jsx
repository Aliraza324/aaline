import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import HeroBottom from '../../components/home/HeroBottom'
import AboutCompany from '../../components/home/AboutCompany'
import FeatureCollection from '../../components/home/FeatureCollection'
import OurSolutions from '../../components/home/OurSolutions'
import Illuminate from '../../components/home/Illuminate'
import Sustainability from '../../components/home/Sustainability'
import Testimonials from '../../components/home/Testimonials'
import Blog from '../../components/home/Blog'
import Bulb from '../../components/home/Bulb'
import Faqs from '../../components/home/Faqs'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <HeroBottom/>
        <AboutCompany/>
        <FeatureCollection/>
        <OurSolutions/>
        <Illuminate/>
        <Sustainability/>
        <Testimonials/>
        <Blog/>
        <Bulb/>
        <Faqs/>
    </div>
  )
}

export default Home