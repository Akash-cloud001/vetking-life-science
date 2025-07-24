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

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className='!px-4'>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Goals />
                <Team />
                <Services />
                <CTA />
              </>
            } />
            <Route path="/about" element={<Goals />} />
            <Route path="/contact" element={<CTA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
