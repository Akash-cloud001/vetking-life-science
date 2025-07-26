import { motion } from 'framer-motion'

const Services = () => {
  const productCategories = [
    { id: '001', title: 'Pet Nutrition', description: 'Premium food and supplements for optimal pet health.' },
    { id: '002', title: 'Livestock Products', description: 'Specialized products for farm animals and livestock.' },
    { id: '003', title: 'Veterinary Supplies', description: 'Professional-grade medical supplies and equipment.' },
    { id: '004', title: 'Hygiene Products', description: 'Grooming and cleaning products for animal care.' },
    { id: '005', title: 'Performance Enhancers', description: 'Supplements for athletic and working animals.' },
    { id: '006', title: 'Preventive Care', description: 'Products for disease prevention and wellness.' },
    { id: '007', title: 'Research Products', description: 'Laboratory and research-grade animal products.' },
    { id: '008', title: 'Custom Formulations', description: 'Tailored products for specific animal needs.' },
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
          <h2 className="section-title">Here are our product categories</h2>
          <p className="section-subtitle">
            We are committed to upholding the highest standards of product quality and manufacturing excellence.
          </p>
          
          <div className="grid grid-4">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="service-number">{category.id}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 