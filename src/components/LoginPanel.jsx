import { motion } from "framer-motion";

const LoginPanel = ({
  darkMode,
  username,
  password,
  rememberMe,
  showPassword,
  usernameError,
  passwordError,
  textClass,
  inputClass,
  themeTransition,
  onSubmit,
  onUsernameChange,
  onPasswordChange,
  onRememberMeChange,
  onTogglePassword,
}) => (
  <motion.form
    onSubmit={onSubmit}
    className={`p-6 rounded-lg shadow-lg w-full ${themeTransition} ${darkMode ? "bg-gray-800" : "bg-white"}`}
    aria-labelledby="login-form"
    initial={{ y: 22, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      className="mb-6"
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, delay: 0.7, ease: "easeOut" }}
    >
      <label
        className={`block font-medium mb-1 ${textClass}`}
        htmlFor="username"
      >
        Username
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={onUsernameChange}
        aria-invalid={!!usernameError}
        className={`mt-1 block w-full p-3 border ${usernameError ? "border-red-500" : ""} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${themeTransition} ${inputClass}`}
        aria-describedby="username-error"
      />
      {usernameError && (
        <p id="username-error" className="text-red-500 text-sm mt-1">
          {usernameError}
        </p>
      )}
    </motion.div>

    <motion.div
      className="mb-6"
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, delay: 0.85, ease: "easeOut" }}
    >
      <label
        className={`block font-medium mb-1 ${textClass}`}
        htmlFor="password"
      >
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={onPasswordChange}
          aria-invalid={!!passwordError}
          className={`mt-1 block w-full p-3 border ${passwordError ? "border-red-500" : ""} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${themeTransition} ${inputClass}`}
          aria-describedby="password-error"
        />
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {passwordError && (
        <p id="password-error" className="text-red-500 text-sm mt-1">
          {passwordError}
        </p>
      )}
    </motion.div>

    <motion.div
      className="flex items-center mb-6"
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, delay: 1, ease: "easeOut" }}
    >
      <input
        type="checkbox"
        id="rememberMe"
        checked={rememberMe}
        onChange={onRememberMeChange}
        className="hidden"
      />
      <label htmlFor="rememberMe" className="flex items-center cursor-pointer">
        <div
          className={`relative w-6 h-6 border-2 rounded-md flex items-center justify-center transition duration-300 ${rememberMe ? "border-blue-600 bg-blue-600" : "border-gray-300 bg-white"}`}
        >
          {rememberMe && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <span className={`ml-2 ${textClass}`}>Remember Me</span>
      </label>
    </motion.div>

    <motion.button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, delay: 1.15, ease: "easeOut" }}
    >
      Login
    </motion.button>
    <motion.p
      className={`text-center mt-4 ${textClass}`}
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, delay: 1.25, ease: "easeOut" }}
    >
      <a href="#" className="hover:underline">
        Forgot Password?
      </a>
    </motion.p>
  </motion.form>
);

export default LoginPanel;
