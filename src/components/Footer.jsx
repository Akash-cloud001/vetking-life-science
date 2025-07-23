import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Let's Connect with us</h2>
          
          <div className="footer-content">
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Primary Care</a></li>
                <li><a href="#">Emergency Care</a></li>
                <li><a href="#">Surgery</a></li>
                <li><a href="#">Diagnostics</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Publications</a></li>
                <li><a href="#">Education</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li><a href="#">Get in Touch</a></li>
                <li><a href="#">Book Appointment</a></li>
                <li><a href="#">Emergency</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 VetKing Life Science. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 