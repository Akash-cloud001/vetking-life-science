import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const location = useLocation()

  return (
    <>
      <motion.header 
        className="header"
        style={{ height: 'var(--nav-height)' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <nav className="nav">
            <motion.div 
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/images/vetSolo.png" alt="VetKing Life Science" className="w-auto h-18" />
            </motion.div>
            
            <div className="flex items-center gap-4 md:gap-8 justify-center">
              {/* Desktop Navigation */}
              <ul className="flex text-primary-purple/90 font-medium hover:text-primary-purple/100 transition-colors">
                <li>
                  <Link
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                  >
                    Home
                  </Link>
                </li>
              </ul>
              
              {/* View Products Button */}
              <Link to="/products" className="btn-small btn-primary font-geist !font-medium !text-small inline-flex">
                View Products
              </Link>
            </div>
          </nav>
        </div>
      </motion.header>
    </>
  )
}

export default Header 