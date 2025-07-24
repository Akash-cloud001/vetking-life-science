import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Header = () => {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/research', label: 'Research' },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

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
            
            {/* Desktop Navigation */}
            
            
            <div className="flex items-center gap-4 md:gap-10 justify-center">
              {/* Mobile Hamburger Menu */}
              <ul className="nav-links hidden md:flex">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
              
              {/* Desktop Button */}
              <Link to="/products" className="btn-small btn-primary font-geist !font-medium !text-small inline-flex">
                View Products
              </Link>

              <button
                onClick={toggleSidebar}
                className="md:hidden cursor-pointer rounded-lg btn-small btn-secondary hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isSidebarOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed right-0 w-80 bg-white shadow-2xl z-50 md:hidden"
            style={{ 
              top: 'var(--nav-height)',
              height: 'calc(100vh - var(--nav-height))'
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              {/* Sidebar Navigation */}
              <nav className="flex-1 p-6">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeSidebar}
                        className={`block !py-3 !px-4  text-lg font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'bg-primary-purple text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Sidebar Footer */}
              {/* <div className="p-6 border-t border-gray-200">
                <Link
                  to="/products"
                  onClick={closeSidebar}
                  className="btn btn-primary font-geist !font-medium !text-base w-full justify-center"
                >
                  View Products
                </Link>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header 