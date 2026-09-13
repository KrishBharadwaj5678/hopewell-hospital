import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import background from "../assets/images/background.png";
import HospitalFooter from "./HospitalFooter";
import HospitalHeader from "./HospitalHeader";
import LoginPanel from "./LoginPanel";
import Toast from "./Toast";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernameError("");
    setPasswordError("");

    let valid = true;

    if (!username) {
      setUsernameError("Username is required.");
      valid = false;
    } else if (username.length < 3) {
      setUsernameError("Username must be at least 3 characters long.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      valid = false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      valid = false;
    } else if (!/[0-9]/.test(password)) {
      setPasswordError("Password must contain at least one number.");
      valid = false;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError("Password must contain at least one special character.");
      valid = false;
    }

    if (!valid) return;
  };

  useEffect(() => {
    const hours = new Date().getHours();
    setGreeting(
      hours < 12
        ? "Good Morning"
        : hours < 18
          ? "Good Afternoon"
          : "Good Evening",
    );

    const timer = setTimeout(() => setShowToast(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showToast) return undefined;

    const timer = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(timer);
  }, [showToast]);

  const backgroundClass = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textClass = darkMode ? "text-gray-300" : "text-gray-800";
  const inputClass = darkMode
    ? "bg-gray-800 text-white border-gray-600"
    : "bg-white text-gray-800 border-gray-300";
  const hospitalNameClass = darkMode ? "text-green-400" : "text-gray-900";
  const themeTransition = "transition-colors duration-300 ease-in-out";

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen ${themeTransition} ${backgroundClass}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <motion.div
        className={`relative z-10 w-full max-w-md p-4 transition-opacity duration-700 ease-in-out ${themeTransition} ${textClass}`}
        initial={{ y: 24, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <HospitalHeader
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode((prev) => !prev)}
          hospitalNameClass={hospitalNameClass}
        />
        <LoginPanel
          darkMode={darkMode}
          username={username}
          password={password}
          rememberMe={rememberMe}
          showPassword={showPassword}
          usernameError={usernameError}
          passwordError={passwordError}
          textClass={textClass}
          inputClass={inputClass}
          themeTransition={themeTransition}
          onSubmit={handleSubmit}
          onUsernameChange={(event) => setUsername(event.target.value)}
          onPasswordChange={(event) => setPassword(event.target.value)}
          onRememberMeChange={(event) => setRememberMe(event.target.checked)}
          onTogglePassword={() => setShowPassword((prev) => !prev)}
        />
        <HospitalFooter
          darkMode={darkMode}
          textClass={textClass}
          themeTransition={themeTransition}
          onInstagramAnimationComplete={() => setShowToast(true)}
        />
      </motion.div>
      <Toast show={showToast} greeting={greeting} />
    </div>
  );
};

export default LoginForm;
