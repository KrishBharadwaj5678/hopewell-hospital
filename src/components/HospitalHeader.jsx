import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const HospitalHeader = ({ darkMode, onToggleDarkMode, hospitalNameClass }) => (
  <>
    <header className="flex flex-col items-center mb-8">
      <motion.img
        src={logo}
        alt="Hopewell Hospital Logo"
        className="h-16 mb-2"
        loading="lazy"
        initial={{ y: -14, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      />
      <motion.h1
        className={`text-3xl font-bold text-center text-green-400 ${hospitalNameClass}`}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
      >
        Hopewell Hospital
      </motion.h1>
    </header>

    <motion.button
      onClick={onToggleDarkMode}
      className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-300 ease-in-out ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"}`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
    >
      {darkMode ? "☀️" : "🌙"}
    </motion.button>
  </>
);

export default HospitalHeader;
