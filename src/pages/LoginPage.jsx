import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#eef2f5] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[550px]">
        {/* Left Side - Login Form */}
        <div className="flex-1 bg-[#004b93] p-8 flex flex-col justify-center text-white">
          <button
            onClick={handleBack}
            className="mb-4 text-sm text-gray-200 hover:text-white underline w-fit"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-bold uppercase mb-8">Account Login</h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Username / ID" 
              className="w-full bg-[#003870] p-3 rounded text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-[#003870] p-3 rounded text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full bg-white text-black font-bold py-3 rounded-full hover:bg-gray-100 transition duration-300">
              LOG IN
            </button>
          </form>
          <button onClick={() => navigate('/register')} className="mt-4 text-sm underline text-center hover:text-gray-200 transition">
            Register here
          </button>
        </div>

        {/* Right Side - Reddybook Info */}
        <div className="flex-1 bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 flex flex-col justify-center text-white overflow-y-auto">
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
                "Easy navigation through all features"
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