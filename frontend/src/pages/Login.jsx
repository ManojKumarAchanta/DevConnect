import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../store/authStore";
import { User, Lock, LogIn } from "lucide-react"; // Icons

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { login } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(data, navigate);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-black text-white">
      <Toaster />

      {/* Animated Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-gray-900 shadow-lg rounded-lg p-8 border border-gray-700"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-teal-300 tracking-wide">
          Welcome Back to <span className="text-teal-500">DevConnect</span>
        </h1>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="mt-6 p-4 rounded-lg">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 relative"
          >
            <label className="block font-medium text-lg text-teal-300">
              Username:
            </label>
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500"
                size={20}
              />
              <input
                required
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full pl-12 pr-4 py-3 mt-2 text-teal-500 bg-gray-800 border border-teal-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-300 outline-none rounded-lg transition-all"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 relative"
          >
            <label className="block font-medium text-lg text-teal-300">
              Password:
            </label>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500"
                size={20}
              />
              <input
                required
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3 mt-2 text-teal-500 bg-gray-800 border border-teal-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-300 outline-none rounded-lg transition-all"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 py-3 mt-4 bg-teal-500 text-white font-semibold rounded-lg text-lg shadow-md transition-all hover:bg-teal-600 focus:outline-none"
            type="submit"
          >
            <LogIn size={20} /> Login
          </motion.button>
        </form>

        {/* Register Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-4 text-center text-teal-300"
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-teal-500 underline hover:text-teal-400 transition-all"
          >
            Register Now
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
