import { motion } from "framer-motion"

const Caret = () => {
  return (
    <motion.div
    className="w-0.5 h-7 bg-[#192060] "
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
     />
  )
}

export default Caret