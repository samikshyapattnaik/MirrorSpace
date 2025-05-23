import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const LoginModal = ({ onClose, onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Email/Password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://mirrorspace-39h4.onrender.com/user/login", {
        email,
        password,
      });

      toast.success("Login successful");
      localStorage.setItem("token", res.data.token);  // Save the token in local storage
      if (onLogin) onLogin();
      navigate("/");  // Redirect to home page after successful login
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Google login (redirect to backend)
  const handleGoogleLogin = () => {
    window.open("http://localhost:8080/auth/google", "_self"); // Redirect to backend Google login
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-4 rounded shadow w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          aria-label="Close login modal"
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="mb-4">
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border p-2 rounded pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-[38px] text-sm text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Or Text */}
        <div className="text-center text-gray-400 mb-2">or</div>

        {/* Google Login */}
        <div className="mb-3 flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
          >
            <FaGoogle className="text-red-500" />
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => {
              onClose();
              navigate("/signup");
            }}
            className="text-blue-600 font-semibold cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
