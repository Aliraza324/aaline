import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import HeroBottom from '../../components/home/HeroBottom'
import AboutCompany from '../../components/home/AboutCompany'
import FeatureCollection from '../../components/home/FeatureCollection'
import OurSolutions from '../../components/home/OurSolutions'
import Illuminate from '../../components/home/Illuminate'
import Sustainability from '../../components/home/Sustainability'
import Testimonials from '../../components/home/Testimonials'

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
    </div>
  )
}

export default Home