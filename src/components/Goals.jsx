import { motion } from 'framer-motion'

const Goals = () => {
  const goals = [
    {
      id: 1,
      category: "Innovation",
      number: "01",
      title: "Product Development",
      subtitle: "Cutting-edge Solutions",
      description: "Creating breakthrough animal healthcare products through advanced research and innovative design methodologies.",
      image: "/images/product-design.jpg",
      icon: "🔬",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      category: "Quality", 
      number: "02",
      title: "Manufacturing",
      subtitle: "Premium Standards",
      description: "Maintaining the highest quality standards in every step of our manufacturing process for consistent excellence.",
      image: "/images/quality-manu.jpg",
      icon: "⚡",
      gradient: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      category: "Research",
      number: "03", 
      title: "Development",
      subtitle: "Scientific Excellence",
      description: "Pioneering breakthrough technologies through dedicated research initiatives that advance veterinary science.",
      image: "/images/research-development.jpg",
      icon: "🧬",
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm !px-4 !py-1 rounded-full border border-gray-200 mb-6 animate-pulse"
            >
              <span className="w-2 h-2 bg-primary-purple rounded-full"></span>
              <span className="text-sm font-medium text-gray-600">Our Mission</span>
            </motion.div>
            
            <h2 className="section-title font-geist text-4xl md:text-5xl !mt-2 !mb-12">
              Let's know about our 
              <span className="bg-gradient-to-r from-primary-purple to-primary-green bg-clip-text text-transparent font-branch capitalize font-semibold"> main goal</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First two cards for md screens */}
            {goals.slice(0, 2).map((goal, index) => (
              <motion.div
                key={goal.id}
                className="group relative md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Main Card Container */}
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={goal.image} 
                      alt={goal.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`}></div>
                    
                    {/* Large Number Overlay */}
                    <div className="absolute bottom-4 right-4">
                      <div className="text-6xl font-bold text-white/20 font-geist">
                        {goal.number}
                      </div>
                    </div>
                  </div>
                  
                  <div className="!px-4 !py-4 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-8">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800 !mb-2 group-hover:text-primary-purple transition-colors duration-300 font-geist">
                          {goal.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                      {goal.description}
                    </p>
                    
                    <motion.div
                      className="flex items-center justify-end mt-auto"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm font-semibold text-primary-purple mr-2">
                        Learn More
                      </span>
                      <svg className="w-4 h-4 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-purple/10 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary-green/10 to-transparent rounded-tr-full"></div>
                </div>
              </motion.div>
            ))}
            
            {/* Third card - centered on md screens, normal position on lg+ */}
            <motion.div
              className="md:col-span-1 md:mx-auto md:max-w-md lg:col-span-1 lg:max-w-none md:h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="group relative h-full">
                {/* Main Card Container */}
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={goals[2].image} 
                      alt={goals[2].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`}></div>
                    
                    {/* Large Number Overlay */}
                    <div className="absolute bottom-4 right-4">
                      <div className="text-6xl font-bold text-white/20 font-geist">
                        {goals[2].number}
                      </div>
                    </div>
                  </div>
                  
                  <div className="!px-4 !py-4 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-8">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800 !mb-2 group-hover:text-primary-purple transition-colors duration-300 font-geist">
                          {goals[2].title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                      {goals[2].description}
                    </p>
                    
                    <motion.a
                      href="/"
                      className="flex items-center justify-end mt-auto"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm font-semibold text-primary-purple mr-2">
                        Learn More
                      </span>
                      <svg className="w-4 h-4 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-purple/10 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary-green/10 to-transparent rounded-tr-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-primary-purple to-primary-green rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Goals 