import { motion } from 'framer-motion'
import AnimatedBadge from './ui/AnimatedBadge'

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
            className="text-4xl md:text-5xl lg:text-6xl font-semibold font-geist text-white !my-6 md:!my-6"
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
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              className="group relative overflow-hidden btn-small md:btn bg-gradient-to-r from-primary-purple to-primary-green text-white px-8 !py-3 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-primary-purple/25 transition-all duration-300"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Product Catalog
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-green to-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA 