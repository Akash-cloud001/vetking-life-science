import { motion } from 'framer-motion'

const Features = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Your Trusted Veterinary Healthcare Providers</h2>
          <p className="section-subtitle">
            We provide comprehensive veterinary services with cutting-edge technology and compassionate care.
          </p>
          
          <div className="grid grid-2">
            <div className="card card-gradient">
              <h3>Very fast and accurate service with us</h3>
              <p>Advanced diagnostic tools and rapid response times for emergency care.</p>
            </div>
            
            <div className="grid grid-3">
              <div className="stats-card">
                <div className="stats-number">100%</div>
                <div className="stats-label">Our Doctors Certified</div>
              </div>
              <div className="stats-card">
                <div className="stats-number">25M+</div>
                <div className="stats-label">Happy global users</div>
              </div>
              <div className="stats-card">
                <div className="stats-number">99%</div>
                <div className="stats-label">Satisfying treatment</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 