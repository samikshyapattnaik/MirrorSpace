import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import zxcvbn from "zxcvbn";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const passwordStrength = zxcvbn(formData.password);
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!/^\d{10}$/.test(formData.phoneno)) {
      toast.error("❌ Phone number must be 10 digits");
      setLoading(false);
      return;
    }

    if (passwordStrength.score < 2) {
      toast.error("❌ Password is too weak");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://mirrorspace-39h4.onrender.com/users/register",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("✅ " + response.data.message);
      setSubmitted(true);
      setFormData({ name: "", email: "", phoneno: "", password: "" });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Registration failed. Please try again.";
      toast.error("❌ " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Welcome to Register
        </h1>

        {submitted ? (
          <div className="text-green-700 text-center font-semibold">
            ✅ Registration successful!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="phoneno" className="block mb-1 font-semibold text-gray-700">
                Phone
              </label>
              <input
                id="phoneno"
                type="tel"
                name="phoneno"
                required
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                value={formData.phoneno}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-semibold text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {formData.password && (
                <p
                  className={`mt-1 text-sm font-medium ${
                    passwordStrength.score < 2
                      ? "text-red-600"
                      : passwordStrength.score < 4
                      ? "text-yellow-600"
                      : "text-green-700"
                  }`}
                >
                  Strength: {strengthLabels[passwordStrength.score]}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-2 rounded-xl font-semibold transition-all duration-200 ${
                loading
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-blue-700 hover:shadow-md"
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
