import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    { name: "Dr. Sarah Johnson", role: "Head of Product Development", description: "Leading our innovative product research and development initiatives." },
    { name: "Michael Chen", role: "Manufacturing Director", description: "Overseeing quality control and production processes." },
    { name: "Dr. Emily Rodriguez", role: "Research Scientist", description: "Specializing in animal nutrition and product formulation." },
    { name: "David Thompson", role: "Quality Assurance Manager", description: "Ensuring all products meet the highest quality standards." }
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
          <h2 className="section-title">Meet our expert team</h2>
          <p className="section-subtitle">
            We aim to share information about our team of product development and manufacturing professionals.
          </p>
          
          <div className="grid grid-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="team-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="team-avatar">
                  <p>Avatar {index + 1}</p>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
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