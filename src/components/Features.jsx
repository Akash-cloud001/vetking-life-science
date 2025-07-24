import { motion } from 'framer-motion'
import Dna from './svgs/Dna'
import Tube from './svgs/Tube'

const Features = () => {
  return (
    <section className="max-w-[1200px] rounded-4xl !mx-auto section bg-gradient-to-br from-primary-purple to-primary-green relative overflow-hidden">
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-6 md:gap-8 ">
              <motion.div 
                className="!p-4 sm:!p-8 text-center"
                initial={{ opacity: 0, scale: 1, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl sm:text-5xl font-geist font-bold text-white">100%</div>
                <div className="text-white/80 text-sm font-medium">Quality Certified</div>
              </motion.div>
              <motion.div 
                className="!p-4 sm:!p-8 text-center"
                initial={{ opacity: 0, scale: 1, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl sm:text-5xl font-geist font-bold text-white">50M+</div>
                <div className="text-white/80 text-sm font-medium">Products Delivered</div>
              </motion.div>
              <motion.div 
                className="!p-4 sm:!p-8 text-center"
                initial={{ opacity: 0, scale: 1, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl sm:text-5xl font-geist font-bold text-white">99%</div>
                <div className="text-white/80 text-sm font-medium">Customer Satisfaction</div>
              </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 