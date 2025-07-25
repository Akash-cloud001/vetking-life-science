import { motion } from 'framer-motion'

const AnimatedBadge = ({ 
  text = "Our Mission", 
  dotColor = "bg-primary-purple",
  className = "",
  delay = 0,
  textClass = "text-gray-600",
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2  backdrop-blur-sm !px-4 !py-1 rounded-full border mb-6 ${className}`}
      {...props}
    >
      <span className={`w-2 h-2 ${dotColor} rounded-full`}></span>
      <span className={`text-sm font-medium ${textClass}`}>{text}</span>
    </motion.div>
  )
}

export default AnimatedBadge 