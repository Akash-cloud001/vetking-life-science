import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    { id: '001', title: 'Path to Wellness', description: 'Personalized care plans for optimal health.' },
    { id: '002', title: 'Mental Health Services', description: 'Behavioral therapy and psychological care.' },
    { id: '003', title: 'Diagnostic Services', description: 'Advanced medical procedures and tests.' },
    { id: '004', title: 'Beyond Medicine', description: 'Holistic approaches to animal wellness.' },
    { id: '005', title: 'Pediatric Care', description: 'Comprehensive healthcare for young animals.' },
    { id: '006', title: 'Telehealth Services', description: 'Remote consultations and follow-up care.' },
    { id: '007', title: 'Future of Care', description: 'Innovative treatments and technology.' },
    { id: '008', title: 'Holistic Health', description: 'Complete approach to animal well-being.' },
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
          <h2 className="section-title">Here are some key vision</h2>
          <p className="section-subtitle">
            We are committed to upholding the highest standards of veterinary excellence and innovation.
          </p>
          
          <div className="grid grid-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="service-number">{service.id}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 