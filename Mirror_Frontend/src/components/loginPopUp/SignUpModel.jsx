import React, { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Unexpected response format");
      }
    
      const data = await res.json();
    
      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }
    
      setSubmitted(true);
      toast.success("✅ " + data.message);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };  

  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-500 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

      {submitted ? (
        <div className="text-green-600 text-center font-semibold">
          ✅ Registration successful!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              name="phoneno"
              required
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              value={formData.phoneno}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
             {/*Password strength indicator*/}
            {formData.password && (
              <p
                className={`mt-1 text-sm font-medium ${
                  passwordStrength.score < 2
                    ? "text-red-600"
                    : passwordStrength.score < 4
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Strength: {strengthLabels[passwordStrength.score]}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2 rounded-xl transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      )}
    </div>
  );
}
