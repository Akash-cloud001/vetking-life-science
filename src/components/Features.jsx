import { motion } from 'framer-motion'

const Features = () => {
  return (
    <section className="max-w-[1200px] rounded-4xl !mx-auto  bg-white relative overflow-hidden border border-gray-100 shadow-lg !px-12 !py-12">
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >          
          {/* Left Side - Content */}
          <div className="flex-1 max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold !mb-4 font-branch bg-gradient-to-r from-primary-purple to-primary-green bg-clip-text text-transparent"
            >
              Innovate, develop and deliver.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8 font-geist"
            >
              Effortlessly bring cutting-edge solutions to your animal care needs through advanced research and quality manufacturing.
            </motion.p>
            
           
          </div>
          
          {/* Right Side - Dynamic Visual Elements */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Stats Cards */}
              <motion.div 
                className="bg-gradient-to-br from-primary-purple/10 to-primary-purple/20 rounded-3xl !p-6 text-center border border-primary-purple/20"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-purple mb-2">100%</div>
                <div className="text-gray-700 font-medium text-sm">Quality Certified</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-primary-green/10 to-primary-green/20 rounded-3xl !p-6 text-center border border-primary-green/20"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-green mb-2">50M+</div>
                <div className="text-gray-700 font-medium text-sm">Products Delivered</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-purple-500/10 to-green-500/20 rounded-3xl !p-6 text-center border border-purple-500/20"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">99%</div>
                <div className="text-gray-700 font-medium text-sm">Customer Satisfaction</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-green-500/10 to-blue-500/20 rounded-3xl !p-6 text-center border border-green-500/20"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium text-sm">Support Available</div>
              </motion.div>
            </div>
            
            {/* Floating Icons */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 