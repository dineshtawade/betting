// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import api from "@/lib/axios";

// Login API function
const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Store token and user data
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      toast.success("Login successful! Redirecting to dashboard...");
      // Redirect to admin dashboard
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    },
  });

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    loginMutation.mutate(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Betting type images data
  const bettingImages = [
    { src: "https://images.unsplash.com/photo-1548932288-7e9ed15b7df1?w=100&h=100&fit=crop", alt: "Casino" },
    { src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=100&h=100&fit=crop", alt: "Sports Betting" },
    { src: "https://images.unsplash.com/photo-1594398708925-f3dcc3e6d922?w=100&h=100&fit=crop", alt: "Poker" },
    { src: "https://images.unsplash.com/photo-1594398906163-67bdb6f2df69?w=100&h=100&fit=crop", alt: "Slot Machines" }
  ];

  return (
    <div className="min-h-screen w-full bg-[#eef2f5] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[600px]">
        
        {/* Left Side - Login Form */}
        <div className="flex-1 bg-[#004b93] p-8 flex flex-col justify-center text-white">
          <button
            onClick={handleBack}
            className="mb-4 text-sm text-gray-200 hover:text-white underline w-fit"
          >
            ← Back
          </button>
          
          <h2 className="text-3xl font-bold uppercase mb-2">Welcome Back</h2>
          <p className="text-emerald-200 mb-8 text-sm">Please login to your account</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email / ID" 
                className="w-full bg-[#003870] p-3 rounded text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password" 
                className="w-full bg-[#003870] p-3 rounded text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            
            <button 
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-white text-black font-bold py-3 rounded-full hover:bg-gray-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loginMutation.isPending ? "LOGGING IN..." : "LOG IN"}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate('/forgot-password')} 
              className="text-xs underline hover:text-gray-200 transition"
            >
              Forgot Password?
            </button>
          </div>
          
          <button 
            onClick={() => navigate('/register')} 
            className="mt-4 text-sm underline text-center hover:text-gray-200 transition"
          >
            Don't have an account? Register here
          </button>
        </div>

        {/* Right Side - Reddybook Info with Images */}
        <div className="flex-1 bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 flex flex-col justify-center text-white overflow-y-auto">
          
          {/* Betting Type Images Grid */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-center">Popular Betting Games</h3>
            <div className="grid grid-cols-4 gap-3">
              {bettingImages.map((img, idx) => (
                <div key={idx} className="text-center">
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="text-xs mt-1 text-emerald-200">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              REDDYBOOK <span className="text-yellow-300">LOGIN</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-300 mb-4"></div>
            <p className="text-emerald-100 text-sm md:text-base leading-relaxed">
              Fast, Secure & Reliable – The reddybook login procedure is designed to be fast and secure. 
              They can log-in in a few seconds and get access to their accounts without delays.
            </p>
          </div>

          {/* Login Steps */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-yellow-300 text-emerald-900 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              Login Steps:
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-2 text-emerald-100">
                <span className="text-yellow-300">→</span> Type in your name or ID
              </li>
              <li className="flex items-center gap-2 text-emerald-100">
                <span className="text-yellow-300">→</span> Enter your password
              </li>
              <li className="flex items-center gap-2 text-emerald-100">
                <span className="text-yellow-300">→</span> Click on login
              </li>
            </ul>
          </div>

          {/* After Login Benefits */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-yellow-300 text-emerald-900 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Once logged in, users can:
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Check account balance",
                "Add funds",
                "Withdraw money",
                "Easy navigation through all features",
                "Live betting options",
                "24/7 customer support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1 text-emerald-100 text-sm">
                  <span className="text-yellow-300">✔</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-4 p-3 bg-emerald-700/50 rounded-lg border border-emerald-600">
            <p className="text-xs text-emerald-100 leading-relaxed">
              <span className="font-bold text-yellow-300">🔒 Note:</span> The system is streamlined to offer real-time access to make the entire experience seamless and easy. 
              Always ensure that your login credentials are secure and not shared with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}