import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { UserPlus, Mail, Lock, User } from "lucide-react"; // Icons for a premium look
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const { signup } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(data, navigate);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-black text-white">
      <Toaster />
      <motion.form
        onSubmit={handleSubmit}
        className="p-8 flex flex-col bg-gray-900 shadow-lg shadow-gray-800 rounded-lg w-full max-w-md gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="font-semibold text-3xl text-center text-teal-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Register Now
        </motion.h1>

        <div className="flex flex-col gap-4 mt-4">
          {[
            {
              name: "fullName",
              placeholder: "Full Name",
              icon: <User className="text-teal-500" />,
            },
            {
              name: "username",
              placeholder: "Username",
              icon: <UserPlus className="text-teal-500" />,
            },
            {
              name: "email",
              placeholder: "Email",
              icon: <Mail className="text-teal-500" />,
            },
            {
              name: "password",
              placeholder: "Password",
              type: "password",
              icon: <Lock className="text-teal-500" />,
            },
          ].map(({ name, placeholder, type = "text", icon }, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 + index * 0.1 }}
            >
              {icon}
              <input
                required
                type={type}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-gray-800 text-teal-500 border border-teal-500 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-300 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col gap-4 mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg text-lg font-semibold hover:bg-teal-600 transition-colors duration-300"
            type="submit"
          >
            Register
          </button>
          <p className="text-center text-teal-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-500 underline hover:text-teal-400 transition-colors"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Signup;
