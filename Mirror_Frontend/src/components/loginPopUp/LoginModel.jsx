import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';

const LoginModal = ({ onClose, onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      email,
      password,
    };

    try {
      const res = await axios.post("http://localhost:5000/user/login", payload);
      setLoading(false);
      toast.success("Login successful");
      localStorage.setItem("token", res.data.token);
      if (onLogin) onLogin();
      navigate("/");
    } catch (err) {
      setLoading(false);
      toast.error(err.response?.data?.message || "Login failed");
      console.error("Login failed", err);
    }
    
  };
// handel google login
const handleGoogleSuccess = (credentialResponse) => {
  alert("Google login successful", credentialResponse);
};

const handleGoogleFailure = () => {
  toast.error("Google login failed");
};
// handel facebook login
  const handleFacebookLogin = () => {
    alert("Facebook Login Clicked");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-2 rounded shadow w-96 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Password Field with Toggle */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
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
            className={`w-full py-2 rounded mb-4 text-white ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        {/* Divider */}
        <div className="text-center text-gray-400 mb-2">or</div>
       
        {/* Google Login */}
        <div className="w-full mb-3">
           <GoogleLogin
             onSuccess={handleGoogleSuccess}
             onError={handleGoogleFailure}
             width="100%"
             useOneTap
          />
          </div>
        {/* Facebook Login */}
        <button
          onClick={handleFacebookLogin}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded text-blue-600"
        >
          <FaFacebook size={20} />
          Login with Facebook
        </button>
  </form>
        {/* Sign Up Redirect */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 font-semibold cursor-pointer"
            onClick={() => {
              onClose();
              navigate("/signup");
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;

