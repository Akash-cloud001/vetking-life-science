import { motion } from 'framer-motion'
import AnimatedBadge from './ui/AnimatedBadge'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="section max-w-[1200px] !mx-auto rounded-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden !mb-16 !py-12 md:!py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-purple rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-green rounded-full translate-x-40 translate-y-40"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <AnimatedBadge text="Ready to Get Started?" className="bg-white/20 border-gray-800" textClass="text-white" />

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-geist text-white mb-8"
          >
            Bring your animal care products to the{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-green bg-clip-text text-transparent font-branch capitalize">
              next level
            </span>{' '}
            of excellence
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center "
          >
            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <Link to="/products" className="btn btn-primary">
                Explore Products
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA 