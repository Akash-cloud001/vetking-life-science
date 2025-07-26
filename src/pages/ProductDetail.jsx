import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import AnimatedBadge from '../components/ui/AnimatedBadge'
import { getProductById } from '../data/products'

const ProductDetail = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('Description')
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await getProductById(id)
        
        if (result.success) {
          setProduct(result.data)
        } else {
          setError(result.error)
        }
      } catch (err) {
        setError('Failed to fetch product')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-purple mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading product details...</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link 
            to="/products"
            className="bg-gradient-to-r from-primary-purple to-primary-green text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  // Create image carousel from product images
  const imageCarousel = product.images.map((src, index) => ({
    id: index + 1,
    src,
    alt: `${product.name} - View ${index + 1}`
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="pt-10 pb-0">
        <div className="container">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-primary-purple transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary-purple transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={imageCarousel[selectedImage].src}
                  alt={imageCarousel[selectedImage].alt}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                {/* Discount Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount}
                  </span>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {imageCarousel.map((image, index) => (
                  <motion.button
                    key={image.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative bg-white rounded-xl overflow-hidden shadow-md border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-primary-purple shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-20 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Category Badge */}
              <AnimatedBadge text={product.category} className="bg-white/80 border-gray-200" textClass="text-gray-600" />

              {/* Product Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-geist">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                  Save ₹{parseInt(product.originalPrice.replace('₹', '').replace(',', '')) - parseInt(product.price.replace('₹', '').replace(',', ''))}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Quick Features */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-purple rounded-full mr-3"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Information - Desktop Tabs / Mobile Cards */}
      <section className="pb-16">
        <div className="container">
          {/* Desktop: Tab Navigation */}
          <div className="hidden md:block bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {['Description', 'Specifications', 'Ingredients', 'Usage'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 transition-colors font-medium ${
                      activeTab === tab
                        ? 'border-primary-purple text-primary-purple'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Desktop: Tab Content */}
            <div className="p-6">
              {activeTab === 'Description' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Description</h3>
                    <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-primary-purple rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Specifications' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Specifications</h3>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-700">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Ingredients' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary-purple rounded-full"></div>
                          <span className="text-base font-medium text-gray-700">{ingredient}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Usage' && (
                <div className="space-y-6">
                  {/* Usage Instructions */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Instructions</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <p className="text-gray-700 leading-relaxed">{product.usage}</p>
                    </div>
                  </div>

                  {/* Warnings */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Warnings</h3>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <p className="text-gray-700 leading-relaxed">{product.warnings}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile: Separate Cards */}
          <div className="md:hidden space-y-6">
            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary-purple rounded-full mr-3"></span>
                Product Description
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{product.longDescription}</p>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary-purple rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary-green rounded-full mr-3"></span>
                Product Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700 text-sm">{key}</span>
                    <span className="text-gray-600 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ingredients Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Ingredients
              </h3>
              <div className="">
                <div className="grid grid-cols-1 gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className=""
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-purple rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">{ingredient}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    All ingredients are carefully selected and tested for quality and safety
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Usage Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Usage & Safety
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Usage Instructions</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-gray-700 leading-relaxed text-sm">{product.usage}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Important Warnings</h4>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-gray-700 leading-relaxed text-sm">{product.warnings}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {/* <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <img
                    src="/images/bottle1.png"
                    alt="Related Product"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Related Product {item}</h3>
                    <p className="text-gray-600 text-sm mb-3">Brief description of the related product.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">₹1,999</span>
                      <button className="bg-gradient-to-r from-primary-purple to-primary-green text-white px-4 py-2 rounded-lg text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}

export default ProductDetail 