import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './reuseable/Header'
import Home from './pages/home/Home'
import Footer from './reuseable/Footer'
import Loader from './reuseable/Loader'

// Placeholder page components
const AboutUs = () => <div className="p-8"><h1 className="text-3xl font-bold">About Us</h1></div>
const Products = () => <div className="p-8"><h1 className="text-3xl font-bold">Products</h1></div>
const AcousticSolutions = () => <div className="p-8"><h1 className="text-3xl font-bold">Acoustic Solutions</h1></div>
const Resources = () => <div className="p-8"><h1 className="text-3xl font-bold">Resources</h1></div>
const Contacts = () => <div className="p-8"><h1 className="text-3xl font-bold">Contacts</h1></div>

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" variant="bulb" text="Illuminating Your Experience..." />
      ) : (
        <Router key="app">
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/acoustic-solutions" element={<AcousticSolutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/contact" element={<Contacts />} />
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
      )}
    </AnimatePresence>
  )
}

export default App
