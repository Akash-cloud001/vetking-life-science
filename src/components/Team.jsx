import { motion } from 'framer-motion'

const Team = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Meet our expert doctors</h2>
          <p className="section-subtitle">
            We aim to share information about our team of veterinary professionals.
          </p>
          
          <div className="grid grid-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="team-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="team-avatar">
                  <p>Avatar {item}</p>
                </div>
                <h3 className="team-name">Doctor {item}</h3>
                <p className="team-role">Veterinary Specialist</p>
                <div className="social-links">
                  <span>LinkedIn</span>
                  <span>Twitter</span>
                  <span>Facebook</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team 