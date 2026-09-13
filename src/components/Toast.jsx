import { AnimatePresence, motion } from "framer-motion";

const Toast = ({ show, greeting }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="fixed top-5 right-5 z-50 bg-blue-600 text-white p-4 rounded-md shadow-md transition-transform transform opacity-90"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span>{greeting}, Welcome to Hopewell Hospital!</span>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Toast;
