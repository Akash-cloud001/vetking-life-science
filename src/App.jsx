import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Goals from './components/Goals'
import Team from './components/Team'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Header />
        <main className='px-4 md:px-0'>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Goals />
                {/* <Team />
                <Services /> */}
                <CTA />
              </>
            } />
            <Route path="/about" element={<Goals />} />
            <Route path="/contact" element={<CTA />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
