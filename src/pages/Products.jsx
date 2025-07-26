import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedBadge from '../components/ui/AnimatedBadge'
import { getAllProducts } from '../data/products'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await getAllProducts()
        
        if (result.success) {
          setProducts(result.data)
        } else {
          setError(result.error)
        }
      } catch (err) {
        setError('Failed to fetch products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-purple mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading products...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-gradient-to-r from-primary-purple to-primary-green text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-10 pb-0">
        <div className="container">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-primary-purple transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Products</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-0 pb-8 md:pb-16">
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
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 relative"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.images[0]} 
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
                  <div className="mb-15">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-purple rounded-full mr-2 "></span>
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <Link to={`/products/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-4/5 bg-gradient-to-r from-primary-purple to-primary-green text-white py-3 px-6 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl absolute bottom-5 left-1/2 -translate-x-1/2 "
                    >
                      Learn More
                    </motion.button>
                  </Link>
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