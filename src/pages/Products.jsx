import { motion } from 'framer-motion'
import AnimatedBadge from '../components/ui/AnimatedBadge'

const Products = () => {
  const products = [
    {
      id: 1,
      name: "VitaPet Plus",
      category: "Pet Nutrition",
      description: "Advanced multivitamin supplement for dogs and cats with essential nutrients for optimal health and vitality.",
      image: "/images/bottle1.png",
      features: ["Omega-3 Fatty Acids", "Antioxidants", "Digestive Enzymes"],
      price: "₹2,499",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "CleanCare Pro",
      category: "Hygiene Products",
      description: "Professional-grade cleaning solution for veterinary equipment and facilities with antimicrobial properties.",
      image: "/images/Spray-Bottle.jpg",
      features: ["Antimicrobial", "Non-toxic", "Fast-acting"],
      price: "₹500",
      gradient: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      name: "ImmuneBoost Max",
      category: "Pet Nutrition",
      description: "Immune system support formula designed to strengthen natural defenses and promote overall wellness.",
      image: "/images/vitamins.jpg",
      features: ["Vitamin C", "Echinacea", "Probiotics"],
      price: "₹500",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      name: "SafeInject Kit",
      category: "Veterinary Supplies",
      description: "Complete injection kit with safety features for precise and secure veterinary procedures.",
      image: "/images/bottle1.png",
      features: ["Safety Lock", "Precision Needle", "Sterile"],
      price: "₹500",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      name: "DermaCare Solution",
      category: "Hygiene Products",
      description: "Specialized skin care treatment for pets with sensitive skin and dermatological conditions.",
      image: "/images/Spray-Bottle.jpg",
      features: ["Hypoallergenic", "Moisturizing", "Anti-inflammatory"],
      price: "₹500",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      id: 6,
      name: "JointFlex Advanced",
      category: "Pet Nutrition",
      description: "Joint health supplement with glucosamine and chondroitin for improved mobility and comfort.",
      image: "/images/vitamins.jpg",
      features: ["Glucosamine", "Chondroitin", "MSM"],
      price: "₹500",
      gradient: "from-indigo-500 to-purple-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <AnimatedBadge text="Our Products" className="bg-white/80 border-gray-200" textClass="text-gray-600" />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold font-geist text-gray-900 mb-6"
            >
              Premium Animal Care
              <span className="bg-gradient-to-r from-primary-purple to-primary-green bg-clip-text text-transparent font-branch block">
                Products
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover our comprehensive range of high-quality products designed to enhance the health and well-being of animals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {product.price}
                    </span>
                  </div>
                </div>
                
                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-geist">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-purple rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-purple to-primary-green text-white py-3 px-6 rounded-2xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-4xl max-w-[1200px] mx-auto">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-geist">
              Ready to enhance your animal care?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact our team to learn more about our products and get personalized recommendations for your needs.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-purple to-primary-green text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-primary-purple/25 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}

export default Products