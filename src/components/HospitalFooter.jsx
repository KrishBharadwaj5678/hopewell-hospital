import { motion } from "framer-motion";

const socialLinks = [
  ["https://facebook.com", "#3b5998", "Facebook", "fa-facebook-f", 1.65],
  ["https://twitter.com", "#1DA1F2", "Twitter", "fa-twitter", 1.72],
  ["https://instagram.com", "#C13584", "Instagram", "fa-instagram", 1.79],
  ["https://linkedin.com", "#0077B5", "LinkedIn", "fa-linkedin-in", 1.86],
];

const HospitalFooter = ({
  darkMode,
  textClass,
  themeTransition,
  onInstagramAnimationComplete,
}) => (
  <motion.footer
    className={`w-full text-center mt-8 p-6 rounded-lg shadow-lg ${themeTransition} ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"}`}
    initial={{ y: 18, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.h2
      className={`text-lg font-bold ${textClass}`}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, delay: 1.5, ease: "easeOut" }}
    >
      Stay Connected
    </motion.h2>
    <div className="flex justify-center space-x-4 mt-2">
      {socialLinks.map(([href, color, label, icon, delay]) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition duration-200"
          style={{ color }}
          aria-label={label}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay, ease: "easeOut" }}
          onAnimationComplete={
            label === "Instagram" ? onInstagramAnimationComplete : undefined
          }
        >
          <i className={`fab ${icon}`}></i>
        </motion.a>
      ))}
    </div>
    <p className={`mt-4 ${textClass}`}>
      &copy; {new Date().getFullYear()} Hopewell Hospital. All rights reserved.
    </p>
    <p className={`mt-1 ${textClass}`}>
      Contact us:{" "}
      <a href="mailto:contact@hospital.com" className="hover:underline">
        hopewell@hospital.com
      </a>
    </p>
    <p className={`mt-1 ${textClass}`}>
      <a
        href="/policy.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Privacy Policy
      </a>
    </p>
  </motion.footer>
);

export default HospitalFooter;
