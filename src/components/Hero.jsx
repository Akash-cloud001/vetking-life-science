import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-[calc(100dvh-85px)] flex items-center justify-center">
      <div className="container w-full">
        <motion.div 
          className="max-w-3xl w-full !mx-auto flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='text-7xl font-medium font-geist text-black tracking-tight text-balance text-center !mb-3'
          >
            Discover Our Mission and Values in Premium Animal Products
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='text-base text-balance font-light font-geist text-gray-600 max-w-[400px] text-center !mb-8'
          >
            We provide exceptional animal care products through innovative research and cutting-edge technology. 
            
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              Explore Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 