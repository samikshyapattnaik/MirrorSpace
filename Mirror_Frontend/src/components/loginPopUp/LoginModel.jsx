import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import { FaFacebook } from "react-icons/fa";

const LoginModal = ({ onClose, onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Standard Email/Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });

      toast.success("Login successful");
      localStorage.setItem("token", res.data.token);
      if (onLogin) onLogin();
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      console.error("Login failed", err);
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post("http://localhost:5000/user/google-login", {
        token: credentialResponse.credential,
      });

      toast.success("Google login successful");
      localStorage.setItem("token", res.data.token);
      if (onLogin) onLogin();
      navigate("/");
    } catch (err) {
      toast.error("Google login failed");
      console.error(err);
    }
  };

  const handleGoogleFailure = () => {
    toast.error("Google login failed");
  };

  // Facebook Login
  const handleFacebookResponse = async (response) => {
    try {
      const res = await axios.post("http://localhost:5000/user/facebook-login", {
        accessToken: response.accessToken,
        userID: response.userID,
      });

      toast.success("Facebook login successful");
      localStorage.setItem("token", res.data.token);
      if (onLogin) onLogin();
      navigate("/");
    } catch (err) {
      toast.error("Facebook login failed");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-4 rounded shadow w-full max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
          aria-label="Close login modal"
        >
          <AiOutlineClose className="w-6 h-6 sm:w-5 sm:h-5" />
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
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
              name="password"
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
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center text-gray-400 mb-2">or</div>

        {/* Google Login */}
        <div className="mb-3 flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            useOneTap
          />
        </div>

        {/* Facebook Login */}
        <div className="mb-4 flex justify-center">
          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookResponse}
            cssClass="flex items-center justify-center gap-2 border py-2 rounded text-blue-600 w-full"
            icon={<FaFacebook size={20} />}
            textButton=" Login with Facebook"
          />
        </div>

        {/* Sign Up Link */}
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
