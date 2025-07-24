import { motion } from 'framer-motion'
import DogPaw from './svgs/DogPaw'
import InjectionIcon from './svgs/InjectionIcon'
import Microscope from './svgs/Microscope'
import Tube from './svgs/Tube'
import Dna from './svgs/Dna'
import ImageCarousel from './ui/ImageCarousel'
const Hero = () => {
  return (
    <section className="flex items-center justify-start relative overflow-hidden" style={{ height: 'calc(100dvh - var(--nav-height))' }}>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 -rotate-45 origin-center">
        {/* Step 1 - Center */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 0  }}
          animate={{ opacity: 1, x: -20, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="w-8 h-8 text-purple-400/60 absolute"
        >
          <DogPaw />
        </motion.div>
        
        {/* Step 2 - Diagonally Right */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -50  }}
          animate={{ opacity: 1, x: 30, y: -50 }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          className="w-8 h-8 text-purple-400/50 absolute"
        >
          <DogPaw />
        </motion.div>
        
        {/* Step 3 - Diagonally Left */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: -100 }}
          animate={{ opacity: 1, x: -20, y: -100 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          className="w-8 h-8 text-purple-400/40 absolute"
        >
          <DogPaw />
        </motion.div>
        
        {/* Step 4 - Diagonally Right */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -150 }}
          animate={{ opacity: 1, x: 30, y: -150 }}
          transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
          className="w-8 h-8 text-purple-400/30 absolute"
        >
          <DogPaw />
        </motion.div>
        {/* Step 4 - Diagonally Left */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: -200 }}
          animate={{ opacity: 1, x: -20, y: -200 }}
          transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
          className="w-8 h-8 text-purple-400/40 absolute"
        >
          <DogPaw />
        </motion.div>
        
        {/* Step 4 - Diagonally Right */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -250 }}
          animate={{ opacity: 1, x: 30, y: -250 }}
          transition={{ delay: 3.0, duration: 0.8, ease: "easeOut" }}
          className="w-8 h-8 text-purple-400/30 absolute"
        >
          <DogPaw />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="container w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
          {/* Left Content - Centered on mobile */}
          <motion.div 
            className="flex-1 max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className='text-4xl md:text-6xl font-medium font-geist text-gray-900 tracking-tight sm:text-balance !mb-6'
            >
              Discover Our <span className='font-branch font-bold text-[40px] md:text-[70px] text-primary-purple'>Mission</span> and <span className='font-branch font-bold text-[40px] md:text-[70px] text-primary-green'>Values</span> in Premium Animal Products
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='text-base md:text-lg text-balance font-light font-geist text-gray-600 max-w-[500px] !mx-auto lg:!mx-0 !mb-8'
            >
              We provide exceptional animal care products through innovative research and cutting-edge technology. 
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <a href="#contact" className="btn btn-primary">
                Explore Products
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image - Hidden on mobile */}
          <div className="hidden lg:block">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 