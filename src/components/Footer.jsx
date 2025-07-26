import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-50 !pt-16 !pb-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <div className="footer-content flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left Side - Company Info */}
            <div className="company-info flex-1 max-w-md !mb-4">
              <div className="company-logo mb-4">
                <img src="/images/vetSolo.png" alt="VetKing Life Science" className="h-32 w-auto" />
              </div>
              <p className="text-gray-600 text-sm !my-2 font-medium">
                Our vision is to provide exceptional animal care products through innovative research and cutting-edge technology.
              </p>
              <div className="contact-details flex flex-col gap-1">
                <p className="text-sm text-gray-600 font-medium">123 Science Park Drive</p>
                <p className="text-sm text-gray-600 font-medium">Research Triangle, NC 27709</p>
                <a href="mailto:info@vetking.com" className="text-sm text-gray-600 font-medium block">Email: info@vetking.com</a>
                <a href="tel:+15551234567" className="text-sm text-gray-600 font-medium">Phone: +1 (555) 123-4567</a>
              </div>
            </div>
            
            {/* Right Side - Navigation Links */}
            <div className=" flex flex-col md:flex-row gap-4 lg:gap-12 items-start md:items-end justify-start md:justify-end">
              
              <div className="footer-section">
                  <h3 className="font-semibold text-gray-800 mb-4">Products</h3>
                  <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">About Us</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-gray-900">Pet Nutrition</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-gray-900">Veterinary Supplies</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-gray-900">Hygiene Products</a></li>
                  </ul>
                </div>
                
                <div className="footer-section  !mb-4 md:!mb-0" >
                  <h3 className="font-semibold text-gray-800 ">Resources</h3>
                  <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Manufacturing</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-gray-900">Product Catalog</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-gray-900">Quality Standards</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-gray-900">Technical Support</a></li>
                  </ul>
                </div>
            </div>
          </div>
          
          <div className="footer-bottom border-t border-gray-200 pt-8 mt-8">
            <p className="text-gray-500 text-sm">&copy; 2025 VetKing Life Science. All rights reserved. | Premium Animal Care Products</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 