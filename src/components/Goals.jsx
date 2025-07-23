import { motion } from 'framer-motion'

const Goals = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Let's know about our main goal</h2>
          <p className="section-subtitle">
            Our mission is to offer clear and comprehensive information about veterinary services, 
            conditions, and treatment options to ensure the best care for your animals.
          </p>
          
          <div className="grid grid-2">
            <div>
              <ul className="goals-list">
                <li>Providing Accessible Information</li>
                <li>Enhancing Patient Engagement</li>
                <li>Promoting Health Education</li>
                <li>Building Trust</li>
                <li>Community Involvement</li>
                <li>Security and Privacy</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="placeholder-image">
                <p>Doctor Image Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Goals 